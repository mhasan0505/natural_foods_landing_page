const Reviews = () => {
  const reviews = [
    {
      name: "ফাতেমা আক্তার",
      location: "ঢাকা",
      rating: 5,
      comment:
        "দারুণ পণ্য! আমার স্বাস্থ্যের অনেক উন্নতি হয়েছে। দ্রুত ডেলিভারি এবং ভালো প্যাকেজিং।",
    },
    {
      name: "করিম খান",
      location: "চট্টগ্রাম",
      rating: 5,
      comment:
        "প্রিমিয়াম কোয়ালিটি এবং সাশ্রয়ী মূল্য। আমি নিয়মিত অর্ডার করছি এবং সবাইকে সুপারিশ করছি।",
    },
    {
      name: "সুমাইয়া বেগম",
      location: "সিলেট",
      rating: 5,
      comment:
        "অসাধারণ পণ্য এবং গ্রাহক সেবা। আমার পরিবারের সবাই খাচ্ছি এবং খুব সন্তুষ্ট।",
    },
    {
      name: "রহিম সাহেব",
      location: "খুলনা",
      rating: 5,
      comment:
        "আমি ৩ মাস ধরে চিয়া সিড খাচ্ছি এবং অনেক পরিবর্তন দেখেছি। সত্যিই দুর্দান্ত!",
    },
    {
      name: "নাজমা আক্তার",
      location: "রাজশাহী",
      rating: 5,
      comment:
        "জৈব এবং খাঁটি পণ্য। আমার শরীরের ওজন নিয়ন্ত্রণে সাহায্য করেছে। সুপারিশ করি!",
    },
    {
      name: "আহমেদ আলী",
      location: "বরিশাল",
      rating: 5,
      comment:
        "দারুণ সেবা এবং দ্রুত ডেলিভারি। আমার শক্তি বৃদ্ধি পেয়েছে এবং ফিটনেস উন্নত হয়েছে।",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            গ্রাহকদের মতামত
          </h2>
          <p className="text-xl text-gray-600">
            আমাদের সন্তুষ্ট গ্রাহকরা কী বলছেন?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md border-l-4 border-yellow-400"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>

              <div className="border-t border-yellow-200 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">📍 {review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-linear-to-r from-green-100 to-emerald-100 rounded-xl p-8 text-center border-2 border-green-300">
          <p className="text-gray-700 mb-4">
            <span className="text-2xl">🌟</span>{" "}
            <strong>২,৩৪৫+ সন্তুষ্ট গ্রাহক</strong>
          </p>
          <p className="text-gray-700">
            আমরা গর্বিত যে আমাদের গ্রাহকরা আমাদের পণ্যে সন্তুষ্ট এবং তাদের
            বন্ধুদের কাছে সুপারিশ করছেন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
