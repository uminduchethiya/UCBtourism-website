import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, MapPin, Utensils, Car, Hotel, Sparkles } from "lucide-react";
import PageHero from "../../../shared/components/PageHero";
import {
  TOUR_CATEGORIES,
  formatTourPrice,
  toursData,
  type TourCategory,
} from "../data/toursData";
import { slImages } from "../../../data/images";

export default function ToursList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const destinationFilter = searchParams.get("destination") || "";
  const durationFilter = searchParams.get("duration") || "";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const categories = ["All", ...TOUR_CATEGORIES];

  const filteredTours = useMemo(() => {
    return toursData.filter((tour) => {
      const matchesCategory =
        activeCategory === "All" ||
        tour.categories.includes(activeCategory as TourCategory);
      const matchesDestination =
        !destinationFilter ||
        tour.places.some((place) =>
          place.toLowerCase().includes(destinationFilter.toLowerCase())
        ) ||
        tour.title.toLowerCase().includes(destinationFilter.toLowerCase());
      const matchesDuration =
        !durationFilter ||
        (durationFilter === "1-3" && tour.durationDays <= 3) ||
        (durationFilter === "4-7" && tour.durationDays >= 4 && tour.durationDays <= 7) ||
        (durationFilter === "8-14" && tour.durationDays >= 8);
      return matchesCategory && matchesDestination && matchesDuration;
    });
  }, [activeCategory, destinationFilter, durationFilter]);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    const next = new URLSearchParams(searchParams);
    if (category === "All") next.delete("category");
    else next.set("category", category);
    setSearchParams(next);
  };

  return (
    <>
      <PageHero
        title="Sri Lanka Tours"
        subtitle="Private packages for culture, wildlife, beaches, highlands and the full island circuit."
        image={slImages.sigiriya}
        crumb="Tours"
      />

      <section className="max-w-7xl mx-auto px-4 pt-6 pb-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {(destinationFilter || durationFilter) && (
          <p className="text-sm text-gray-600 mb-6">
            {destinationFilter && (
              <>
                Showing tours related to <strong>{destinationFilter}</strong>.{" "}
              </>
            )}
            {durationFilter && (
              <>
                Duration filter: <strong>{durationFilter} days</strong>.{" "}
              </>
            )}
            <button
              className="text-primary underline"
              onClick={() => {
                const next = new URLSearchParams(searchParams);
                next.delete("destination");
                next.delete("duration");
                setSearchParams(next);
              }}
            >
              Clear filters
            </button>
          </p>
        )}

        <p className="text-gray-500 mb-8">{filteredTours.length} tours available</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filteredTours.map((tour) => (
            <article
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition"
            >
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover" />
                <span className="absolute top-4 left-4 bg-white/95 text-forest text-xs font-semibold px-3 py-1 rounded-full">
                  {tour.duration}
                </span>
                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tour.categories[0]}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-display font-semibold text-forest mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{tour.shortDescription}</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {tour.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {tour.startLocation} → {tour.endLocation}
                  </p>
                  <p className="flex items-start gap-2">
                    <Hotel className="w-4 h-4 text-primary mt-0.5" />
                    {tour.accommodation}
                  </p>
                  <p className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-primary mt-0.5" />
                    {tour.transport}
                  </p>
                  <p className="flex items-start gap-2">
                    <Utensils className="w-4 h-4 text-primary mt-0.5" />
                    {tour.meals}
                  </p>
                </div>

                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Places included</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tour.places.map((place) => (
                    <span key={place} className="bg-sand text-forest text-xs px-2.5 py-1 rounded-full">
                      {place}
                    </span>
                  ))}
                </div>

                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Highlights</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-5">
                  {tour.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-lg font-semibold text-forest">
                      {formatTourPrice(tour.price)}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/tours/${tour.id}`}
                      className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-semibold text-center hover:bg-primary hover:text-white transition"
                    >
                      View Tour
                    </Link>
                    <Link
                      to={`/tours/${tour.id}#book`}
                      className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold text-center hover:bg-[#0c5f59] transition"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="bg-white rounded-2xl p-10 text-center text-gray-600">
            No tours match this filter. Try another category or{" "}
            <Link to="/plan-your-tour" className="text-primary underline">
              plan a custom tour
            </Link>
            .
          </div>
        )}
      </section>
    </>
  );
}
