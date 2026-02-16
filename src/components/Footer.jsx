const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Natural Foods Logo"
                className="w-24 h-auto"
              />
              <h3 className="text-2xl font-bold text-green-500">
                Natural Foods BD
              </h3>
            </div>
            <p className="text-gray-700">
              আমরা ১০০% প্রাকৃতিক এবং জৈব পণ্য সরবরাহ করি। আপনার স্বাস্থ্য
              আমাদের প্রথম অগ্রাধিকার।
            </p>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-lg font-bold mb-4">পেমেন্ট অপশন</h4>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm mb-3">আমরা গ্রহণ করি:</p>
              <div className="grid grid-cols-3 gap-3">
                {/* bKash */}
                <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center hover:shadow-md transition">
                  <img
                    src="/bkash.png"
                    alt="bKash"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* Nagad */}
                <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center hover:shadow-md transition">
                  <img
                    src="/nagad.png"
                    alt="Nagad"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* Visa */}
                <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center hover:shadow-md transition">
                  <img
                    src="/visa.png"
                    alt="Visa"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* Mastercard */}
                <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center hover:shadow-md transition">
                  <img
                    src="/mastercard.png"
                    alt="Mastercard"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                {/* American Express */}
                <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center hover:shadow-md transition">
                  <img
                    src="/americanexpress.png"
                    alt="American Express"
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Partners */}
          <div>
            <h4 className="text-lg font-bold mb-4">ডেলিভারি পার্টনার</h4>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm mb-3">আমরা কাজ করি:</p>
              <div className="space-y-3">
                {/* Pathao */}
                <div className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition">
                  <img
                    src="/pathao_courier.png"
                    alt="Pathao Courier"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                {/* Steadfast */}
                <div className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition">
                  <img
                    src="/steadfast.png"
                    alt="Steadfast Courier"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">যোগাযোগ করুন</h4>
            <div className="space-y-2 text-gray-700">
              <p>📞 +৮৮ ০১৬১১৮১৭৮২৪</p>
              <p>📧 info@naturalsfoodsbd.com</p>
              <p>📍 ঢাকা, বাংলাদেশ</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="hover:text-green-500 transition text-2xl"
                  title="Facebook"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="hover:text-green-500 transition text-2xl"
                  title="WhatsApp"
                >
                  💬
                </a>
                <a
                  href="#"
                  className="hover:text-green-500 transition text-2xl"
                  title="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-700 text-sm">
              <p>&copy; ២ ២०२६ চিয়া সিডস। সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
            <div className="text-right text-gray-700 text-sm">
              <p>নিরাপদ পেমেন্ট | দ্রুত ডেলিভারি | বিশ্বস্ত ব্র্যান্ড</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
