import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="p-4 top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Natural Foods Logo"
            className="w-32 h-auto"
          />
          {/* <button
            onClick={() => navigate("/admin-login")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            🔑 অ্যাডমিন
          </button> */}
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("adminAuth") === "true",
  );
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  // Fetch orders from backend on mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_URL}/orders`);
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [API_URL]);

  // Real-time updates via EventSource
  useEffect(() => {
    const eventSource = new EventSource(`${API_URL}/orders/stream`);

    eventSource.onmessage = (event) => {
      const payload = JSON.parse(event.data);

      if (payload.type === "order-created") {
        setOrders((prev) => [payload.data, ...prev]);
      } else if (payload.type === "order-updated") {
        setOrders((prev) =>
          prev.map((o) => (o.id === payload.data.id ? payload.data : o)),
        );
      } else if (payload.type === "order-deleted") {
        setOrders((prev) => prev.filter((o) => o.id !== payload.data.id));
      }
    };

    eventSource.onerror = () => {
      console.warn("SSE connection error. Retrying...");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [API_URL]);

  const handleAddOrder = async (newOrder) => {
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      // SSE will handle adding to state
    } catch (error) {
      console.error("Failed to add order:", error);
      throw error;
    }
  };

  const handleAdminLogin = (password) => {
    const ADMIN_PASSWORD = "admin123";
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin-login"
        element={
          <AdminLogin onLogin={handleAdminLogin} onBack={() => navigate("/")} />
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminDashboard
              orders={orders}
              onAddOrder={handleAddOrder}
              onLogout={handleAdminLogout}
              isLoading={isLoading}
            />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
