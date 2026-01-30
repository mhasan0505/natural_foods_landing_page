import { useState } from "react";

const INITIAL_FORM = {
  customer: "",
  email: "",
  phone: "",
  address: "",
  product: "চিয়া সিড ১ কেজি",
  quantity: 1,
  amount: 599,
};

const OrderForm = ({ onAddOrder, onTabChange }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const products = [
    { name: "চিয়া সিড ২৫০ গ্রাম", price: 210 },
    { name: "চিয়া সিড ১ কেজি", price: 599 },
    { name: "চিয়া সিড ৩ কেজি", price: 1699 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductChange = (e) => {
    const selectedProduct = products.find((p) => p.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      product: e.target.value,
      amount: selectedProduct ? selectedProduct.price : prev.amount,
    }));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10) || 1;
    setFormData((prev) => ({
      ...prev,
      quantity,
      amount:
        (products.find((p) => p.name === prev.product)?.price || prev.amount) *
        quantity,
    }));
  };

  const sendOrderEmail = async (order) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_KEY is not set. Skipping email.");
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `নতুন অর্ডার নোটিফিকেশন: ${order.id}`,
      from_name: "Natural Foods Checkout",
      from_email: order.email,
      replyto: order.email,
      message: [
        `অর্ডার আইডি: ${order.id}`,
        `তারিখ: ${order.date}`,
        `গ্রাহক: ${order.customer}`,
        `ইমেইল: ${order.email}`,
        `ফোন: ${order.phone}`,
        `ঠিকানা: ${order.address}`,
        `পণ্য: ${order.product}`,
        `পরিমাণ: ${order.quantity}`,
        `মোট মূল্য: ৳${order.amount}`,
        `স্ট্যাটাস: ${order.status}`,
      ].join("\n"),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.message || "Email send failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (
      !formData.customer ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("দয়া করে সমস্ত ক্ষেত্র পূরণ করুন!");
      return;
    }

    const unitPrice =
      products.find((p) => p.name === formData.product)?.price ||
      formData.amount;
    const newOrder = {
      id: `ORD-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
      date: new Date().toLocaleDateString("bn-BD"),
      customer: formData.customer,
      email: formData.email,
      phone: formData.phone,
      product: formData.product,
      quantity: formData.quantity,
      amount: unitPrice * formData.quantity,
      status: "নতুন অর্ডার",
      address: formData.address,
    };

    setIsSubmitting(true);
    try {
      onAddOrder(newOrder);
      await sendOrderEmail(newOrder);
      alert("✅ নতুন অর্ডার সফলভাবে যোগ করা হয়েছে এবং ইমেইল পাঠানো হয়েছে!");
      onTabChange("orders");
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("Email send failed", error);
      alert(
        "অর্ডার সংরক্ষিত হয়েছে, কিন্তু ইমেইল পাঠাতে ব্যর্থ হয়েছে। পরবর্তী সময়ে পুনরায় চেষ্টা করুন।",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            New Order
          </p>
          <h2 className="text-xl font-semibold">নতুন অর্ডার যোগ করুন</h2>
        </div>
        <span className="text-xs text-gray-500">Checkout form</span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              গ্রাহক নাম *
            </label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleInputChange}
              placeholder="পূর্ণ নাম"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              ইমেইল *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ইমেইল ঠিকানা"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              ফোন নম্বর *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="০১XXX XXXXXX"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              ঠিকানা *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="সম্পূর্ণ ঠিকানা"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              পণ্য নির্বাচন করুন *
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleProductChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
            >
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name} - ৳{product.price}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              পরিমাণ *
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleQuantityChange}
              min="1"
              max="100"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600">
              মোট মূল্য
            </label>
            <div className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900">
              ৳{formData.amount}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <div>
            <p className="text-xs text-gray-500">গ্রাহক</p>
            <p className="font-semibold text-gray-900">
              {formData.customer || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">পণ্য</p>
            <p className="font-semibold text-gray-900">{formData.product}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">পরিমাণ</p>
            <p className="font-semibold text-gray-900">{formData.quantity}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">মোট</p>
            <p className="text-lg font-semibold text-gray-900">
              ৳{formData.amount}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-lg bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "পাঠানো হচ্ছে..." : "✅ অর্ডার যোগ করুন"}
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="flex-1 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:border-gray-500 transition"
          >
            🔄 রিসেট করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
