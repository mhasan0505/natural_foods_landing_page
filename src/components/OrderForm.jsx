import { useState } from "react";

const OrderForm = ({ onAddOrder, onTabChange }) => {
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    phone: "",
    address: "",
    product: "চিয়া সিড ১ কেজি",
    quantity: 1,
    amount: 599,
  });

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
      amount: selectedProduct.price,
    }));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value) || 1;
    setFormData((prev) => ({
      ...prev,
      quantity: quantity,
      amount: parseInt(prev.amount) * quantity,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.customer ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("দয়া করে সমস্ত ক্ষেত্র পূরণ করুন!");
      return;
    }

    const newOrder = {
      id: `ORD-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
      date: new Date().toLocaleDateString("bn-BD"),
      customer: formData.customer,
      email: formData.email,
      phone: formData.phone,
      product: formData.product,
      quantity: formData.quantity,
      amount: formData.amount,
      status: "নতুন অর্ডার",
      address: formData.address,
    };

    onAddOrder(newOrder);

    // Reset form
    setFormData({
      customer: "",
      email: "",
      phone: "",
      address: "",
      product: "চিয়া সিড ১ কেজি",
      quantity: 1,
      amount: 599,
    });

    alert("✅ নতুন অর্ডার সফলভাবে যোগ করা হয়েছে!");
    onTabChange("orders");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-green-600 to-green-800 text-white p-6">
        <h2 className="text-3xl font-bold">নতুন অর্ডার যোগ করুন</h2>
        <p className="text-green-100 mt-1">
          সিস্টেমে একটি নতুন গ্রাহক অর্ডার নিবন্ধন করুন
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Customer Information */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-300">
            👤 গ্রাহকের তথ্য
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                গ্রাহক নাম *
              </label>
              <input
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
                placeholder="পূর্ণ নাম প্রবেশ করুন"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ইমেইল *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ইমেইল ঠিকানা"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ফোন নম্বর *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="০১XXX XXXXXX"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ঠিকানা *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="সম্পূর্ণ ঠিকানা"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-300">
            📦 অর্ডার বিবরণ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                পণ্য নির্বাচন করুন *
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleProductChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 outline-none bg-white"
              >
                {products.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name} - ৳{product.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                পরিমাণ *
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleQuantityChange}
                min="1"
                max="100"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                মোট মূল্য
              </label>
              <div className="w-full px-4 py-2 border-2 border-green-300 rounded-lg bg-green-50 font-bold text-green-700 text-lg">
                ৳{formData.amount}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-linear-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📊 অর্ডার সংক্ষিপ্তসার
          </h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>গ্রাহক:</span>
              <span className="font-bold">{formData.customer || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span>পণ্য:</span>
              <span className="font-bold">{formData.product}</span>
            </div>
            <div className="flex justify-between">
              <span>পরিমাণ:</span>
              <span className="font-bold">{formData.quantity}</span>
            </div>
            <div className="border-t-2 border-green-300 pt-2 flex justify-between text-lg">
              <span className="font-bold">মোট:</span>
              <span className="font-bold text-green-700">
                ৳{formData.amount}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-linear-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
          >
            ✅ অর্ডার যোগ করুন
          </button>
          <button
            type="reset"
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            🔄 রিসেট করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
