import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDestinationBySlug, destinationsData } from "../data/destinationsData";
import { getTourById } from "../../tours/data/toursData";
import Lightbox from "../../../shared/components/Lightbox";

export default function DestinationSingle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const destination = getDestinationBySlug(slug || "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!destination) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <button onClick={() => navigate("/destinations")} className="bg-primary text-white px-6 py-3 rounded-full">
          Back to destinations
        </button>
      </div>
    );
  }

  const relatedTours = destination.tourIds
    .map((id) => getTourById(id))
    .filter((tour): tour is NonNullable<typeof tour> => Boolean(tour));
  const nearby = destinationsData.filter((item) => destination.nearby.includes(item.slug));

  return (
    <div className="pb-16">
      <div className="relative h-[50vh] min-h-[340px]">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 pb-12 text-white">
          <p className="text-secondary uppercase tracking-[0.2em] text-xs mb-2">{destination.region}</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold">{destination.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-semibold text-forest mb-3">About {destination.name}</h2>
            <p className="text-gray-600 leading-relaxed">{destination.intro}</p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold mb-3">Top attractions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {destination.attractions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold mb-3">Best things to do</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {destination.thingsToDo.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold mb-3">Photo gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {destination.gallery.map((src, index) => (
                <button key={src} onClick={() => setLightboxIndex(index)} className="overflow-hidden rounded-2xl">
                  <img src={src} alt="" className="h-32 w-full object-cover hover:scale-105 transition" />
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="bg-sand rounded-3xl p-6">
            <p className="text-sm text-gray-500">Best time to visit</p>
            <p className="font-medium text-forest mt-1">{destination.bestTime}</p>
          </div>
          <div className="bg-white rounded-3xl p-6">
            <p className="text-sm text-gray-500">Recommended stay</p>
            <p className="font-medium text-forest mt-1">{destination.recommendedDays}</p>
          </div>
          <Link
            to={`/plan-your-tour`}
            className="block text-center bg-primary text-white py-3 rounded-full font-semibold"
          >
            Add {destination.name} to a custom tour
          </Link>
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-display font-semibold text-forest mb-5">Nearby destinations</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {nearby.map((item) => (
              <Link key={item.slug} to={`/destinations/${item.slug}`} className="relative h-48 rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-display">{item.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold text-forest mb-5">Related tours</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedTours.map((tour) => (
              <Link key={tour.id} to={`/tours/${tour.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img src={tour.image} alt={tour.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-forest">{tour.title}</h3>
                  <p className="text-sm text-gray-500">{tour.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={destination.gallery.map((src, index) => ({ src, alt: `${destination.name} ${index + 1}` }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current - 1 + destination.gallery.length) % destination.gallery.length
            )
          }
          onNext={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current + 1) % destination.gallery.length
            )
          }
        />
      )}
    </div>
  );
}
