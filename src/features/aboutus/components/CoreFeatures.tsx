import { Flag, MapPin, Compass, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CoreFeatures() {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = [0, 1, 2, 3].map((index) =>
      setTimeout(() => {
        setVisibleCards((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 150)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const features = [
    {
      id: 1,
      icon: Flag,
      title: "Tell Us What You Want To Do",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      reviews: "100+ Reviews",
    },
    {
      id: 2,
      icon: MapPin,
      title: "Share Your Travel Locations",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      reviews: "100+ Reviews",
    },
    {
      id: 3,
      icon: Compass,
      title: "Share Your Travel Preference",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      reviews: "100+ Reviews",
    },
    {
      id: 4,
      icon: Leaf,
      title: "Here 100% Trusted Tour Agency",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      reviews: "100+ Reviews",
    },
  ];

  return (
    <section className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-bold text-lg mb-2" style={{ fontFamily: "cursive" }}>Core Features</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-800" style={{ fontFamily: "cursive" }}>Find </span>
            <span className="text-primary" style={{ fontFamily: "cursive" }}>Travel Perfection</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`transform transition-all duration-500 ${
                  visibleCards[index]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } hover:-translate-y-2 hover:scale-105 hover:shadow-xl`}
              >
                <div className="h-full flex flex-col bg-white border border-gray-200 p-8 rounded-2xl transition-shadow hover:shadow-lg">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100">
                      <IconComponent className="w-8 h-8 text-[#17a2b8]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm mb-6 flex-grow text-gray-600">{feature.description}</p>

                  {/* Reviews */}
                  <p className="text-sm font-semibold text-[#17a2b8]">{feature.reviews}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
