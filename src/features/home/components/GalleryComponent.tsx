import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import  background1 from "../../../assets/carasoulbg1.jpg"
import  background2 from "../../../assets/carasoulbg2.jpg"
import  background3 from "../../../assets/carasoulbg3.jpg"
import gallefort from "../../../assets/gallefort.jpg"
import anduradpurya from "../../../assets/anuradapurya.jpg"
import ambuluwawa from "../../../assets/ambuluwawa.jpg"
const images = [
 background1,background2,background3,gallefort,anduradpurya,ambuluwawa
];

export default function GalleryComponent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openLightbox = (url: string) => setSelectedImage(url);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="relative min-h-screen  px-4 overflow-hidden bg-gray-50 -mt-48 md:mt-0 2xl:-mt-64">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-secondary text-lg md:text-xl mb-2 font-cursive"
            style={{ fontFamily: "cursive" }}
          >
            Make Your Tour More Pleasure
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "cursive" }}
          >
            <span className="text-primary">Recent </span>
            <span className="text-black">Gallery</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(images[i])}
              >
                <img
                  src={images[i]}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                {hoveredIndex === i && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-4">
            {[3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(images[i])}
              >
                <img
                  src={images[i]}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                {hoveredIndex === i && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-4">
            {[2, 5, 3].map((i) => (
              <div
                key={i + 10}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(images[i])}
              >
                <img
                  src={images[i]}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                {hoveredIndex === i && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="grid gap-4">
            {[3, 1].map((i) => (
              <div
                key={i + 20}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(images[i])}
              >
                <img
                  src={images[i]}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                {hoveredIndex === i && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-10 h-10" />
          </button>
          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="selected"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
      `}</style>
    </div>
  );
}
