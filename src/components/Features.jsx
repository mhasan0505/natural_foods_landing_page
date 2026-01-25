import {
  ArchiveBoxIcon,
  BeakerIcon,
  BoltIcon,
  CircleStackIcon,
  ClockIcon,
  HeartIcon,
  ScaleIcon,
  SparklesIcon,
  SunIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "রক্তে ওমেগা-৩ এর মাত্রা বৃদ্ধি করে",
    icon: BeakerIcon,
  },
  {
    name: "রক্তে শর্করার মাত্রা নিয়ন্ত্রণে সহায়তা করে",
    icon: CircleStackIcon,
  },
  {
    name: "রক্তচাপ কমাতে সহায়তা করে",
    icon: HeartIcon,
  },
  {
    name: "ওজন নিয়ন্ত্রণে সাহায্য করে",
    icon: ScaleIcon,
  },
  {
    name: "হজম শক্তিশালী করে",
    icon: BoltIcon,
  },
  {
    name: "হার্টের স্বাস্থ্য ভালো রাখতে সহায়ক",
    icon: HeartIcon,
  },
  {
    name: "শক্তি ও এনার্জি বৃদ্ধি করে",
    icon: BoltIcon,
  },
  {
    name: "কোষ্ঠকাঠিন্য দূর করতে সাহায্য করে",
    icon: SparklesIcon,
  },
  {
    name: "হাড় ও দাঁত মজবুত করে",
    icon: TrophyIcon,
  },
  {
    name: "ত্বক ও চুলের স্বাস্থ্যে উপকারী",
    icon: UserIcon,
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
            <img
              src="/public/চিয়া সিড.png"
              alt="line"
              className="mx-auto mt-6"
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              প্রাকৃতিকভাবে আপনার শরীরকে সুস্থ ও সবল রাখতে চিয়া সিডের জুড়ি
              নেই।
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-12 pr-4 py-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 text-green-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center max-w-3xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                অর্ডার করুন
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                আরও জানুন
              </button>
            </div>

            <div className="bg-linear-to-r from-amber-400 to-amber-500 text-white text-center font-bold text-lg sm:text-xl py-4 px-6 rounded-xl shadow-lg inline-block">
              <p className="mb-1">সরাসরি যোগাযোগ করুন</p>
              <p className="text-2xl">০১৭০০০০০০</p>
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
      <div className="bg-white py-14 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              সতর্কতা
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-green-300 py-20">
        <div className="container mx-auto text-center font-bold px-6 lg:px-8">
          যদি কোনো অ্যালার্জি থাকে, সেবনের আগে ডাক্তারের পরামর্শ নিন। অতিরিক্ত
          সেবন এড়িয়ে চলুন।
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
    </>
  );
};

export default Features;
