import { useState } from "react";

const Hero = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart();
    }
    alert(`${quantity}টি চিয়া সিড আপনার কার্টে যোগ হয়েছে! 🎉`);
    setQuantity(1);
  };

  return (
    <section className="bg-linear-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-linear-to-br from-green-200 to-green-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌱</div>
                  <p className="text-2xl font-bold text-green-800">
                    “প্রাকৃতিকভাবে ওজন কমাতে ও সুস্থ থাকতে প্রতিদিন চিয়া সিড
                    খান”
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                ৩০% ছাড়!
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                চিয়া সিড
              </h2>
              <p className="text-xl text-green-600 font-semibold">
                প্রাকৃতিক এবং জৈব
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              আমাদের প্রিমিয়াম চিয়া সিড সম্পূর্ণভাবে প্রাকৃতিক এবং রাসায়নিক
              মুক্ত। এটি আপনার স্বাস্থ্য এবং সুস্থতার জন্য নিখুঁত পছন্দ। উচ্চ
              প্রোটিন, ওমেগা-৩ ফ্যাটি এসিড এবং ফাইবার সমৃদ্ধ।
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-gray-700 font-semibold">
                (৫.০ / ৫ - ২,৩৪৫ রিভিউ)
              </span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
              <p className="text-gray-600 text-sm mb-2">মূল্য</p>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-green-700">
                  ৫৯৯ টাকা
                </span>
                <span className="text-2xl text-gray-400 line-through">
                  ৮৫০ টাকা
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-2">
                প্রতি কেজি (১ কেজি প্যাক)
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-semibold">পরিমাণ:</span>
              <div className="flex items-center border-2 border-green-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-green-700 font-bold hover:bg-green-50"
                >
                  −
                </button>
                <span className="px-6 py-2 font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-green-700 font-bold hover:bg-green-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🛒 কার্টে যোগ করুন
            </button>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-gray-200">
              <div className="text-center">
                <p className="text-2xl mb-1">✓</p>
                <p className="text-sm text-gray-700">ফ্রি ডেলিভারি</p>
              </div>
              <div className="text-center">
                <p className="text-2xl mb-1">✓</p>
                <p className="text-sm text-gray-700">সহজ রিটার্ন</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
