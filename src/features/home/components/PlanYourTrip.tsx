import { ArrowRight, Anchor, Shield, Users } from "lucide-react";
import arugambay from "../../../assets/planyourtrip.jpg"
import unwatuna from "../../../assets/planyourtrip4.jpg"
import arugambay2 from "../../../assets/planyourtrip1.jpeg"
import koggala from "../../../assets/koogala.jpg"

export default function PlanYourTrip() {
  const features = [
    {
      icon: <Anchor className="w-7 h-7" />,
      title: "Exclusive Trip",
      description:
        "There are many variations of passages available, but the majority have suffered alteration.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Safety First Always",
      description:
        "Our tours prioritize your safety with professional planning and trusted partners.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Professional Guide",
      description:
        "Experienced local guides to ensure your trip is memorable, educational, and fun.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Grid */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-5">
              {/* Top Left */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 lg:h-72">
                <img
                  src={koggala}
                  alt="Mountain Lake"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 lg:h-72 mt-12">
                <img
                  src={arugambay}
                  alt="Hiking Group"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 -mt-8">
                <img
                  src={arugambay2}
                  alt="Person by Lake"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
                <img
                  src={unwatuna}
                  alt="Luxury Yacht"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Intro Text */}
            <p
              className="text-secondary text-2xl font-semibold mb-3"
              style={{ fontFamily: "cursive" }}
            >
              Let’s Go Together
            </p>

            {/* Main Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
              style={{ fontFamily: "cursive" }}
            >
              Plan Your <span className="text-primary">Trip</span>
              <br /> With Us
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Experience the beauty of Sri Lanka with perfectly curated tours.
              Whether it’s adventure, relaxation, or culture, we’ve got you
              covered with customized travel experiences.
            </p>

            {/* Features List */}
            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div
                    className={`${feature.bgColor} ${feature.iconColor} p-3 rounded-lg flex-shrink-0`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#138a9f] transition font-medium flex items-center gap-2 group text-lg">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
