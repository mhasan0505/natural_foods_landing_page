const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">
              চিয়া সিডস
            </h3>
            <p className="text-gray-400">
              আমরা ১০০% প্রাকৃতিক এবং জৈব পণ্য সরবরাহ করি। আপনার স্বাস্থ্য
              আমাদের প্রথম অগ্রাধিকার।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  হোম
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  পণ্য
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">গ্রাহক সেবা</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  ডেলিভারি নীতি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  রিটার্ন নীতি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  শর্তাবলী
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  গোপনীয়তা নীতি
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">যোগাযোগ করুন</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +৮৮ ০১৭০০০০০০</p>
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
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; ২০২৬ চিয়া সিডস। সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
            <div className="text-right text-gray-400 text-sm">
              <p>নিরাপদ পেমেন্ট | দ্রুত ডেলিভারি | বিশ্বস্ত ব্র্যান্ড</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
