import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Hotel,
  MapPin,
  Utensils,
  Car,
  X,
} from "lucide-react";
import { formatTourPrice, getTourById, toursData } from "../data/toursData";
import EnquiryForm from "../../../shared/components/EnquiryForm";
import Lightbox from "../../../shared/components/Lightbox";
import { destinationsData } from "../../destinations/data/destinationsData";

export default function ToursSingle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = getTourById(Number(id));
  const [openDay, setOpenDay] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!tour) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-3xl font-display font-semibold mb-3">Tour not found</h2>
          <button
            onClick={() => navigate("/tours")}
            className="bg-primary text-white px-6 py-3 rounded-full"
          >
            Back to tours
          </button>
        </div>
      </div>
    );
  }

  const relatedDestinations = destinationsData.filter((destination) =>
    tour.places.some((place) => place.toLowerCase() === destination.name.toLowerCase())
  );
  const relatedTours = toursData
    .filter((item) => item.id !== tour.id && item.categories.some((cat) => tour.categories.includes(cat)))
    .slice(0, 3);

  return (
    <div className="bg-sand pb-16">
      <div className="relative h-[52vh] min-h-[360px]">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 pb-12 text-white">
          <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            {tour.categories.join(" · ")}
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">{tour.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/90">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{tour.duration}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{tour.startLocation} → {tour.endLocation}</span>
            <span className="font-semibold">{formatTourPrice(tour.price)}</span>
          </div>
        </div>
        <button
          onClick={() => navigate("/tours")}
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-3">Tour overview</h2>
            <p className="text-gray-600 leading-relaxed">{tour.overview}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
              <p className="flex gap-2"><Hotel className="w-4 h-4 text-primary mt-0.5" />{tour.accommodation}</p>
              <p className="flex gap-2"><Car className="w-4 h-4 text-primary mt-0.5" />{tour.transport}</p>
              <p className="flex gap-2"><Utensils className="w-4 h-4 text-primary mt-0.5" />{tour.meals}</p>
              <p className="flex gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" />{tour.places.join(", ")}</p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-5">Day-by-day itinerary</h2>
            <div className="space-y-3">
              {tour.itinerary.map((item, index) => (
                <div key={item.day} className="border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenDay(openDay === index ? -1 : index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-forest">
                      Day {item.day} – {item.title}
                    </span>
                    {openDay === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDay === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      <p>{item.description}</p>
                      {item.overnight && (
                        <p className="mt-2 text-primary font-medium">Overnight: {item.overnight}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">Tour highlights</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {tour.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-3 text-forest">Included</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {tour.included.map((item) => (
                  <li key={item} className="flex gap-2"><Check className="w-4 h-4 text-primary" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-3 text-forest">Not included</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {tour.excluded.map((item) => (
                  <li key={item} className="flex gap-2"><X className="w-4 h-4 text-red-400" />{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tour.gallery.map((src, index) => (
                <button key={src + index} onClick={() => setLightboxIndex(index)} className="overflow-hidden rounded-2xl">
                  <img src={src} alt={`${tour.title} ${index + 1}`} className="h-36 w-full object-cover hover:scale-105 transition" />
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">Route</h2>
            <iframe
              title={`${tour.title} map`}
              src={`https://www.google.com/maps?q=${tour.mapQuery}&output=embed`}
              className="w-full h-80 rounded-2xl border-0"
              loading="lazy"
            />
          </section>

          {relatedDestinations.length > 0 && (
            <section>
              <h2 className="text-2xl font-display font-semibold text-forest mb-4">Destinations on this tour</h2>
              <div className="flex flex-wrap gap-3">
                {relatedDestinations.map((destination) => (
                  <Link
                    key={destination.slug}
                    to={`/destinations/${destination.slug}`}
                    className="bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-primary text-sm"
                  >
                    {destination.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">FAQs</h2>
            {tour.faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex justify-between text-left font-medium text-forest"
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaq === index && <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </section>
        </div>

        <aside className="space-y-6">
          <div id="book" className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
            <p className="text-sm text-gray-500">From</p>
            <p className="text-3xl font-display font-semibold text-forest mb-1">
              {formatTourPrice(tour.price)}
            </p>
            <p className="text-sm text-gray-500 mb-5">Private tour · {tour.rating}★ ({tour.reviews} reviews)</p>
            <EnquiryForm
              type="tour"
              contextTitle={tour.title}
              contextDetails={`Tour: ${tour.title}\nDuration: ${tour.duration}\nRoute: ${tour.startLocation} to ${tour.endLocation}\nPrice: ${formatTourPrice(tour.price)}`}
              submitLabel="Book / Enquire about this tour"
            />
          </div>
        </aside>
      </div>

      {relatedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold text-forest mb-5">Related tours</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedTours.map((item) => (
              <Link key={item.id} to={`/tours/${item.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-forest">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={tour.gallery.map((src, index) => ({ src, alt: `${tour.title} ${index + 1}` }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current - 1 + tour.gallery.length) % tour.gallery.length
            )
          }
          onNext={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current + 1) % tour.gallery.length
            )
          }
        />
      )}
    </div>
  );
}
