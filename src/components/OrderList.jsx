import { useState } from "react";
import OrderDetail from "./OrderDetail";

const OrderList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "নতুন অর্ডার":
        return "bg-red-100 text-red-800 border-red-300";
      case "প্রস্তুতিতে":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "ডেলিভারিতে":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "ডেলিভারি সম্পন্ন":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusEmoji = (status) => {
    switch (status) {
      case "নতুন অর্ডার":
        return "🆕";
      case "প্রস্তুতিতে":
        return "⚙️";
      case "ডেলিভারিতে":
        return "🚚";
      case "ডেলিভারি সম্পন্ন":
        return "✅";
      default:
        return "📦";
    }
  };

  if (selectedOrder) {
    return (
      <OrderDetail
        order={selectedOrder}
        onBack={() => setSelectedOrder(null)}
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-linear-to-r from-blue-500 to-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">অর্ডার আইডি</th>
              <th className="px-4 py-3 text-left font-semibold">গ্রাহক</th>
              <th className="px-4 py-3 text-left font-semibold">পণ্য</th>
              <th className="px-4 py-3 text-center font-semibold">পরিমাণ</th>
              <th className="px-4 py-3 text-right font-semibold">টাকা</th>
              <th className="px-4 py-3 text-left font-semibold">তারিখ</th>
              <th className="px-4 py-3 text-center font-semibold">স্ট্যাটাস</th>
              <th className="px-4 py-3 text-center font-semibold">বিস্তারিত</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-4 py-8 text-center text-gray-500">
                  <p className="text-xl mb-2">📭</p>
                  <p>কোনো অর্ডার পাওয়া যায়নি</p>
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-bold text-blue-600">
                    {order.id}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-gray-900">
                      {order.customer}
                    </div>
                    <div className="text-xs text-gray-500">{order.email}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{order.product}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {order.quantity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">
                    ৳{order.amount}
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-sm">
                    {order.date}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}
                    >
                      {getStatusEmoji(order.status)} {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition"
                    >
                      দেখুন
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
