import { useState } from "react";
import { LayoutGrid, List, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Tour {
  id: number;
  image: string;
  title: string;
  duration: string;
  location: string;
  price: number;
  reviews: number;
  rating: number;
  safety: string;
  cancellation: string;
  category: string;
}

export default function ToursList() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Heritage Tours']);
  const [sortBy, setSortBy] = useState<string>("popular");

  const tours: Tour[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Leeds Castle, Cliffs Of Dover",
      duration: "6+ Hours",
      location: "Croatia",
      price: 200,
      reviews: 200,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Heritage Tours",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Adriatic Adventure- Zagreb To Athens",
      duration: "8+ Hours",
      location: "Greece",
      price: 250,
      reviews: 180,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Classical Tours",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "The Spanish Riviera Cost Bay",
      duration: "5+ Hours",
      location: "Spain",
      price: 180,
      reviews: 150,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Heritage Tours",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Paris City Lights Tour",
      duration: "4+ Hours",
      location: "France",
      price: 220,
      reviews: 320,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Classical Tours",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Sigiriya Rock Fortress Adventure",
      duration: "7+ Hours",
      location: "Sri Lanka",
      price: 95,
      reviews: 280,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Heritage Tours",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1548013146-72ede4b6ccd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Temple City Tours - Colombo & Kandy",
      duration: "6+ Hours",
      location: "Sri Lanka",
      price: 75,
      reviews: 320,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Religious Tours",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Safari Wildlife Expedition",
      duration: "8+ Hours",
      location: "Kenya",
      price: 320,
      reviews: 150,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Wild Life Tours",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1479193267923-88226319979d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Tropical Beach Escape",
      duration: "5+ Hours",
      location: "Maldives",
      price: 280,
      reviews: 220,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Beach Holidays",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1503803992566-48cf313e8d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Mountain Peak Adventure",
      duration: "9+ Hours",
      location: "Switzerland",
      price: 350,
      reviews: 200,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Luxury Tours",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Wellness Retreat Experience",
      duration: "5+ Hours",
      location: "Bali",
      price: 150,
      reviews: 280,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Ayurveda Wellness Tours",
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Religious Sacred Journey",
      duration: "7+ Hours",
      location: "India",
      price: 120,
      reviews: 190,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Religious Tours",
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1520763185298-1b434c919eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Honeymoon Paradise Package",
      duration: "10+ Hours",
      location: "Fiji",
      price: 450,
      reviews: 250,
      rating: 5,
      safety: "Taking Safety Measures",
      cancellation: "Free cancellation",
      category: "Honymoon Tours",
    },
  ];

  const categories = [
    { name: "Heritage Tours", count: 92 },
    { name: "Classical Tours", count: 22 },
    { name: "Religious Tours", count: 35 },
    { name: "Wild Life Tours", count: 41 },
    { name: "Coach Tours", count: 11 },
    { name: "Sport Tours", count: 61 },
    { name: "Beach Holidays", count: 18 },
    { name: "Luxury Tours", count: 88 },
    { name: "Ayurveda Wellness Tours", count: 88 },
    { name: "Honymoon Tours", count: 88 },
  ];

  const filteredTours = tours.filter(tour =>
    selectedCategories.length === 0 || selectedCategories.includes(tour.category)
  );

  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleTourClick = (tourId: number) => {
    navigate(`/tours/${tourId}`);
  };

  return (
    <>
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Tours List</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span className="text-[#17a2b8]" style={{ fontFamily: "cursive" }}>Home</span>
            <span>|</span>
            <span className="text-white">Tours List</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-50">
          <svg className="w-full h-[150px]" viewBox="0 0 1440 250" preserveAspectRatio="none">
            <path
              d="M0,80L60,120C120,160,240,220,360,220C480,220,600,160,720,140C840,120,960,160,1080,180C1200,200,1320,160,1380,140L1440,120L1440,250L0,250Z"
              fill="#F9FAFB"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <p className="text-gray-600">Showing 1-{sortedTours.length} of {tours.length} results</p>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 bg-white rounded-lg p-1 shadow">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded transition ${viewType === "grid" ? "bg-[#ffc107] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded transition ${viewType === "list" ? "bg-[#ffc107] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-700 border border-gray-200 hover:border-[#17a2b8] transition shadow cursor-pointer"
                >
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg mb-6 shadow sticky top-20">
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-4 border-b-2 border-[#17a2b8]">
                  Categories Type
                </h3>
                <div className="space-y-3">
                  {categories.map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.name)}
                        onChange={() => handleCategoryChange(cat.name)}
                        className="w-4 h-4 text-[#17a2b8] accent-[#17a2b8]"
                      />
                      <span className="flex-1 text-gray-700">{cat.name}</span>
                      <span className="text-gray-500 text-sm">{cat.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Tours Grid/List */}
            <div className="lg:col-span-3">
              {sortedTours.length > 0 ? (
                viewType === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedTours.map((tour) => (
                      <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow cursor-pointer" onClick={() => handleTourClick(tour.id)}>
                        <div className="relative">
                          <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover" />
                          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold text-[#17a2b8]">
                            {tour.duration}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-[#17a2b8] transition">
                            {tour.title}
                          </h3>

                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-gray-600 text-sm">({tour.reviews} reviews)</span>
                          </div>

                          <p className="text-[#17a2b8] text-sm font-semibold mb-2">📍 {tour.location}</p>
                          <p className="text-sm text-gray-600 mb-2">✓ {tour.safety}</p>
                          <p className="text-sm text-green-600 font-semibold mb-4">✓ {tour.cancellation}</p>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-gray-600 text-sm">From</p>
                              <p className="text-2xl font-bold text-gray-800">${tour.price}</p>
                              <p className="text-gray-600 text-xs">Per Adult</p>
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTourClick(tour.id);
                              }}
                              className="bg-[#17a2b8] text-white px-6 py-2 rounded hover:bg-[#138a9d] transition"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedTours.map((tour) => (
                      <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow flex flex-col md:flex-row cursor-pointer" onClick={() => handleTourClick(tour.id)}>
                        <img src={tour.image} alt={tour.title} className="w-full md:w-64 h-64 object-cover" />

                        <div className="p-6 flex-1">
                          <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-4">
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 mb-1">{tour.duration}</p>
                              <h3 className="text-2xl font-bold text-gray-800 hover:text-[#17a2b8] transition">
                                {tour.title}
                              </h3>
                            </div>
                            <div className="text-left md:text-right">
                              <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="text-gray-600 text-sm">({tour.reviews} reviews)</p>
                            </div>
                          </div>

                          <p className="text-[#17a2b8] text-sm font-semibold mb-2">📍 {tour.location}</p>
                          <p className="text-sm text-gray-600 mb-1">✓ {tour.safety}</p>
                          <p className="text-sm text-green-600 font-semibold mb-4">✓ {tour.cancellation}</p>

                          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                            <div>
                              <p className="text-gray-600 text-sm">From</p>
                              <p className="text-3xl font-bold text-gray-800">${tour.price}</p>
                              <p className="text-gray-600 text-xs">Per Adult</p>
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTourClick(tour.id);
                              }}
                              className="bg-[#17a2b8] text-white px-8 py-3 rounded hover:bg-[#138a9d] transition w-full md:w-auto"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="col-span-3 flex items-center justify-center py-12 bg-white rounded-lg">
                  <p className="text-gray-600 text-lg">No tours found in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}