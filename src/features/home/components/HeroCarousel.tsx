import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUp } from 'lucide-react';
import  background1 from "../../../assets/carasoulbg1.jpg"
import  background2 from "../../../assets/carasoulbg2.jpg"
import  background3 from "../../../assets/carasoulbg3.jpg"
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Natural Wonder of the world',
      subtitle: 'Get unforgettable pleasure with us',
      image: background1
    },
    {
      id: 2,
      title: 'Discover Hidden Paradises',
      subtitle: 'Experience the beauty of untouched nature',
      image: background2
    },
    {
      id: 3,
      title: 'Adventure Awaits You',
      subtitle: 'Create memories that last forever',
      image: background3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                  <button className="bg-[#17a2b8] text-white px-8 py-4 rounded-full hover:bg-[#138a9d] transition font-medium flex items-center gap-2 shadow-lg">
                    Explore Tours
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-opacity-30 transition font-medium flex items-center gap-2 border-2 border-white shadow-lg">
                    Our Services
                    <ArrowRight className="w-5 h-5" />
                  </button>
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
              index === currentSlide ? 'bg-[#17a2b8] w-8' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-30 bg-[#17a2b8] text-white p-3 rounded-full hover:bg-[#138a9d] transition shadow-lg"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
