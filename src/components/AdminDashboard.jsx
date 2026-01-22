import { useState } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

const AdminDashboard = ({ orders, onAddOrder, onLogout }) => {
  const [activeTab, setActiveTab] = useState("orders");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("সব");

  const statuses = [
    "সব",
    "নতুন অর্ডার",
    "প্রস্তুতিতে",
    "ডেলিভারিতে",
    "ডেলিভারি সম্পন্ন",
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "সব" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatistics = () => {
    return {
      total: orders.length,
      pending: orders.filter((o) => o.status === "নতুন অর্ডার").length,
      processing: orders.filter((o) => o.status === "প্রস্তুতিতে").length,
      shipping: orders.filter((o) => o.status === "ডেলিভারিতে").length,
      completed: orders.filter((o) => o.status === "ডেলিভারি সম্পন্ন").length,
      totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0),
    };
  };

  const stats = getStatistics();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">অ্যাডমিন ড্যাশবোর্ড</h1>
            <p className="text-blue-100 text-sm">অর্ডার ম্যানেজমেন্ট সিস্টেম</p>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            🚪 লগআউট
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm font-semibold">মোট অর্ডার</p>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm font-semibold">নতুন</p>
            <p className="text-3xl font-bold text-red-600">{stats.pending}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm font-semibold">প্রস্তুতি</p>
            <p className="text-3xl font-bold text-yellow-600">
              {stats.processing}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm font-semibold">ডেলিভারিতে</p>
            <p className="text-3xl font-bold text-orange-600">
              {stats.shipping}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm font-semibold">সম্পন্ন</p>
            <p className="text-3xl font-bold text-green-600">
              {stats.completed}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 text-sm font-semibold">মোট রাজস্ব</p>
            <p className="text-2xl font-bold text-green-700">
              ৳{stats.totalRevenue}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "orders"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            📋 অর্ডার তালিকা
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "add"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            ➕ নতুন অর্ডার
          </button>
        </div>

        {/* Content */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    খুঁজুন (নাম, আইডি, ইমেইল)
                  </label>
                  <input
                    type="text"
                    placeholder="অনুসন্ধান করুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    স্ট্যাটাস দ্বারা ফিল্টার করুন
                  </label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none bg-white"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                মোট পরিণত অর্ডার:{" "}
                <span className="font-bold text-blue-600">
                  {filteredOrders.length}
                </span>
              </p>
            </div>

            {/* Orders List */}
            <OrderList orders={filteredOrders} />
          </div>
        )}

        {activeTab === "add" && (
          <OrderForm onAddOrder={onAddOrder} onTabChange={setActiveTab} />
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
