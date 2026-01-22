const CTA = ({ onAddToCart }) => {
  return (
    <section className="py-16 bg-linear-to-r from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            আজই আপনার স্বাস্থ্যের যাত্রা শুরু করুন
          </h2>

          <p className="text-xl mb-8 text-green-100">
            প্রিমিয়াম চিয়া সিড দিয়ে একটি স্বাস্থ্যকর জীবনযাপন শুরু করুন।
            সীমিত সময়ের জন্য বিশেষ ছাড় পাচ্ছেন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <p className="text-3xl font-bold mb-2">🚚</p>
              <p className="text-lg font-semibold">দ্রুত ডেলিভারি</p>
              <p className="text-sm text-green-100">২৪ ঘণ্টার মধ্যে</p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <p className="text-3xl font-bold mb-2">🔒</p>
              <p className="text-lg font-semibold">নিরাপদ পেমেন্ট</p>
              <p className="text-sm text-green-100">সম্পূর্ণ সুরক্ষিত লেনদেন</p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <p className="text-3xl font-bold mb-2">↩️</p>
              <p className="text-lg font-semibold">সহজ রিটার্ন</p>
              <p className="text-sm text-green-100">৩০ দিনের গ্যারান্টি</p>
            </div>
          </div>

          <button
            onClick={onAddToCart}
            className="bg-white text-green-700 px-10 py-4 rounded-lg font-bold text-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:scale-105 inline-block"
          >
            🛒 এখনই কিনুন - বিশেষ ছাড় পান
          </button>

          <p className="mt-6 text-sm text-green-100">
            💳 সব ধরনের পেমেন্ট পদ্ধতি গ্রহণযোগ্য
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
