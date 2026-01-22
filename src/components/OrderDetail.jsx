import { useState } from "react";

const OrderDetail = ({ order, onBack }) => {
  const [status, setStatus] = useState(order.status);
  const [notes, setNotes] = useState("");

  const statuses = [
    "নতুন অর্ডার",
    "প্রস্তুতিতে",
    "ডেলিভারিতে",
    "ডেলিভারি সম্পন্ন",
  ];

  const getStatusProgress = () => {
    const index = statuses.indexOf(status);
    return ((index + 1) / statuses.length) * 100;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white p-6">
        <button
          onClick={onBack}
          className="mb-4 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
        >
          ← ফিরে যান
        </button>
        <h2 className="text-3xl font-bold mb-2">অর্ডার বিস্তারিত</h2>
        <p className="text-blue-100">অর্ডার আইডি: {order.id}</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Order Progress */}
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            অর্ডার অগ্রগতি
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
              <span>প্রগতি: {Math.round(getStatusProgress())}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="bg-linear-to-r from-blue-500 to-blue-600 h-full transition-all duration-500"
                style={{ width: `${getStatusProgress()}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-6">
              {statuses.map((s, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-sm transition ${
                      statuses.indexOf(status) >= index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p
                    className={`text-xs font-semibold ${
                      statuses.indexOf(status) >= index
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {s.split(" ")[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer Information */}
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              👤 গ্রাহকের তথ্য
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">নাম</p>
                <p className="font-bold text-gray-900">{order.customer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ইমেইল</p>
                <p className="font-semibold text-blue-600">{order.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ফোন</p>
                <p className="font-semibold text-gray-900">{order.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ঠিকানা</p>
                <p className="font-semibold text-gray-900">{order.address}</p>
              </div>
            </div>
          </div>

          {/* Order Information */}
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              📦 অর্ডার তথ্য
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">পণ্য</p>
                <p className="font-bold text-gray-900">{order.product}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">পরিমাণ</p>
                  <p className="font-bold text-gray-900">{order.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">মূল্য</p>
                  <p className="font-bold text-green-700 text-lg">
                    ৳{order.amount}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">তারিখ</p>
                <p className="font-semibold text-gray-900">{order.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Management */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ⚙️ স্ট্যাটাস পরিচালনা
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                অর্ডার স্ট্যাটাস আপডেট করুন
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 border-2 border-yellow-300 rounded-lg focus:border-yellow-500 outline-none bg-white font-semibold"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                অপারেটর নোট যোগ করুন
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="অর্ডার সম্পর্কে কোনো বিশেষ নোট যোগ করুন..."
                className="w-full px-4 py-2 border-2 border-yellow-300 rounded-lg focus:border-yellow-500 outline-none resize-none h-24"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert(`স্ট্যাটাস আপডেট হয়েছে: ${status}`);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition"
              >
                💾 পরিবর্তন সংরক্ষণ করুন
              </button>
              <button
                onClick={() => setNotes("")}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-bold transition"
              >
                🔄 রিসেট করুন
              </button>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            📅 কার্যকলাপ সময়রেখা
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-1 h-12 bg-blue-300"></div>
              </div>
              <div>
                <p className="font-bold text-gray-900">অর্ডার তৈরি</p>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <p className="font-bold text-gray-700">বর্তমান স্থিতি</p>
                <p className="text-sm text-gray-600">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
