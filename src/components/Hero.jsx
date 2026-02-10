const Hero = () => {
  return (
    <section className="relative bg-linear-to-b from-green-50 via-white to-white py-12 sm:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            প্রাকৃতিকভাবে <span className="text-green-600">সুস্থ থাকুন</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            প্রতিদিন চিয়া সিড খান, ওজন কমান এবং সুস্থ জীবনযাপন করুন। ১০০%
            প্রাকৃতিক এবং সম্পূর্ণ নিরাপদ।
          </p>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <video
              controls
              autoPlay
              muted
              loop
              width="100%"
              className="w-full bg-gray-900"
            >
              <source src="/Chia Seeds Video.mp4" type="video/mp4" />
              <source src="/Chia Seeds Video.webm" type="video/mp4" />
            </video>
          </div>

          <div className="flex justify-center mb-8">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("checkout")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🛒 এখনই অর্ডার করুন
            </button>
          </div>

          <div className="bg-linear-to-r from-amber-400 to-amber-500 text-white font-bold text-lg sm:text-xl py-4 px-6 rounded-xl shadow-lg inline-block">
            <p className="mb-1">সরাসরি যোগাযোগ করুন</p>
            <p className="text-2xl">০১৭০০০০০০</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
