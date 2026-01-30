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
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Order
          </p>
          <h2 className="text-xl font-semibold">অর্ডার আইডি: {order.id}</h2>
        </div>
        <button
          onClick={onBack}
          className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-gray-500 hover:shadow-sm"
        >
          ← ফিরে যান
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between text-sm text-gray-700 mb-3">
            <span>প্রগতি</span>
            <span className="font-semibold">
              {Math.round(getStatusProgress())}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-gray-900 transition-all duration-500"
              style={{ width: `${getStatusProgress()}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-3">
            {statuses.map((s, idx) => (
              <span
                key={s}
                className={
                  statuses.indexOf(status) >= idx
                    ? "text-gray-900 font-semibold"
                    : ""
                }
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                গ্রাহক
              </p>
              <span className="text-xs text-gray-500">{order.date}</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">নাম</p>
              <p className="font-semibold text-gray-900">{order.customer}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ইমেইল</p>
              <p className="font-semibold text-gray-900">{order.email}</p>
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

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              অর্ডার
            </p>
            <div>
              <p className="text-sm text-gray-600">পণ্য</p>
              <p className="font-semibold text-gray-900">{order.product}</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">পরিমাণ</p>
                <p className="font-semibold text-gray-900">{order.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">মোট</p>
                <p className="text-lg font-semibold text-gray-900">
                  ৳{order.amount}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">বর্তমান স্ট্যাটাস</p>
              <p className="font-semibold text-gray-900">{status}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                স্ট্যাটাস আপডেট
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                অপারেটর নোট
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="নোট লিখুন..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none resize-none h-24"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={() => {
                alert(`স্ট্যাটাস আপডেট হয়েছে: ${status}`);
              }}
              className="flex-1 rounded-lg bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition"
            >
              💾 পরিবর্তন সংরক্ষণ করুন
            </button>
            <button
              onClick={() => setNotes("")}
              className="flex-1 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:border-gray-500 transition"
            >
              🔄 রিসেট করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
