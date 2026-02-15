import express from "express";
import Order from "../models/Order.js";

const serializeOrder = (orderDoc) => {
  if (!orderDoc) return null;
  if (typeof orderDoc.serialize === "function") return orderDoc.serialize();
  const obj = orderDoc.toObject({ versionKey: false });
  obj.id = obj._id.toString();
  delete obj._id;
  return obj;
};

const createOrdersRouter = ({ broadcast, addClient, removeClient }) => {
  const router = express.Router();

  router.get("/", async (_req, res) => {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders.map(serializeOrder));
  });

  router.post("/", async (req, res) => {
    const {
      customer,
      email,
      phone,
      address,
      product,
      quantity,
      amount,
      status,
    } = req.body;

    if (
      !customer ||
      !email ||
      !phone ||
      !address ||
      !product ||
      !quantity ||
      !amount
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = await Order.create({
      customer,
      email,
      phone,
      address,
      product,
      quantity,
      amount,
      status: status || "নতুন অর্ডার",
    });

    const payload = { type: "order-created", data: serializeOrder(order) };
    broadcast(payload);
    return res.status(201).json(payload.data);
  });

  router.get("/stream", (req, res) => {
    res.set({
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });
    res.flushHeaders?.();

    const keepAlive = setInterval(() => {
      res.write(":keep-alive\n\n");
    }, 25000);

    addClient(res);
    res.write(`data: ${JSON.stringify({ type: "connected" })}\n\n`);

    req.on("close", () => {
      clearInterval(keepAlive);
      removeClient(res);
    });
  });

  router.patch("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const order = await Order.findByIdAndUpdate(
        id,
        { $set: updates },
        { new: true, runValidators: true },
      );

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      const payload = { type: "order-updated", data: serializeOrder(order) };
      broadcast(payload);
      return res.json(payload.data);
    } catch (error) {
      console.error("Error updating order:", error);
      return res.status(500).json({ message: "Failed to update order" });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByIdAndDelete(id);

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      broadcast({ type: "order-deleted", data: { id } });
      return res.json({ message: "Order deleted" });
    } catch (error) {
      console.error("Error deleting order:", error);
      return res.status(500).json({ message: "Failed to delete order" });
    }
  });

  return router;
};

export default createOrdersRouter;
export { serializeOrder };
