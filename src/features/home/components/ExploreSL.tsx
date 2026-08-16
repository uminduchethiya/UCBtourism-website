import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import buddisum from "../../../assets/budda.jpg"
import  background1 from "../../../assets/carasoulbg1.jpg"
import srilankaclutre from "../../../assets/cluture.jpg"
import beachtour from "../../../assets/beachtour.jpeg"
import wildlife from "../../../assets/wildlifesrilanka.jpg"
interface Tour {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  duration: string;
  nights: string;
  pickup: string;
}

export default function ExploreSL() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const tours: Tour[] = [
    {
      id: 1,
      title: "Religious Tours",
      image:buddisum,
      price: "$360.00",
      description:
        "Embark on a 5-day pilgrimage tour exploring Sri Lanka's rich Christian heritage. Visit historic churches, shrines, and landmarks associated with Blessed Joseph Vaz.",
      duration: "5 Days",
      nights: "4 Nights",
      pickup: "Airport Pickup",
    },
    {
      id: 2,
      title: "Cultural & Scenic Tours",
      image:srilankaclutre,
      price: "$1250.00",
      description:
        "Embark on a 6-day journey through Sri Lanka, exploring its cultural heritage, scenic hill country, and stunning coastal beauty.",
      duration: "6 Days",
      nights: "5 Nights",
      pickup: "Airport Pickup",
    },
    {
      id: 3,
      title: "Heritage Tours",
      image:background1,
      price: "$1850.00",
      description:
        "Explore UNESCO World Heritage Sites, ancient cities, and cultural landmarks like Anuradhapura and Sigiriya.",
      duration: "6 Days",
      nights: "5 Nights",
      pickup: "Airport Pickup",
    },
    {
      id: 4,
      title: "Wildlife Tours",
      image:wildlife,
      price: "$1450.00",
      description:
        "Experience the wildlife of Sri Lanka on a 7-day safari adventure. Spot leopards, elephants, and exotic birds.",
      duration: "7 Days",
      nights: "6 Nights",
      pickup: "Airport Pickup",
    },
    {
      id: 5,
      title: "Beach Tours",
      image:beachtour,
      price: "$980.00",
      description:
        "Relax and unwind on pristine beaches with crystal-clear waters. Includes water sports and seafood dining.",
      duration: "5 Days",
      nights: "4 Nights",
      pickup: "Airport Pickup",
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1); // Mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // Tablet
      else setCardsPerView(3); // Desktop
    };

    handleResize(); // Set on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % (tours.length - (cardsPerView - 1)));
  const prevSlide = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (tours.length - (cardsPerView - 1))) %
        (tours.length - (cardsPerView - 1))
    );

  const goToSlide = (index: number) => setCurrentIndex(index);

  const visibleTours = tours.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">Sri Lanka tours</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-forest">
            Explore Sri Lanka <span className="text-primary">your way</span>
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto">
            Discover Sri Lanka's rich history and diversity through expertly
            curated tours.
          </p>
          <Link to="/tours" className="inline-block mt-4 text-primary font-medium hover:underline">
            Browse all tour packages
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition -ml-4"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition -mr-4"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Tour Cards */}
          <div
            className={`grid gap-6 ${
              cardsPerView === 1
                ? "grid-cols-1"
                : cardsPerView === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {visibleTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Starting from {tour.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {tour.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {tour.description}
                  </p>

                  <Link
                    to={`/tours?category=${encodeURIComponent(
                      tour.title.includes("Wildlife")
                        ? "Wildlife Tours"
                        : tour.title.includes("Beach")
                        ? "Beach Tours"
                        : tour.title.includes("Heritage") || tour.title.includes("Religious") || tour.title.includes("Cultural")
                        ? "Cultural Tours"
                        : "Round Tours"
                    )}`}
                    className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <span>
                      {tour.duration} / {tour.nights}
                    </span>
                    <span className="text-white/70">|</span>
                    <span>{tour.pickup}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: tours.length - (cardsPerView - 1) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-3 h-3 bg-primary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
