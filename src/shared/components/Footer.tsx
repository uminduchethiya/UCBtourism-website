import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS } from "../constants/company";
import { slImages, localImages } from "../../data/images";
import { openMailto } from "../utils/enquiry";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    openMailto(
      "Newsletter signup",
      `Please add this email to the TravelIn newsletter: ${email}`
    );
    setEmail("");
  };

  const islandPhotos = [
    { src: slImages.sigiriya, alt: "Sigiriya" },
    { src: slImages.galleLighthouse, alt: "Galle lighthouse" },
    { src: slImages.teaCountry, alt: "Tea country" },
    { src: localImages.beachTour, alt: "Stilt fishermen" },
    { src: slImages.kandyTemple, alt: "Temple of the Tooth" },
    { src: slImages.arugamBay, alt: "Arugam Bay" },
  ];

  return (
    <footer className="relative mt-16 text-white" style={{ backgroundColor: "#14343a" }}>
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white">
                Plan your Sri Lanka journey
              </h3>
              <p className="mt-2 text-sm" style={{ color: "#d7e3e4" }}>
                Get seasonal advice, tour ideas and trip updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full w-full sm:w-72 outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#ffffff",
                }}
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                style={{ backgroundColor: "#0f766e", color: "#ffffff" }}
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="text-white">TRAVEL</span>
              <span style={{ color: "#c4a35a" }}>IN</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#d7e3e4" }}>
              {COMPANY.legalName} offers private Sri Lanka tours, custom itineraries
              and professional drivers for airport transfers, day tours and
              multi-day journeys.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition hover:underline"
                    style={{ color: "#d7e3e4" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-5">Get in touch</h4>
            <div className="space-y-4 text-sm" style={{ color: "#d7e3e4" }}>
              <a href={`tel:${COMPANY.phoneTel}`} className="flex items-start gap-3 hover:text-white">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <Phone className="w-4 h-4" />
                </span>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:text-white">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <Mail className="w-4 h-4" />
                </span>
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <MapPin className="w-4 h-4" />
                </span>
                {COMPANY.location}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-5">From the island</h4>
            <div className="grid grid-cols-3 gap-2">
              {islandPhotos.map((image) => (
                <Link
                  key={image.alt}
                  to="/gallery"
                  className="aspect-square rounded-lg overflow-hidden bg-black/20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div
          className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
          style={{ color: "#c5d4d6" }}
        >
          <p>
            © {new Date().getFullYear()} {COMPANY.brand} · {COMPANY.legalName}. All rights reserved.
          </p>
          <p>Private driver tours across Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
