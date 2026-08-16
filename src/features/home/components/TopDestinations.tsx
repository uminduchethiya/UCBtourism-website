import { Link } from "react-router-dom";
import { slImages, localImages } from "../../../data/images";

interface Destination {
  id: number;
  city: string;
  slug: string;
  tours: number;
  image: string;
  size: "large" | "small";
}

export default function TopDestinations() {
  const destinations: Destination[] = [
    { id: 1, city: "Ambuluwawa", slug: "ella", tours: 15, image: localImages.ambuluwawa, size: "large" },
    { id: 2, city: "Galle Fort", slug: "galle", tours: 18, image: slImages.galleFort, size: "small" },
    { id: 3, city: "Anuradhapura", slug: "anuradhapura", tours: 21, image: slImages.anuradhapura, size: "small" },
    { id: 4, city: "Kandy", slug: "kandy", tours: 15, image: slImages.kandyTemple, size: "small" },
    { id: 5, city: "Sigiriya", slug: "sigiriya", tours: 32, image: slImages.sigiriya, size: "small" },
  ];

  return (
    <section className="bg-sand py-8">
      <div className="max-w-7xl mx-auto px-4">

         {/* Section Header */}
         <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">The island</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-forest mb-4">
            Explore <span className="text-primary">top destinations</span> in Sri Lanka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From misty mountains to golden beaches — discover Sri Lanka’s most
            breathtaking destinations filled with heritage, adventure, and
            beauty.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card - London */}
          <Link to={`/destinations/${destinations[0].slug}`} className="lg:row-span-2 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[670px]">
            <div className="relative h-full min-h-[500px] lg:min-h-[650px]">
              <img
                src={destinations[0].image}
                alt={destinations[0].city}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                
                <h3 className="text-4xl font-bold mb-4">
                  {destinations[0].city}
                </h3>
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {destinations[0].tours} Tours
                </span>
              </div>
            </div>
          </Link>

          {/* Small Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.slice(1).map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.slug}`}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    
                    <h3 className="text-2xl font-bold mb-3">
                      {destination.city}
                    </h3>
                    <span className="inline-block bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      {destination.tours} Tours
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/destinations"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            View all Sri Lanka destinations
          </Link>
        </div>
      </div>
    </section>
  );
}