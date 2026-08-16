import { Link } from "react-router-dom";
import PlanYourTrip from "../../home/components/PlanYourTrip";
import TestimonialCarousel from "../../home/components/TestimonialCarousel";
import CoreFeatures from "../components/CoreFeatures";
import TourGuides from "../components/TourGuides";
import PageHero from "../../../shared/components/PageHero";
import { slImages } from "../../../data/images";
import { COMPANY } from "../../../shared/constants/company";

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle={`${COMPANY.legalName} — private Sri Lanka tours from ${COMPANY.location}.`}
        image={slImages.kandyTemple}
        crumb="About Us"
      />
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-display font-semibold text-forest mb-4">
            A Sri Lankan tour company for independent travellers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            TravelIn is the visitor-facing name of {COMPANY.legalName}. We arrange
            private tours, airport transfers and custom itineraries for guests who
            want to see Sri Lanka with a reliable local driver rather than a large
            coach group.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Based in {COMPANY.location}, we work across the Cultural Triangle, hill
            country, national parks and both coasts. You can choose a ready-made
            package or tell us your dates and we will build the route around you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/tours" className="bg-primary text-white px-5 py-2.5 rounded-full font-medium">
              Browse tours
            </Link>
            <Link to="/drivers" className="border border-primary text-primary px-5 py-2.5 rounded-full font-medium">
              Meet our drivers
            </Link>
          </div>
        </div>
      </section>
      <PlanYourTrip />
      <CoreFeatures />
      <TourGuides />
      <TestimonialCarousel />
    </>
  );
}
