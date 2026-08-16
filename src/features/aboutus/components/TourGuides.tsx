import { Link } from "react-router-dom";
import { driversData } from "../../drivers/data/driversData";

export default function TourGuides() {
  return (
      <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-lg mb-2">Drivers & guides</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            <span className="text-gray-800">Meet our </span>
            <span className="text-primary">Sri Lankan drivers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Licensed, English-speaking drivers for airport transfers, day tours and
            multi-day island journeys.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {driversData.map((driver) => (
            <Link key={driver.id} to="/drivers" className="group">
              <div className="rounded-t-2xl overflow-hidden h-56">
                <img
                  src={driver.photo}
                  alt={driver.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="bg-primary text-white p-4 rounded-b-2xl text-center">
                <h3 className="font-semibold">{driver.name}</h3>
                <p className="text-sm text-white/85">{driver.experienceYears} years experience</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
