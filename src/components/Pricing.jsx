import {
  CheckCircleIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Pricing = () => {
  const packages = [
    {
      size: "৫০০ গ্রাম",
      originalPrice: 450,
      price: 350,
      savings: "২২% ছাড়",
    },
    {
      size: "১ কেজি",
      originalPrice: 850,
      price: 650,
      savings: "২৩% ছাড়",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    location: "inside", // "inside" for Dhaka, "outside" for outside Dhaka
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (pkg) => {
    const existingItem = cart.find((item) => item.size === pkg.size);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.size === pkg.size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...pkg, quantity: 1 }]);
    }
  };

  const removeFromCart = (size) => {
    setCart(cart.filter((item) => item.size !== size));
  };

  const updateQuantity = (size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(size);
    } else {
      setCart(
        cart.map((item) => (item.size === size ? { ...item, quantity } : item)),
      );
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  // Dynamic delivery fee based on location
  const deliveryFee =
    subtotal > 0 ? (customerInfo.location === "inside" ? 80 : 150) : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (
      customerInfo.name &&
      customerInfo.phone &&
      customerInfo.address &&
      cart.length > 0
    ) {
      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        setCart([]);
        setCustomerInfo({
          name: "",
          phone: "",
          address: "",
          location: "inside",
        });
        setShowCheckout(false);
      }, 3000);
    }
  };

  return (
    <section
      id="pricing"
      className="py-16 bg-linear-to-b from-white to-green-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            আমাদের প্যাকেজ
          </h2>
          <p className="text-xl text-gray-600">
            আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 border-2 border-green-200 shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.size}</h3>
                <p className="text-sm mb-6 text-gray-600">চিয়া সিড</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-green-600">
                      ৳{pkg.price}
                    </span>
                    <span className="line-through text-gray-400">
                      ৳{pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-red-600">
                    {pkg.savings}
                  </p>
                </div>

                <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                  <p className="flex items-center gap-2">
                    <span className="text-lg">✓</span> প্রিমিয়াম কোয়ালিটি
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">✓</span> ১০০% জৈব পণ্য
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg">✓</span> দ্রুত ডেলিভারি
                  </p>
                </div>

                <button
                  onClick={() => addToCart(pkg)}
                  className="w-full py-3 bg-linear-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  কার্টে যোগ করুন
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main Layout with Cart and Checkout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shopping Cart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <ShoppingCartIcon className="w-8 h-8 text-green-600" />
                আপনার কার্ট ({cart.length})
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCartIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    আপনার কার্ট খালি। উপরে থেকে পণ্য নির্বাচন করুন।
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.size}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">
                          {item.size}
                        </h3>
                        <p className="text-gray-600">
                          ৳{item.price} x {item.quantity} = ৳
                          {item.price * item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 mr-4">
                        <button
                          onClick={() =>
                            updateQuantity(item.size, item.quantity - 1)
                          }
                          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.size, item.quantity + 1)
                          }
                          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.size)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary and Checkout */}
          <div className="lg:col-span-1">
            {/* Order Summary */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-8 border-2 border-green-200 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                অর্ডার সারাংশ
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>সাব-মোট:</span>
                  <span className="font-bold">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>ডেলিভারি ফি:</span>
                  <span className="font-bold">
                    ৳{subtotal > 0 ? deliveryFee : 0}
                  </span>
                </div>
                <div className="text-xs text-gray-500 -mt-2">
                  {subtotal > 0 && (
                    <>
                      {customerInfo.location === "inside"
                        ? "ঢাকার ভিতরে"
                        : "ঢাকার বাইরে"}
                    </>
                  )}
                </div>
                <div className="border-t-2 border-green-200 pt-4 flex justify-between text-lg font-bold text-green-700">
                  <span>মোট:</span>
                  <span>৳{total}</span>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(!showCheckout)}
                disabled={cart.length === 0}
                className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                  cart.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-linear-to-r from-green-600 to-green-700 text-white hover:shadow-lg"
                }`}
              >
                চেকআউট করুন
              </button>
            </div>

            {/* Checkout Form */}
            {showCheckout && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-300">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  ডেলিভারি তথ্য
                </h2>

                {orderPlaced ? (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      অর্ডার সফল!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      আপনার অর্ডার নিশ্চিত করা হয়েছে। শীঘ্রই আমরা যোগাযোগ করব।
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        নাম *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerInfo.name}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="আপনার নাম"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        ফোন নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerInfo.phone}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="०१XXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        ডেলিভারি এলাকা *
                      </label>
                      <select
                        required
                        value={customerInfo.location}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            location: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                      >
                        <option value="inside">
                          ঢাকার ভিতরে (ডেলিভারি চার্জ: ৳80)
                        </option>
                        <option value="outside">
                          ঢাকার বাইরে (ডেলিভারি চার্জ: ৳150)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        ডেলিভারি ঠিকানা *
                      </label>
                      <textarea
                        required
                        value={customerInfo.address}
                        onChange={(e) =>
                          setCustomerInfo({
                            ...customerInfo,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        placeholder="সম্পূর্ণ ডেলিভারি ঠিকানা"
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mt-4">
                      <p className="text-sm text-blue-700">
                        <span className="font-bold">📍 পেমেন্ট পদ্ধতি:</span>{" "}
                        ক্যাশ অন ডেলিভারি (COD)
                      </p>
                      <p className="text-sm text-blue-700 mt-2">
                        <span className="font-bold">🚚 ডেলিভারি চার্জ:</span>{" "}
                        {customerInfo.location === "inside" ? "৳80" : "৳150"}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-lg hover:shadow-lg transition-all duration-200 mt-6"
                    >
                      অর্ডার নিশ্চিত করুন
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Special Offer Banner */}
        {/* <div className="mt-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg p-6 text-center shadow-lg">
          <p className="text-lg font-bold text-white">
            💡 বিশেষ অফার: २टी प्यकेज किनले अतिरिक्त १०% छाड़ पाबेन!
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
