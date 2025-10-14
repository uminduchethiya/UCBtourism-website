import HeroCarousel from "../components/HeroCarousel";
import { useState } from 'react';
import { MapPin, Tent, Clock, Grid3x3, Search } from 'lucide-react';
import TopDestinations from "../components/TopDestinations";
import PlanYourTrip from "../components/PlanYourTrip";
import TestimonialCarousel from "../components/TestimonialCarousel";
import GalleryComponent from "../components/GalleryComponent";
import ExploreSL from "../components/ExploreSL";


export default function Home() {
    const [destination, setDestination] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
  return (
    <div>
      <HeroCarousel />
       {/* Search Box Section */}
       <div className="relative -mt-20 z-30 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
              {/* Destination */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-[#17a2b8]" />
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-gray-700 bg-white"
                >
                  <option value="">Select Destination</option>
                  <option value="paris">Paris, France</option>
                  <option value="bali">Bali, Indonesia</option>
                  <option value="tokyo">Tokyo, Japan</option>
                  <option value="maldives">Maldives</option>
                  <option value="iceland">Iceland</option>
                </select>
              </div>

              {/* Type */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Tent className="w-4 h-4 text-[#17a2b8]" />
                  Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-gray-700 bg-white"
                >
                  <option value="">Adventure</option>
                  <option value="beach">Beach</option>
                  <option value="city">City Tours</option>
                  <option value="cultural">Cultural</option>
                  <option value="wildlife">Wildlife</option>
                  <option value="cruise">Cruise</option>
                </select>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Clock className="w-4 h-4 text-[#17a2b8]" />
                  Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-gray-700 bg-white"
                >
                  <option value="">Duration</option>
                  <option value="1-3">1-3 Days</option>
                  <option value="4-7">4-7 Days</option>
                  <option value="8-14">8-14 Days</option>
                  <option value="15+">15+ Days</option>
                </select>
              </div>

              {/* Tour Category */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Grid3x3 className="w-4 h-4 text-[#17a2b8]" />
                  Tour Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-gray-700 bg-white"
                >
                  <option value="">Select Category</option>
                  <option value="adventure">Adventure</option>
                  <option value="luxury">Luxury</option>
                  <option value="budget">Budget</option>
                  <option value="family">Family</option>
                  <option value="honeymoon">Honeymoon</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-[#17a2b8] text-white px-8 py-3 rounded-lg hover:bg-[#138a9d] transition font-medium flex items-center justify-center gap-2 h-12">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <ExploreSL/>
      <TopDestinations/>
      <PlanYourTrip/>
      <TestimonialCarousel/>
      <GalleryComponent/>
     
    </div>
  );
}
