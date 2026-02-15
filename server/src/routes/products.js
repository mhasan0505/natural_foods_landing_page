import express from "express";
import Product from "../models/Product.js";

const serializeProduct = (productDoc) => {
  if (!productDoc) return null;
  if (typeof productDoc.serialize === "function") return productDoc.serialize();
  const obj = productDoc.toObject({ versionKey: false });
  obj.id = obj._id.toString();
  delete obj._id;
  return obj;
};

const createProductsRouter = () => {
  const router = express.Router();

  router.get("/", async (_req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products.map(serializeProduct));
  });

  router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json(serializeProduct(product));
  });

  router.post("/", async (req, res) => {
    const {
      name,
      price,
      description,
      unit,
      sku,
      imageUrl,
      tags,
      stock,
      isActive,
    } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await Product.create({
      name,
      price,
      description,
      unit,
      sku,
      imageUrl,
      tags: Array.isArray(tags) ? tags : [],
      stock,
      isActive,
    });

    return res.status(201).json(serializeProduct(product));
  });

  router.put("/:id", async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(serializeProduct(updated));
  });

  router.delete("/:id", async (req, res) => {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json({ id: deleted._id.toString() });
  });

  return router;
};

export default createProductsRouter;
export { serializeProduct };
