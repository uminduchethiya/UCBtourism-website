import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import background1 from "../../../assets/carasoulbg1.jpg";
import background2 from "../../../assets/carasoulbg2.jpg";
import background3 from "../../../assets/carasoulbg3.jpg";
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover Sri Lanka privately",
      subtitle: "Tours, drivers and custom itineraries",
      image: background1,
    },
    {
      id: 2,
      title: "Temples, tea & wild coast",
      subtitle: "From Sigiriya to Galle with a local driver",
      image: background2,
    },
    {
      id: 3,
      title: "Travel at your own pace",
      subtitle: "Ready-made packages or a tour you design",
      image: background3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl">
                <p className="text-white text-xl md:text-2xl mb-4 font-light italic">
                  {slide.subtitle}
                </p>
                <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8">
                  {slide.title}
                </h1>
                <div className="flex flex-wrap gap-4">
                  <Link to="/tours" className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#0c5f59] transition font-medium flex items-center gap-2 shadow-lg">
                    Explore Tours
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/plan-your-tour"
                    className="px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg"
                    style={{ backgroundColor: "#c4a35a", color: "#14343a" }}
                  >
                    Plan Your Tour
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-primary w-8" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
