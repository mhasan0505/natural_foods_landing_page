const Pricing = ({ onAddToCart }) => {
  const packages = [
    {
      size: "২৫০ গ্রাম",
      originalPrice: 300,
      price: 210,
      popular: false,
      savings: "৩০% ছাড়",
    },
    {
      size: "১ কেজি",
      originalPrice: 850,
      price: 599,
      popular: true,
      savings: "২৯% ছাড়",
    },
    {
      size: "৩ কেজি",
      originalPrice: 2400,
      price: 1699,
      popular: false,
      savings: "২৯% ছাড়",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            আমাদের প্যাকেজ
          </h2>
          <p className="text-xl text-gray-600">
            আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                pkg.popular
                  ? "bg-linear-to-br from-green-600 to-green-700 text-white shadow-2xl md:scale-110"
                  : "bg-white text-gray-900 border-2 border-green-200 shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 font-bold">
                  সবচেয়ে জনপ্রিয়! 🌟
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? "pt-16" : ""}`}>
                <h3 className={`text-2xl font-bold mb-2`}>{pkg.size}</h3>
                <p
                  className={`text-sm mb-6 ${pkg.popular ? "text-green-100" : "text-gray-600"}`}
                >
                  চিয়া সিড
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">৳{pkg.price}</span>
                    <span
                      className={`line-through ${pkg.popular ? "text-green-200" : "text-gray-400"}`}
                    >
                      ৳{pkg.originalPrice}
                    </span>
                  </div>
                  <p
                    className={`text-sm font-semibold ${pkg.popular ? "text-yellow-200" : "text-red-600"}`}
                  >
                    {pkg.savings}
                  </p>
                </div>

                <div
                  className={`space-y-3 mb-8 pb-8 border-b ${pkg.popular ? "border-green-500" : "border-gray-200"}`}
                >
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
                  onClick={onAddToCart}
                  className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                    pkg.popular
                      ? "bg-white text-green-700 hover:bg-gray-100"
                      : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg"
                  }`}
                >
                  কার্টে যোগ করুন
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-2 border-blue-300 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-blue-600">💡 বিশেষ অফার:</span> ৩টি
            প্যাকেজ কিনলে অতিরিক্ত ২০% ছাড় পাবেন!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
