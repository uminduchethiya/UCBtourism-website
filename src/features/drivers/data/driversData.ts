import { photos } from "../../../data/images";

export interface Driver {
  id: number;
  name: string;
  photo: string;
  experienceYears: number;
  languages: string[];
  vehicle: string;
  intro: string;
  specialities: string[];
  services: string[];
  rating: number;
  reviews: number;
  testimonial: string;
}

export const driversData: Driver[] = [
  {
    id: 1,
    name: "Nimal Perera",
    photo: photos.driver1,
    experienceYears: 14,
    languages: ["English", "Sinhala", "Basic German"],
    vehicle: "Toyota KDH van / Premio car",
    intro:
      "Nimal has been guiding families and couples around Sri Lanka since 2012. He is calm in traffic, careful with timings, and especially strong on the Cultural Triangle and hill country.",
    specialities: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella"],
    services: ["Airport transfers", "Day tours", "Multi-day round tours", "Hotel booking help"],
    rating: 4.9,
    reviews: 86,
    testimonial:
      "Nimal made our 8-day trip effortless. He knew when to start for Sigiriya and found excellent lunch stops for the children.",
  },
  {
    id: 2,
    name: "Sunil Fernando",
    photo: photos.driver2,
    experienceYears: 11,
    languages: ["English", "Sinhala", "Tamil"],
    vehicle: "Toyota Axio / KDH van",
    intro:
      "Sunil specialises in wildlife and the south. He works regularly with trusted safari jeep drivers in Yala and Udawalawe and knows the quieter beach hotels around Galle and Mirissa.",
    specialities: ["Yala", "Udawalawe", "Galle", "Mirissa"],
    services: ["Safari logistics", "Airport transfers", "Beach holidays", "Whale-watching drop-offs"],
    rating: 4.8,
    reviews: 64,
    testimonial:
      "We saw elephants in Udawalawe and a leopard in Yala. Sunil organised both jeeps and never rushed us.",
  },
  {
    id: 3,
    name: "Kasun Jayawardena",
    photo: photos.driver3,
    experienceYears: 9,
    languages: ["English", "Sinhala", "Basic French"],
    vehicle: "Honda Fit Shuttle / Premio",
    intro:
      "Kasun is a favourite with couples and small groups who want a friendly, well-presented driver and a clean car. He is excellent on honeymoon routes and photography stops.",
    specialities: ["Galle", "Ella", "Kandy", "Mirissa"],
    services: ["Honeymoon tours", "Day tours", "Airport pickup", "Custom itineraries"],
    rating: 5,
    reviews: 47,
    testimonial:
      "Professional, punctual and genuinely kind. Kasun felt like a local friend showing us his country.",
  },
  {
    id: 4,
    name: "Ravi de Silva",
    photo: photos.driver4,
    experienceYears: 16,
    languages: ["English", "Sinhala", "Tamil"],
    vehicle: "Toyota KDH high-roof van",
    intro:
      "Ravi is our most experienced family and group driver. The van is spacious, he carries child seats on request, and he knows how to keep long driving days comfortable.",
    specialities: ["Round tours", "Family travel", "Anuradhapura", "Trincomalee"],
    services: ["Family vans", "Multi-day tours", "Airport transfers", "East-coast routes"],
    rating: 4.9,
    reviews: 102,
    testimonial:
      "Three adults and two children in one van for a week — Ravi handled everything with patience and humour.",
  },
  {
    id: 5,
    name: "Dilshan Bandara",
    photo: photos.driver5,
    experienceYears: 8,
    languages: ["English", "Sinhala"],
    vehicle: "Toyota Premio / Prius",
    intro:
      "Dilshan is a strong choice for travellers who want a knowledgeable cultural driver. He grew up near Kandy and explains temples, festivals and local etiquette clearly.",
    specialities: ["Kandy", "Sigiriya", "Polonnaruwa", "Anuradhapura"],
    services: ["Cultural day tours", "Airport transfers", "Temple visits", "Custom heritage routes"],
    rating: 4.8,
    reviews: 39,
    testimonial:
      "Dilshan’s knowledge of the ancient cities turned a simple transfer into the highlight of our trip.",
  },
];

export const getDriverById = (id: number) =>
  driversData.find((driver) => driver.id === id);
