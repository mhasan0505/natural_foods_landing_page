import { useState } from "react";

const AdminLogin = ({ onLogin, onBack }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!password) {
      setError("পাসওয়ার্ড প্রবেশ করুন");
      return;
    }

    const isValid = onLogin(password);
    if (!isValid) {
      setError("❌ ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
            <p className="text-5xl mb-3">🔐</p>
            <h1 className="text-3xl font-bold mb-1">অ্যাডমিন লগইন</h1>
            <p className="text-blue-100">চিয়া সিডস ম্যানেজমেন্ট সিস্টেম</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Password Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="আপনার পাসওয়ার্ড প্রবেশ করুন"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-400"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-xl"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg">
                <p className="font-semibold text-sm">{error}</p>
              </div>
            )}

            {/* Info Box */}
            <div className="bg-blue-50 border-2 border-blue-200 px-4 py-3 rounded-lg">
              <p className="text-xs font-semibold text-blue-800">
                💡 ডেমো পাসওয়ার্ড:{" "}
                <span className="text-blue-600">admin123</span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-105 duration-200"
            >
              🔓 লগইন করুন
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-bold transition"
            >
              ← ফিরে যান
            </button>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-200">
            <p className="text-xs text-gray-600">
              শুধুমাত্র অ্যাডমিন ব্যবহারকারীদের জন্য সংরক্ষিত
            </p>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6 text-center text-white">
          <p className="text-sm opacity-80">
            🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ এবং এনক্রিপ্টেড
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
