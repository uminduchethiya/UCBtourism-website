import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Tent, Clock, Grid3x3, Search } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import TopDestinations from "../components/TopDestinations";
import PlanYourTrip from "../components/PlanYourTrip";
import TestimonialCarousel from "../components/TestimonialCarousel";
import GalleryComponent from "../components/GalleryComponent";
import ExploreSL from "../components/ExploreSL";
import { destinationsData } from "../../destinations/data/destinationsData";
import { TOUR_CATEGORIES } from "../../tours/data/toursData";

export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (category) params.set("category", category);
    if (type && !category) params.set("category", type);
    if (duration) params.set("duration", duration);
    navigate(`/tours${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div>
      <HeroCarousel />
      <div className="relative -mt-20 z-30 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#e8e0d2]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">All destinations</option>
                  {destinationsData.map((item) => (
                    <option key={item.slug} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Tent className="w-4 h-4 text-primary" />
                  Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">Any type</option>
                  <option value="Cultural Tours">Cultural</option>
                  <option value="Wildlife Tours">Wildlife</option>
                  <option value="Beach Tours">Beach</option>
                  <option value="Adventure Tours">Adventure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">Any duration</option>
                  <option value="1-3">1–3 Days</option>
                  <option value="4-7">4–7 Days</option>
                  <option value="8-14">8–14 Days</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Grid3x3 className="w-4 h-4 text-primary" />
                  Tour Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">All categories</option>
                  {TOUR_CATEGORIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-[#0c5f59] transition font-medium flex items-center justify-center gap-2 h-12"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <ExploreSL />
      <TopDestinations />
      <PlanYourTrip />
      <TestimonialCarousel />
      <GalleryComponent />
    </div>
  );
}
