const Features = () => {
  const features = [
    {
      icon: "💪",
      title: "উচ্চ প্রোটিন",
      description: "প্রতি ১০০ গ্রাম চিয়া সিডে ২০ গ্রাম প্রোটিন রয়েছে",
    },
    {
      icon: "❤️",
      title: "স্বাস্থ্যকর হৃদয়",
      description: "ওমেগা-৩ ফ্যাটি এসিড হৃদয়ের স্বাস্থ্য বৃদ্ধি করে",
    },
    {
      icon: "🧠",
      title: "মস্তিষ্ক শক্তি",
      description: "মস্তিষ্কের কার্যকারিতা বৃদ্ধিতে সহায়ক",
    },
    {
      icon: "🏃",
      title: "শক্তি বৃদ্ধি",
      description: "দীর্ঘস্থায়ী শক্তি এবং সহনশীলতার জন্য নিখুঁত",
    },
    {
      icon: "✨",
      title: "ত্বকের যত্ন",
      description: "প্রাকৃতিক উজ্জ্বলতা এবং সুস্থ ত্বকের জন্য",
    },
    {
      icon: "⚡",
      title: "জৈব পণ্য",
      description: "সম্পূর্ণ রাসায়নিক এবং কীটনাশক মুক্ত",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            চিয়া সিডের সুবিধা
          </h2>
          <p className="text-xl text-gray-600">
            আপনার স্বাস্থ্যের জন্য প্রাকৃতিক সমাধান
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-green-200"
            >
              <p className="text-5xl mb-4">{feature.icon}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
