import { ChevronDown, ChevronUp, Star, X } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

export default function ToursSingle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expandedDay, setExpandedDay] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Tours data - same as in ToursList
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

  // Find the tour based on the ID from URL
  const tour = tours.find(t => t.id === Number(id));

  // If tour not found, show error message
  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tour Not Found</h2>
          <p className="text-gray-600 mb-6">The tour you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/tourslist')}
            className="bg-[#17a2b8] text-white px-6 py-3 rounded hover:bg-[#138a9d] transition"
          >
            Back to Tours List
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleBack = () => {
    navigate('/tourslist');
  };

  const itinerary = [
    {
      day: 1,
      title: 'Departure - ' + tour.location,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      day: 2,
      title: 'Exploration Day',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      day: 3,
      title: 'Final Adventure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  const departureInclude = [
    '1 Night Hotel',
    '2 Night Hotel',
    'Airport Transfer',
    'Breakfast Included',
  ];

  const departureExclude = [
    '5 Lunch Meal Included',
    '5 Dinner Meal Included',
    'Personal Expenses',
    'Travel Insurance',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{tour.title}</h1>
            <button 
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white rounded-lg mb-8 overflow-hidden shadow">
              <div className="flex border-b overflow-x-auto">
                {['Overview', 'Itinerary', 'Description', 'Reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-6 py-3 font-semibold transition whitespace-nowrap ${
                      activeTab === tab.toLowerCase()
                        ? 'text-[#17a2b8] border-b-2 border-[#17a2b8]'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-sm">Duration</p>
                        <p className="text-xl font-bold text-gray-800 mt-1">{tour.duration}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-sm">Max Group Size</p>
                        <p className="text-xl font-bold text-gray-800 mt-1">50 Person</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-sm">Age</p>
                        <p className="text-xl font-bold text-gray-800 mt-1">2-80 Yrs</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-sm">Languages</p>
                        <p className="text-xl font-bold text-gray-800 mt-1">English</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="space-y-4">
                    {itinerary.map((item, idx) => (
                      <div key={idx} className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedDay(expandedDay === idx ? -1 : idx)}
                          className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
                        >
                          <div className="text-left">
                            <p className="font-semibold text-gray-800">Day {item.day}: {item.title}</p>
                          </div>
                          {expandedDay === idx ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                        {expandedDay === idx && (
                          <div className="px-6 py-4 bg-gray-50 border-t">
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">What to Include</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Additional Notes</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xl font-bold text-gray-800 mb-2">{tour.rating} out of 5</p>
                    <p className="text-gray-600">Based on {tour.reviews} reviews</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8 shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Location: {tour.location}</h3>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.331572405396!2d15.873119!3d45.815011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692a7ce507f%3A0x540e88920e944e0!2s${tour.location}!5e0!3m2!1sen!2shr!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${tour.location}`}
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8]"
                />
                <textarea
                  name="message"
                  placeholder="Enter a message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#17a2b8] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#17a2b8] text-white font-semibold py-3 rounded-lg hover:bg-[#138a9d] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 mb-6 shadow sticky top-20">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Tour Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-gray-600 text-sm">Duration</p>
                  <p className="text-gray-800 font-semibold">{tour.duration}</p>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-gray-600 text-sm">Departure Time</p>
                  <p className="text-gray-800 font-semibold">2 Hours Before</p>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-gray-600 text-sm">Location</p>
                  <p className="text-gray-800 font-semibold">{tour.location}</p>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-gray-600 text-sm">Price</p>
                  <p className="text-gray-800 font-semibold">${tour.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-sm">Rating</p>
                  <div className="flex items-center gap-1">
                    {[...Array(tour.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-[#ffc107] text-gray-800 font-bold py-3 rounded-lg hover:bg-[#ffb500] transition">
                Book Now
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-[#17a2b8]">✓</span> Inclusion
                </h3>
                <ul className="space-y-2">
                  {departureInclude.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-[#17a2b8] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-red-500">✗</span> Exclusion
                </h3>
                <ul className="space-y-2">
                  {departureExclude.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-red-500 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}