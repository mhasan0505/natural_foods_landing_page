import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    unit: { type: String, trim: true },
    sku: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    tags: { type: [String], default: [] },
    stock: { type: Number, min: 0, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

ProductSchema.methods.serialize = function serialize() {
  const obj = this.toObject({ versionKey: false });
  obj.id = obj._id.toString();
  delete obj._id;
  return obj;
};

export default mongoose.model("Product", ProductSchema);
