import PlanYourTrip from  "../../home/components/PlanYourTrip"
import TestimonialCarousel from "../../home/components/TestimonialCarousel";
import CoreFeatures from "../components/CoreFeatures";
import TourGuides from "../components/TourGuides";
export default function AboutUs() {
    return (
        <>
      <div className="relative w-full h-[70vh] overflow-hidden "> {/* Reduced height from full screen to 70vh */}
        {/* Background Image - z-index 0 */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
  
        {/* Content - z-index 10 */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" >
            ABOUT US
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <a href="/" className="text-primary transition"  style={{ fontFamily: "cursive" }}>
              Home
            </a>
            <span>|</span>
            <span className="text-secondary">About Us</span>
          </div>
        </div>
  
        {/* Wavy Shape Divider - z-index 50 */}
        <div className="absolute bottom-0 left-0 right-0 z-50">
          <svg
            className="w-full h-[150px] " // Increased wave height
            viewBox="0 0 1440 250"       // Adjusted viewBox for taller wave
            preserveAspectRatio="none"
          >
            <path
              d="M0,80L60,120C120,160,240,220,360,220C480,220,600,160,720,140C840,120,960,160,1080,180C1200,200,1320,160,1380,140L1440,120L1440,250L0,250Z"
              fill="#F9FAFB"   
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </div>
      <PlanYourTrip/>
      <CoreFeatures/>
      <TourGuides/>
      <TestimonialCarousel/>
      </>
    
    );
  }
  