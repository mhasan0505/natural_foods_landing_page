/* eslint-env node */
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import process from "node:process";
import Order from "./models/Order.js";
import createOrdersRouter, { serializeOrder } from "./routes/orders.js";
import createProductsRouter from "./routes/products.js";

dotenv.config();
dotenv.config({ path: ".env.local", override: true });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/nautral_foods";

const sseClients = new Set();

const broadcast = (payload) => {
  const data = `data: ${JSON.stringify(payload)}\n\n`;
  sseClients.forEach((client) => {
    client.write(data);
  });
};

const addClient = (res) => {
  sseClients.add(res);
};

const removeClient = (res) => {
  sseClients.delete(res);
};

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/orders", createOrdersRouter({ broadcast, addClient, removeClient }));
app.use("/products", createProductsRouter());

let changeStreamActive = false;
let replicaSetWarningShown = false;

const startChangeStream = async () => {
  // Don't retry if replica set is not available
  if (!changeStreamActive && replicaSetWarningShown) {
    return;
  }

  try {
    changeStreamActive = true;
    const stream = Order.watch([], { fullDocument: "updateLookup" });

    stream.on("change", async (change) => {
      if (change.operationType === "delete") {
        broadcast({
          type: "order-deleted",
          data: { id: change.documentKey?._id },
        });
        return;
      }

      const doc =
        change.fullDocument || (await Order.findById(change.documentKey?._id));
      if (doc) {
        broadcast({ type: "order-updated", data: serializeOrder(doc) });
      }
    });

    stream.on("error", (err) => {
      changeStreamActive = false;

      if (err.codeName === "Location40573") {
        if (!replicaSetWarningShown) {
          replicaSetWarningShown = true;
          console.warn(
            "⚠️  Change streams not supported (not a replica set). Real-time updates disabled.",
          );
          console.log(
            "💡 For real-time updates, use MongoDB Atlas or set up a local replica set.",
          );
          console.log("📖 See MONGODB_SETUP.md for replica set configuration.");
        }
        // Don't retry - replica set won't magically appear
      } else {
        console.error("Change stream error", err);
        // Retry other errors after 5 seconds
        setTimeout(startChangeStream, 5000);
      }
    });

    stream.on("close", () => {
      changeStreamActive = false;
      if (!replicaSetWarningShown) {
        replicaSetWarningShown = true;
        console.log(
          "ℹ️  Real-time stream not available. Orders sync on page refresh.",
        );
      }
    });
  } catch (err) {
    changeStreamActive = false;

    if (err.codeName === "Location40573") {
      if (!replicaSetWarningShown) {
        replicaSetWarningShown = true;
        console.warn(
          "⚠️  Change streams not supported (not a replica set). Real-time updates disabled.",
        );
        console.log(
          "💡 For real-time updates, use MongoDB Atlas or set up a local replica set.",
        );
        console.log("📖 See MONGODB_SETUP.md for replica set configuration.");
      }
    } else {
      console.error("Change stream error", err);
      setTimeout(startChangeStream, 5000);
    }
  }
};

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    family: 4, // Force IPv4 to avoid DNS issues
  })
  .then(() => {
    console.log("MongoDB connected");
    startChangeStream();
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
