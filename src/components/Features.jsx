import {
  ArchiveBoxIcon,
  BeakerIcon,
  BoltIcon,
  ClockIcon,
  ScaleIcon,
  SparklesIcon,
  SunIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    number: 1,
    name: "ফাইবার, প্রোটিন, ক্যালসিয়াম, আয়রন, ম্যাগনেশিয়াম ও ভিটামিনে সমৃদ্ধ",
  },
  {
    number: 2,
    name: "হৃদযন্ত্রের জন্য ভালো – ওমেগা-৩ ফ্যাটি অ্যাসিড কোলেস্টেরল ও রক্তচাপ কমায়",
  },
  {
    number: 3,
    name: "হজম শক্তি বাড়ায় – ফাইবার কোষ্ঠকাঠিন্য দূর করে, গাট হেলথ ভালো রাখে",
  },
  {
    number: 4,
    name: "ওজন নিয়ন্ত্রণে সাহায্য করে – পেটে ভর রাখে, ক্ষুধা কমায়",
  },
  {
    number: 5,
    name: "ডায়াবেটিস নিয়ন্ত্রণে সহায়ক – রক্তে শর্করার মাত্রা স্থিতিশীল রাখে",
  },
  {
    number: 6,
    name: "শক্তি ও স্ট্যামিনা বাড়ায়",
  },
  {
    number: 7,
    name: "ত্বক ও চুলের জন্য উপকারী – অ্যান্টিঅক্সিডেন্ট ত্বক উজ্জ্বল রাখে, চুল মজবুত করে",
  },
  {
    number: 8,
    name: "হাড় ও দাঁত মজবুত করে – ক্যালসিয়াম ও ফসফরাস হাড়ের জন্য ভালো",
  },
  {
    number: 9,
    name: "ইমিউনিটি বাড়ায় – রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে",
  },
  {
    number: 10,
    name: "ডিটক্সে সাহায্য করে – শরীর থেকে টক্সিন বের করতে সহায়ক",
  },
  {
    number: 11,
    name: "মস্তিষ্কের জন্য ভালো – ওমেগা-৩ মেমোরি ও ফোকাস বাড়ায়",
  },
  {
    number: 12,
    name: "রক্তস্বল্পতা কমাতে সহায়ক – আয়রন হিমোগ্লোবিন বাড়াতে সাহায্য করে",
  },
  {
    number: 13,
    name: "ইনফ্ল্যামেশন কমায় – শরীরের ভেতরের প্রদাহ কমাতে সাহায্য করে",
  },
  {
    number: 14,
    name: "ঘুম ভালো করতে সাহায্য করে – ট্রিপটোফ্যান ভালো ঘুমে সহায়ক",
  },
  {
    number: 15,
    name: "হরমোন ব্যালান্সে সাহায্য করে – বিশেষ করে মেয়েদের জন্য উপকারী",
  },
  {
    number: 16,
    name: "লিভারের জন্য ভালো – ফ্যাটি লিভারের ঝুঁকি কমাতে সহায়ক",
  },
  {
    number: 17,
    name: "পেশি গঠনে সাহায্য করে – প্রোটিন জিম বা এক্সারসাইজের পর পেশি রাখে",
  },
  {
    number: 18,
    name: "বার্ধক্য ধীর করে – অ্যান্টিঅক্সিডেন্ট বয়সের ছাপ কমায়",
  },
  {
    number: 19,
    name: "পেটের গ্যাস ও এসিডিটি কমায় – হজম ভালো থাকায় এই সমস্যা কম হয়",
  },
  {
    number: 20,
    name: "শরীর হাইড্রেট রাখে – পানি শোষণ করে জলীয় ভারসাম্য বজায় রাখে",
  },
];

const howToEat = [
  { text: "১ চা চামচ চিয়া সিড", icon: SparklesIcon },
  { text: "১ গ্লাস পানিতে ভিজিয়ে রাখুন ২০–৩০ মিনিট", icon: ClockIcon },
  { text: "সকালে খালি পেটে অথবা রাতে ঘুমানোর আগে খান", icon: SunIcon },
  {
    text: "পানি, দই, মধু, স্মুদি বা দুধের সঙ্গে মিশিয়ে খেতে পারেন",
    icon: BeakerIcon,
  },
  { text: "প্রতিদিন প্রায় ১-২ চামচ গ্রহণ করতে পারেন", icon: ScaleIcon },
  { text: "ঠাণ্ডা ও শুষ্ক স্থানে সংরক্ষণ করুন", icon: ArchiveBoxIcon },
];

const Features = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-base font-semibold leading-7 text-green-600">
              Live healthy
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              চিয়া সিডের উপকারিতা
            </p>
            <img src="/চিয়া সিড.jpeg" alt="line" className="mx-auto mt-6" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              প্রাকৃতিকভাবে আপনার শরীরকে সুস্থ ও সবল রাখতে চিয়া সিডের জুড়ি
              নেই।
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-14 pr-4 py-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <dt className="inline font-semibold text-gray-900">
                  <span
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center text-green-600 font-bold text-xl"
                    aria-hidden="true"
                  >
                    {feature.number}
                  </span>
                  {feature.name}
                </dt>
              </div>
            ))}
          </div>
          <div className="text-center flex flex-col items-center mt-10">
            <button
              onClick={() =>
                document
                  .getElementById("checkout")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
            >
              🛒এখনই অর্ডার করুন
            </button>
            <div className="bg-linear-to-r from-amber-400 to-amber-500 text-white font-bold text-lg sm:text-xl py-4 px-6 rounded-xl shadow-lg inline-block">
              <p className="mb-1">সরাসরি যোগাযোগ করুন</p>
              <p className="text-2xl">📞 ০১৬১১৮১৭৮২৪০</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              কিভাবে খেতে হবে
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              চিয়া সিড খাওয়ার কিছু সহজ উপায় নিচে দেওয়া হলো:
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howToEat.map((item) => (
              <div
                key={item.text}
                className="relative pl-12 pr-4 py-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <dt className="inline font-semibold text-gray-900">
                  <item.icon
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 text-green-600"
                    aria-hidden="true"
                  />
                  {item.text}
                </dt>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
            <h2 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-3">
              <span className="text-4xl">⚠️</span> সতর্কতা
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span>
                  যদি কোনো অ্যালার্জি থাকে, সেবনের আগে ডাক্তারের পরামর্শ নিন
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span>
                  অতিরিক্ত সেবন এড়িয়ে চলুন - দৈনিক ১-২ চামচের বেশি নয়
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span>গর্ভবতী মায়েরা চিকিৎসকের পরামর্শ নিয়ে সেবন করুন</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-14 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-center font-bold text-3xl sm:text-4xl text-gray-900">
            কেন আমাদের চিয়া সিড নেবেন?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <SparklesIcon className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <p className="text-gray-700">১০০% প্রাকৃতিক ও ফ্রেশ</p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <BeakerIcon className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <p className="text-gray-700">
                কোন প্রকার কেমিক্যাল বা প্রিজারভেটিভ নেই
              </p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <ArchiveBoxIcon className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <p className="text-gray-700">
                বায়ুরোধী ও সম্পূর্ণ স্বাস্থ্যসম্মত প্যাকেজিংয়ে সংরক্ষিত
              </p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <p className="text-gray-700">বাংলাদেশে দ্রুত হোম ডেলিভারি</p>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <BoltIcon className="h-6 w-6 text-green-600 shrink-0 mt-1" />
              <p className="text-gray-700">ক্যাশ অন ডেলিভারি সুবিধা</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center flex flex-col items-center">
            <button
              onClick={() =>
                document
                  .getElementById("checkout")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
            >
              🛒এখনই অর্ডার করুন
            </button>
            <div className="bg-linear-to-r from-amber-400 to-amber-500 text-white font-bold text-lg sm:text-xl py-4 px-6 rounded-xl shadow-lg inline-block">
              <p className="mb-1">সরাসরি যোগাযোগ করুন</p>
              <p className="text-2xl">📞 ০১৬১১৮১৭৮২৪০</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
