import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../../../shared/components/PageHero";
import { destinationsData } from "../../destinations/data/destinationsData";
import { TOUR_CATEGORIES } from "../../tours/data/toursData";
import { slImages } from "../../../data/images";
import { openMailto, openWhatsApp, saveEnquiry } from "../../../shared/utils/enquiry";

const hotelCategories = ["Guest house", "3 star", "4 star", "5 star / boutique", "Mix"];
const vehicleTypes = ["Car (1–3 people)", "Van (4–7 people)", "Minibus", "Luxury car"];
const budgets = ["Under $50 / day", "$50–80 / day", "$80–150 / day", "$150+ / day", "Flexible"];

export default function PlanYourTour() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    adults: 2,
    children: 0,
    days: 7,
    tourType: "Round Tours",
    budget: "Flexible",
    hotelCategory: "3 star",
    vehicleType: "Car (1–3 people)",
    airportPickup: "Yes",
    airportDropoff: "Yes",
    specialRequests: "",
  });
  const [destinations, setDestinations] = useState<string[]>(["Sigiriya", "Kandy", "Ella"]);
  const [sent, setSent] = useState<string | null>(null);

  const dayCount = useMemo(() => {
    if (!form.arrivalDate || !form.departureDate) return form.days;
    const start = new Date(form.arrivalDate);
    const end = new Date(form.departureDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / 86400000);
    return diff > 0 ? diff : form.days;
  }, [form.arrivalDate, form.departureDate, form.days]);

  const toggleDestination = (name: string) => {
    setDestinations((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "adults" || name === "children" || name === "days" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `Arrival: ${form.arrivalDate || "not set"}`,
      `Departure: ${form.departureDate || "not set"}`,
      `Days: ${dayCount}`,
      `Adults: ${form.adults}`,
      `Children: ${form.children}`,
      `Destinations: ${destinations.join(", ") || "not selected"}`,
      `Tour type: ${form.tourType}`,
      `Budget: ${form.budget}`,
      `Hotels: ${form.hotelCategory}`,
      `Vehicle: ${form.vehicleType}`,
      `Airport pickup: ${form.airportPickup}`,
      `Airport drop-off: ${form.airportDropoff}`,
      `Special requests: ${form.specialRequests || "none"}`,
    ].join("\n");

    const message = [
      "Hello TravelIn,",
      "",
      "I would like to request a custom Sri Lanka tour.",
      "",
      details,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
    ].join("\n");

    saveEnquiry({
      type: "custom",
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: details,
      contextTitle: "Custom Sri Lanka tour",
      contextDetails: details,
    });
    openWhatsApp(message);
    setSent(message);
  };

  return (
    <>
      <PageHero
        title="Plan Your Own Tour"
        subtitle="Tell us your dates, destinations and style. We will reply with a private itinerary and price."
        image={slImages.teaCountry}
        crumb="Plan Your Tour"
      />

      <section className="max-w-5xl mx-auto px-4 pb-20">
        {sent ? (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
            <h2 className="text-2xl font-display font-semibold mb-2">Request ready</h2>
            <p className="text-gray-600 mb-6">
              WhatsApp should have opened with your custom tour request. You can also email it to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => openWhatsApp(sent)} className="bg-[#25D366] text-white px-6 py-3 rounded-full">
                Open WhatsApp
              </button>
              <button
                onClick={() => openMailto("Custom Sri Lanka tour request", sent)}
                className="bg-primary text-white px-6 py-3 rounded-full"
              >
                Send by Email
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-display font-semibold text-forest mb-1">Your travel details</h2>
              <p className="text-gray-500 text-sm">We use this to build a day-by-day private itinerary.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Arrival date">
                <input type="date" name="arrivalDate" value={form.arrivalDate} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Departure date">
                <input type="date" name="departureDate" value={form.departureDate} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Adults">
                <input type="number" min={1} name="adults" value={form.adults} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Children">
                <input type="number" min={0} name="children" value={form.children} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Number of days">
                <input type="number" min={1} name="days" value={dayCount} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Tour type">
                <select name="tourType" value={form.tourType} onChange={handleChange} className={inputClass}>
                  {TOUR_CATEGORIES.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </Field>
              <Field label="Budget range">
                <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                  {budgets.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="Hotel category">
                <select name="hotelCategory" value={form.hotelCategory} onChange={handleChange} className={inputClass}>
                  {hotelCategories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="Vehicle type">
                <select name="vehicleType" value={form.vehicleType} onChange={handleChange} className={inputClass}>
                  {vehicleTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="Airport pickup">
                <select name="airportPickup" value={form.airportPickup} onChange={handleChange} className={inputClass}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>
              <Field label="Airport drop-off">
                <select name="airportDropoff" value={form.airportDropoff} onChange={handleChange} className={inputClass}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-3">Preferred destinations</h3>
              <p className="text-sm text-gray-500 mb-3">Select as many places as you like.</p>
              <div className="flex flex-wrap gap-2">
                {destinationsData.map((destination) => {
                  const selected = destinations.includes(destination.name);
                  return (
                    <button
                      type="button"
                      key={destination.slug}
                      onClick={() => toggleDestination(destination.name)}
                      className={`px-4 py-2 rounded-full text-sm border transition ${
                        selected
                          ? "bg-primary text-white border-primary"
                          : "bg-sand text-forest border-transparent hover:border-primary"
                      }`}
                    >
                      {destination.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Your name">
                <input name="name" required value={form.name} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Email">
                <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="WhatsApp / phone">
                <input name="phone" required value={form.phone} onChange={handleChange} className={inputClass} />
              </Field>
            </div>

            <Field label="Special requests">
              <textarea
                name="specialRequests"
                value={form.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="Dietary needs, honeymoon setup, child seats, temples to include..."
                className={inputClass}
              />
            </Field>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-[#0c5f59] transition"
            >
              Request Custom Tour
            </button>
          </form>
        )}
      </section>
    </>
  );
}

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-600 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
