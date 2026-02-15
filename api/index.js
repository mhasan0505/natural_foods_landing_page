/* eslint-env node */
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// Import routes
import createOrdersRouter from "../server/src/routes/orders.js";
import createProductsRouter from "../server/src/routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/nautral_foods";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
};

// SSE clients management
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

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use(
  "/api/orders",
  createOrdersRouter({ broadcast, addClient, removeClient }),
);
app.use("/api/products", createProductsRouter());

// Serverless function handler
export default async (req, res) => {
  await connectDB();
  return app(req, res);
};
