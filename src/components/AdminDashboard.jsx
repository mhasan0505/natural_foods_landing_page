import { useState } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

const AdminDashboard = ({
  orders,
  onAddOrder,
  onUpdateOrder,
  onDeleteOrder,
  onLogout,
  isLoading,
}) => {
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

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "নতুন অর্ডার").length,
    processing: orders.filter((o) => o.status === "প্রস্তুতিতে").length,
    shipping: orders.filter((o) => o.status === "ডেলিভারিতে").length,
    completed: orders.filter((o) => o.status === "ডেলিভারি সম্পন্ন").length,
  };

  const statCards = [
    { label: "মোট অর্ডার", value: stats.total, accent: "#111827", icon: "📦" },
    { label: "নতুন", value: stats.pending, accent: "#2563eb", icon: "🆕" },
    {
      label: "প্রসেসিং",
      value: stats.processing,
      accent: "#f59e0b",
      icon: "⚙️",
    },
    { label: "সম্পন্ন", value: stats.completed, accent: "#059669", icon: "✅" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold">
              NF
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Dashboard
              </p>
              <h1 className="text-xl font-semibold">অর্ডার কন্ট্রোল সেন্টার</h1>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-gray-500 hover:shadow-sm"
          >
            🚪 লগআউট
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {item.label}
                  </p>
                  <p
                    className="text-3xl font-semibold mt-1"
                    style={{ color: item.accent }}
                  >
                    {isLoading ? "..." : item.value}
                  </p>
                </div>
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${item.accent}15`,
                    color: item.accent,
                  }}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-2 shadow-sm inline-flex items-center gap-2">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
              activeTab === "orders"
                ? "bg-gray-900 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            📋 অর্ডার তালিকা
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
              activeTab === "add"
                ? "bg-gray-900 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            ➕ নতুন অর্ডার
          </button>
        </div>

        {activeTab === "orders" && (
          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row gap-4 md:items-end">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-600 mb-2">
                  খুঁজুন (নাম, আইডি, ইমেইল)
                </label>
                <input
                  type="text"
                  placeholder="টাইপ করে খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="w-full md:w-64">
                <label className="block text-xs font-semibold text-gray-600 mb-2">
                  স্ট্যাটাস ফিল্টার
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-gray-500 focus:outline-none"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-auto text-sm text-gray-500 md:text-right">
                <p>ম্যাচড অর্ডার</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {filteredOrders.length}
                </p>
              </div>
            </div>

            <OrderList
              orders={filteredOrders}
              onUpdateOrder={onUpdateOrder}
              onDeleteOrder={onDeleteOrder}
            />
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
