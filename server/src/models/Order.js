import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    amount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["নতুন অর্ডার", "প্রস্তুতিতে", "ডেলিভারিতে", "ডেলিভারি সম্পন্ন"],
      default: "নতুন অর্ডার",
    },
    date: {
      type: String,
      default: () => new Date().toLocaleDateString("bn-BD"),
    },
  },
  { timestamps: true },
);

OrderSchema.methods.serialize = function serialize() {
  const obj = this.toObject({ versionKey: false });
  obj.id = obj._id.toString();
  delete obj._id;
  return obj;
};

export default mongoose.model("Order", OrderSchema);
