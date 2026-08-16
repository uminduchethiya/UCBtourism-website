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
      title: "Tell us how you want to travel",
      description: "Choose a ready-made Sri Lanka package or send dates for a custom private itinerary.",
      reviews: "Private tours only",
    },
    {
      id: 2,
      icon: MapPin,
      title: "Pick your destinations",
      description: "Sigiriya, Kandy, Ella, Yala, Galle, Mirissa, the east coast — or a full island circuit.",
      reviews: "12 key destinations",
    },
    {
      id: 3,
      icon: Compass,
      title: "Travel with a local driver",
      description: "Airport transfers, day tours and multi-day journeys in a clean air-conditioned car or van.",
      reviews: "Licensed drivers",
    },
    {
      id: 4,
      icon: Leaf,
      title: "A trusted island host",
      description: "Clear communication, honest timing and support on WhatsApp before and during your trip.",
      reviews: "Based in Sri Lanka",
    },
  ];

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">How we work</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-forest">
            Find <span className="text-primary">travel perfection</span>
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
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm mb-6 flex-grow text-gray-600">{feature.description}</p>

                  {/* Reviews */}
                  <p className="text-sm font-semibold text-primary">{feature.reviews}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
