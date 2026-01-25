import { useEffect, useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("home"); // "home", "admin-login", or "admin"
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Default orders for initial load
  const defaultOrders = [
    {
      id: "ORD-001",
      date: "২০২৬-০১-২০",
      customer: "ফাতেমা আক্তার",
      email: "fatema@example.com",
      phone: "01712345678",
      product: "চিয়া সিড ১ কেজি",
      quantity: 2,
      amount: 1198,
      status: "ডেলিভারি সম্পন্ন",
      address: "ঢাকা, বাংলাদেশ",
    },
    {
      id: "ORD-002",
      date: "২০২৬-০১-২১",
      customer: "করিম খান",
      email: "karim@example.com",
      phone: "01812345678",
      product: "চিয়া সিড ২৫০ গ্রাম",
      quantity: 1,
      amount: 210,
      status: "ডেলিভারিতে",
      address: "চট্টগ্রাম, বাংলাদেশ",
    },
    {
      id: "ORD-003",
      date: "২০২৬-০১-২২",
      customer: "সুমাইয়া বেগম",
      email: "sumaiya@example.com",
      phone: "01912345678",
      product: "চিয়া সিড ৩ কেজি",
      quantity: 1,
      amount: 1699,
      status: "প্রস্তুতিতে",
      address: "সিলেট, বাংলাদেশ",
    },
    {
      id: "ORD-004",
      date: "२০२६-०१-२३",
      customer: "রহিম সাহেব",
      email: "rahim@example.com",
      phone: "01412345678",
      product: "চিয়া সিড ১ কেজি",
      quantity: 1,
      amount: 599,
      status: "নতুন অর্ডার",
      address: "খুলনা, বাংলাদেশ",
    },
  ];

  // Load orders from localStorage or use default
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : defaultOrders;
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  // Check if user is already authenticated
  useEffect(() => {
    const savedAuth = localStorage.getItem("adminAuth");
    if (savedAuth === "true") {
      // Avoid cascading renders by using a callback
      Promise.resolve().then(() => {
        setIsAuthenticated(true);
      });
    }
  }, []);

  const handleAdminLogin = (password) => {
    const ADMIN_PASSWORD = "admin123"; // Change this to your desired password
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      setCurrentPage("admin");
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    setCurrentPage("home");
  };

  // Admin Login Page
  if (currentPage === "admin-login") {
    return (
      <AdminLogin
        onLogin={handleAdminLogin}
        onBack={() => setCurrentPage("home")}
      />
    );
  }

  // Admin Dashboard Page
  if (currentPage === "admin" && isAuthenticated) {
    return (
      <AdminDashboard
        orders={orders}
        onAddOrder={handleAddOrder}
        onLogout={handleAdminLogout}
      />
    );
  }

  // Home Page
  return (
    <div className="bg-white min-h-screen">
      <header className="p-4 top-0 z-50 shadow-lg">
        <div>
          <img
            src="/logo.png"
            alt="Natural Foods Logo"
            className="mx-auto w-32 h-auto"
          />
        </div>
        {/* <div className="container mx-auto flex justify-between items-center bg-red-500">
          <div className="flex items-center gap-4">
            <button className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition">
              🛒 ({cartCount})
            </button>
          </div>
        </div> */}
      </header>

      <main>
        <Hero onAddToCart={handleAddToCart} />
        <Features />
        <Reviews />
        <Pricing onAddToCart={handleAddToCart} />
        {/* <CTA onAddToCart={handleAddToCart} /> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
