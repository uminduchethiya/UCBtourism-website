import { useState } from "react";
import { Star, Languages, Car, MapPin } from "lucide-react";
import PageHero from "../../../shared/components/PageHero";
import EnquiryForm from "../../../shared/components/EnquiryForm";
import { driversData, type Driver } from "../data/driversData";
import { slImages } from "../../../data/images";

export default function DriversPage() {
  const [selected, setSelected] = useState<Driver | null>(null);

  return (
    <>
      <PageHero
        title="Drivers & Tour Guides"
        subtitle="Professional, friendly Sri Lankan drivers for airport transfers, day tours and multi-day journeys."
        image={slImages.galleFort}
        crumb="Drivers"
      />

      <section className="max-w-5xl mx-auto px-4 pt-6 mb-12">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-display font-semibold text-forest mb-3">
            Travel with someone who knows the island
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our drivers are professional, licensed and used to working with international
            travellers. They are friendly, careful on the road, and knowledgeable about
            Sri Lanka’s temples, national parks, tea country and coast. They are available
            for airport transfers, private day tours and complete multi-day itineraries
            in a clean air-conditioned car or van.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {driversData.map((driver) => (
            <article key={driver.id} className="bg-white rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-5">
              <img
                src={driver.photo}
                alt={driver.name}
                className="w-full md:w-44 h-56 md:h-44 object-cover rounded-2xl"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-forest">{driver.name}</h3>
                    <p className="text-sm text-gray-500">{driver.experienceYears} years of experience</p>
                  </div>
                  <p className="flex items-center gap-1 text-sm font-medium">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    {driver.rating} ({driver.reviews})
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-3">{driver.intro}</p>
                <div className="grid sm:grid-cols-2 gap-2 mt-4 text-sm text-gray-600">
                  <p className="flex gap-2"><Languages className="w-4 h-4 text-primary" />{driver.languages.join(", ")}</p>
                  <p className="flex gap-2"><Car className="w-4 h-4 text-primary" />{driver.vehicle}</p>
                  <p className="flex gap-2 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {driver.specialities.join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {driver.services.map((service) => (
                    <span key={service} className="bg-sand text-forest text-xs px-2.5 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
                <blockquote className="text-sm italic text-gray-500 mt-4">
                  “{driver.testimonial}”
                </blockquote>
                <button
                  onClick={() => {
                    setSelected(driver);
                    document.getElementById("driver-request")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0c5f59]"
                >
                  Request This Driver
                </button>
              </div>
            </article>
          ))}
        </div>

        <div id="driver-request" className="bg-white rounded-3xl p-6 shadow-sm h-fit sticky top-24">
          <h3 className="text-xl font-display font-semibold text-forest mb-4">
            {selected ? `Request ${selected.name}` : "Request a driver"}
          </h3>
          <EnquiryForm
            type="driver"
            contextTitle={selected ? selected.name : "Any available driver"}
            contextDetails={
              selected
                ? `Driver: ${selected.name}\nExperience: ${selected.experienceYears} years\nLanguages: ${selected.languages.join(", ")}\nVehicle: ${selected.vehicle}\nSpecialities: ${selected.specialities.join(", ")}`
                : "Please assign a suitable driver for our Sri Lanka trip."
            }
            submitLabel="Request This Driver"
          />
        </div>
      </section>
    </>
  );
}
