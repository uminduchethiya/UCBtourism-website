import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrew Simon",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors. It incorporates passive design principles.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex Jordan",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed windows enhance energy efficiency.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Doe",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    text: "A home that perfectly blends sustainability with luxury. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living is outstanding.",
    rating: 5,
  },
  {
    id: 4,
    name: "John Smith",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "Amazing experience from start to finish. The attention to detail and quality of service exceeded all expectations. I would highly recommend to anyone looking for excellence.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    text: "Outstanding quality and service. Every aspect was handled professionally and the results speak for themselves. Truly a remarkable experience that I'll never forget.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    text: "Exceptional attention to detail and customer care. The team went above and beyond to ensure everything was perfect. I couldn't be happier with the outcome.",
    rating: 5,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getVisibleTestimonials = () => {
    if (window.innerWidth < 768) return 1;
    return 3;
  };

  const [visibleTestimonials, setVisibleTestimonials] = useState(
    getVisibleTestimonials()
  );
  const maxIndex = testimonials.length - visibleTestimonials;

  useEffect(() => {
    const handleResize = () => {
      setVisibleTestimonials(getVisibleTestimonials());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-secondary font-light text-xl mb-2"
            style={{ fontFamily: "cursive" }}
          >
            Testimonial
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "cursive" }}
          >
            <span className="text-primary">What Clients </span>
            <span className="text-black">Say About Us</span>
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleTestimonials)
              }%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 px-4 w-full md:w-1/3`}
              >
                <div className="bg-[#17a2b8] text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[400px] flex flex-col relative">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-[#ffc107] text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white leading-relaxed flex-1">
                    {testimonial.text}
                  </p>

                  {/* Quote Icon */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-[#17a2b8] text-3xl font-serif leading-none">
                        "
                      </span>
                    </div>
                  </div>

                  {/* Bottom Quote Mark */}
                  <div className="absolute bottom-8 left-8">
                    <span className="text-[#ffc107] text-6xl font-serif leading-none opacity-50">
                      "
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-3 bg-[#17a2b8]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
