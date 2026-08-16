import { localImages, photos, slImages } from "../../../data/images";

export const TOUR_CATEGORIES = [
  "Cultural Tours",
  "Wildlife Tours",
  "Beach Tours",
  "Adventure Tours",
  "Honeymoon Tours",
  "Family Tours",
  "Day Tours",
  "Round Tours",
  "Luxury Tours",
  "Budget Tours",
] as const;

export type TourCategory = (typeof TOUR_CATEGORIES)[number];

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnight?: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface Tour {
  id: number;
  title: string;
  image: string;
  gallery: string[];
  duration: string;
  durationDays: number;
  startLocation: string;
  endLocation: string;
  price: number | null;
  shortDescription: string;
  overview: string;
  places: string[];
  accommodation: string;
  transport: string;
  meals: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  categories: TourCategory[];
  itinerary: ItineraryDay[];
  faqs: TourFaq[];
  mapQuery: string;
  rating: number;
  reviews: number;
}

const defaultFaqs: TourFaq[] = [
  {
    question: "Can this itinerary be customised?",
    answer:
      "Yes. We can adjust days, hotels, and activities to match your arrival time, budget, and interests.",
  },
  {
    question: "Is airport pickup included?",
    answer:
      "Most multi-day tours include private airport pickup and drop-off. Day tours can add this on request.",
  },
  {
    question: "What is the payment process?",
    answer:
      "After we confirm availability we send a simple booking summary. A small deposit secures the tour and the balance can be paid before or during the trip.",
  },
];

export const toursData: Tour[] = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    image: slImages.sigiriya,
    gallery: [slImages.sigiriya, localImages.sigiriya, slImages.dambulla, slImages.polonnaruwa, slImages.anuradhapura],
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    startLocation: "Colombo Airport",
    endLocation: "Kandy",
    price: 680,
    shortDescription:
      "Discover Sigiriya, Polonnaruwa, Anuradhapura and Kandy with a private driver-guide.",
    overview:
      "A focused cultural journey through Sri Lanka’s ancient cities and living heritage. Climb Sigiriya Rock, walk among royal ruins, visit sacred temples, and finish in Kandy beside the Temple of the Tooth.",
    places: ["Sigiriya", "Dambulla", "Polonnaruwa", "Anuradhapura", "Kandy"],
    accommodation: "4 nights in well-reviewed 3–4 star hotels, double occupancy",
    transport: "Private air-conditioned car or van with driver-guide",
    meals: "Daily breakfast included",
    highlights: [
      "Sunrise or morning climb of Sigiriya Rock Fortress",
      "Dambulla Cave Temple",
      "Polonnaruwa ancient city by bicycle or tuk-tuk",
      "Sacred city of Anuradhapura",
      "Temple of the Tooth Relic in Kandy",
    ],
    included: [
      "Private vehicle and English-speaking driver",
      "Airport pickup",
      "4 nights hotel accommodation",
      "Daily breakfast",
      "Fuel, parking and highway tolls",
    ],
    excluded: [
      "Entrance tickets",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
    ],
    categories: ["Cultural Tours", "Round Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Sigiriya",
        description:
          "Meet your driver at Bandaranaike International Airport and travel to the Cultural Triangle. Optional stop at a pineapple stall or village craft shop. Evening village walk or tank sunset near Sigiriya.",
        overnight: "Sigiriya / Habarana",
      },
      {
        day: 2,
        title: "Sigiriya → Polonnaruwa → Sigiriya",
        description:
          "Climb Sigiriya Rock in the cooler morning hours. After lunch, explore the UNESCO city of Polonnaruwa — royal palaces, Buddha statues and the Gal Vihara rock sculptures.",
        overnight: "Sigiriya / Habarana",
      },
      {
        day: 3,
        title: "Sigiriya → Anuradhapura → Sigiriya",
        description:
          "Full day in Anuradhapura visiting Ruwanwelisaya, Sri Maha Bodhi, Isurumuniya and the ancient tanks. Return to Sigiriya in the evening.",
        overnight: "Sigiriya / Habarana",
      },
      {
        day: 4,
        title: "Sigiriya → Dambulla → Kandy",
        description:
          "Visit Dambulla Cave Temple, then drive through spice-growing countryside to Kandy. Evening cultural dance show and lakeside stroll.",
        overnight: "Kandy",
      },
      {
        day: 5,
        title: "Kandy city & Temple of the Tooth",
        description:
          "Morning visit to the Temple of the Tooth Relic, Royal Botanical Garden in Peradeniya, and a gem or handicraft stop. Tour ends in Kandy or continues as a private transfer.",
        overnight: "Kandy or onward transfer",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Sigiriya+Sri+Lanka",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    title: "Classic Sri Lanka Round Tour",
    image: slImages.ellaNineArches,
    gallery: [photos.ellaTrain, localImages.sigiriya, photos.teaCountry, photos.safari, localImages.galleFort],
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    startLocation: "Colombo Airport",
    endLocation: "Colombo Airport",
    price: 1180,
    shortDescription:
      "The complete island circuit: ancient cities, hill country, safari and the south coast.",
    overview:
      "Our most popular private round tour. You travel with one driver from airport to airport, covering Sigiriya, Kandy, Nuwara Eliya, Ella, Yala and Galle at a comfortable pace.",
    places: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle", "Mirissa"],
    accommodation: "7 nights in 3–4 star hotels and a safari lodge",
    transport: "Private AC car or van for the full circuit",
    meals: "Daily breakfast; safari jeep arranged separately",
    highlights: [
      "Sigiriya and Dambulla",
      "Kandy Temple of the Tooth",
      "Tea country and scenic train option to Ella",
      "Yala National Park safari",
      "Galle Fort sunset walk",
    ],
    included: [
      "Airport pickup and drop-off",
      "Private vehicle and driver-guide",
      "7 nights accommodation",
      "Daily breakfast",
      "Fuel and parking",
    ],
    excluded: [
      "Train tickets (we book on request)",
      "Safari jeep and park tickets",
      "Entrance fees",
      "Lunches, dinners and drinks",
    ],
    categories: ["Round Tours", "Family Tours", "Cultural Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Sigiriya",
        description:
          "Private pickup and transfer to Sigiriya. Rest after your flight and enjoy a village dinner or tank-side sunset.",
        overnight: "Sigiriya",
      },
      {
        day: 2,
        title: "Sigiriya → Kandy",
        description:
          "Morning Sigiriya climb and Dambulla Cave Temple, then a scenic drive to Kandy with a spice garden stop.",
        overnight: "Kandy",
      },
      {
        day: 3,
        title: "Kandy → Nuwara Eliya",
        description:
          "Temple of the Tooth, then climb into tea country via Ramboda Falls. Tea factory visit and colonial town walk.",
        overnight: "Nuwara Eliya",
      },
      {
        day: 4,
        title: "Nuwara Eliya → Ella",
        description:
          "Optional scenic train from Nanu Oya to Ella. Little Adam’s Peak or Nine Arches Bridge in the afternoon.",
        overnight: "Ella",
      },
      {
        day: 5,
        title: "Ella → Yala",
        description:
          "Descend from the hills through Rawana Falls and countryside to the southeast. Evening at a safari lodge.",
        overnight: "Yala / Tissamaharama",
      },
      {
        day: 6,
        title: "Yala → Galle / Mirissa",
        description:
          "Early morning Yala safari in search of leopards, elephants and birds. Continue to the south coast.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 7,
        title: "Galle Fort & south coast",
        description:
          "Walk the ramparts of Galle Fort, visit a turtle hatchery or relax on Unawatuna or Mirissa beach.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 8,
        title: "South coast → Airport",
        description:
          "Leisurely breakfast and private transfer to Colombo Airport, timed to your departure flight.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Sri+Lanka",
    rating: 4.9,
    reviews: 214,
  },
  {
    id: 3,
    title: "Yala & Udawalawe Wildlife Safari",
    image: slImages.leopard,
    gallery: [localImages.wildlife, photos.safari, photos.elephant, photos.leopard, photos.teaCountry],
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    startLocation: "Colombo / Airport",
    endLocation: "South Coast or Airport",
    price: 540,
    shortDescription:
      "Two of Sri Lanka’s best national parks — leopards in Yala and elephant herds in Udawalawe.",
    overview:
      "A short wildlife-focused tour for travellers who want safari time without a long island circuit. Stay near the parks, take morning and afternoon jeep safaris, and travel with a driver who knows the best gates and timing.",
    places: ["Udawalawe", "Yala", "Tissamaharama"],
    accommodation: "3 nights in safari lodges or eco hotels",
    transport: "Private vehicle plus 4x4 safari jeeps",
    meals: "Daily breakfast; picnic breakfast on safari days if requested",
    highlights: [
      "Udawalawe elephant gathering",
      "Yala leopard safari",
      "Birdlife and crocodile spotting",
      "Optional Elephant Transit Home visit",
    ],
    included: [
      "Private intercity transfers",
      "3 nights lodge accommodation",
      "Daily breakfast",
      "Safari jeep booking assistance",
    ],
    excluded: [
      "Park entrance fees",
      "Safari jeep hire (quoted separately)",
      "Lunches and dinners",
    ],
    categories: ["Wildlife Tours", "Adventure Tours"],
    itinerary: [
      {
        day: 1,
        title: "Colombo → Udawalawe",
        description:
          "Drive south through countryside to Udawalawe. Afternoon safari among open grasslands known for large elephant herds.",
        overnight: "Udawalawe",
      },
      {
        day: 2,
        title: "Udawalawe → Yala",
        description:
          "Optional morning visit to the Elephant Transit Home, then continue to Yala. Evening at a lodge near the park.",
        overnight: "Yala",
      },
      {
        day: 3,
        title: "Yala National Park",
        description:
          "Full-day or morning-and-afternoon jeep safaris in Yala Block 1, looking for leopards, sloth bears, elephants and water birds.",
        overnight: "Yala",
      },
      {
        day: 4,
        title: "Yala → Airport or beach",
        description:
          "Breakfast and transfer to Colombo Airport, or continue to Mirissa, Galle or Tangalle for beach time.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Yala+National+Park+Sri+Lanka",
    rating: 4.8,
    reviews: 96,
  },
  {
    id: 4,
    title: "South Coast Beach Escape",
    image: slImages.mirissa,
    gallery: [localImages.beachTour, localImages.galleFort, localImages.unawatuna, localImages.koggala, photos.whale],
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    startLocation: "Colombo Airport",
    endLocation: "Galle / Airport",
    price: 520,
    shortDescription:
      "Galle Fort, Mirissa beaches, optional whale watching and slow coastal days.",
    overview:
      "A relaxed private beach holiday along Sri Lanka’s south coast. Stay near Galle or Mirissa, explore the Dutch fort, and add whale watching, surfing or a lagoon boat trip when you want activity.",
    places: ["Galle", "Mirissa", "Unawatuna", "Koggala"],
    accommodation: "4 nights in a beach hotel or boutique guesthouse",
    transport: "Private AC car for transfers and day trips",
    meals: "Daily breakfast",
    highlights: [
      "Galle Fort ramparts at sunset",
      "Mirissa beach time",
      "Optional whale watching",
      "Koggala lagoon or stilt fishermen viewpoint",
    ],
    included: [
      "Airport pickup",
      "4 nights beach accommodation",
      "Daily breakfast",
      "Private vehicle for listed transfers",
    ],
    excluded: ["Whale watching tickets", "Water sports", "Lunches and dinners"],
    categories: ["Beach Tours", "Honeymoon Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Galle / Mirissa",
        description:
          "Coastal or expressway transfer to your beach hotel. Afternoon free to swim and settle in.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 2,
        title: "Galle Fort & Unawatuna",
        description:
          "Guided walk through Galle Fort’s streets, cafés and lighthouse, then beach time at Unawatuna.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 3,
        title: "Mirissa free day or whale watching",
        description:
          "Optional dawn whale-watching boat, or a lazy beach day with seafood lunch.",
        overnight: "Mirissa",
      },
      {
        day: 4,
        title: "Koggala lagoon & south coast villages",
        description:
          "Boat ride on Koggala lagoon, cinnamon island stop, and photo time at coastal viewpoints.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 5,
        title: "South coast → Airport",
        description: "Breakfast and private transfer timed to your flight.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Mirissa+Sri+Lanka",
    rating: 4.8,
    reviews: 87,
  },
  {
    id: 5,
    title: "Ella & Hill Country Adventure",
    image: slImages.teaCountry,
    gallery: [photos.teaCountry, photos.ellaTrain, localImages.ambuluwawa, photos.waterfall, localImages.landscape],
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    startLocation: "Kandy or Colombo",
    endLocation: "Ella or South Coast",
    price: 390,
    shortDescription:
      "Tea estates, waterfalls, Little Adam’s Peak and the famous Ella train ride.",
    overview:
      "A short highland adventure through Nuwara Eliya and Ella. Walk tea fields, ride the scenic train, and hike to viewpoints above the clouds.",
    places: ["Nuwara Eliya", "Ella", "Ambuluwawa"],
    accommodation: "3 nights in hill-country hotels or Ella eco lodges",
    transport: "Private vehicle plus optional train tickets",
    meals: "Daily breakfast",
    highlights: [
      "Ramboda Falls and tea factory",
      "Scenic train to Ella",
      "Nine Arches Bridge",
      "Little Adam’s Peak hike",
    ],
    included: [
      "Private driver and vehicle",
      "3 nights accommodation",
      "Daily breakfast",
      "Train booking assistance",
    ],
    excluded: ["Train tickets", "Entrance fees", "Lunches and dinners"],
    categories: ["Adventure Tours", "Family Tours"],
    itinerary: [
      {
        day: 1,
        title: "Kandy → Nuwara Eliya",
        description:
          "Climb into the highlands via Ramboda. Tea factory tour and colonial town evening.",
        overnight: "Nuwara Eliya",
      },
      {
        day: 2,
        title: "Nuwara Eliya → Ella",
        description:
          "Morning train or mountain drive to Ella. Afternoon at Nine Arches Bridge.",
        overnight: "Ella",
      },
      {
        day: 3,
        title: "Ella hiking day",
        description:
          "Sunrise hike to Little Adam’s Peak and optional Ravana Falls or Ella Rock.",
        overnight: "Ella",
      },
      {
        day: 4,
        title: "Ella onward",
        description:
          "Depart for the south coast, Udawalawe, or return toward Colombo.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Ella+Sri+Lanka",
    rating: 4.9,
    reviews: 142,
  },
  {
    id: 6,
    title: "Romantic Sri Lanka Honeymoon",
    image: slImages.unawatuna,
    gallery: [photos.couple, photos.luxury, localImages.unawatuna, photos.teaCountry, localImages.sigiriya],
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    startLocation: "Colombo Airport",
    endLocation: "Colombo Airport",
    price: 1450,
    shortDescription:
      "A slower, more private itinerary with boutique stays, tea country and a beach finale.",
    overview:
      "Designed for couples who want culture and coastline without rushing. Private transfers, carefully chosen hotels, and time to enjoy each place together.",
    places: ["Sigiriya", "Kandy", "Nuwara Eliya", "Galle", "Mirissa"],
    accommodation: "6 nights in boutique and 4–5 star hotels",
    transport: "Private car with experienced couple-friendly driver",
    meals: "Daily breakfast; one special dinner arranged on request",
    highlights: [
      "Private Sigiriya visit",
      "Kandy lake evening",
      "Tea-country stay",
      "Galle Fort and beach days",
    ],
    included: [
      "Airport pickup and drop-off",
      "Private vehicle",
      "6 nights boutique accommodation",
      "Daily breakfast",
      "Flower decoration or cake on request",
    ],
    excluded: ["Entrance tickets", "Romantic dinners unless requested", "Spa treatments"],
    categories: ["Honeymoon Tours", "Luxury Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Sigiriya",
        description: "Gentle transfer and rest at a quiet hotel near the rock.",
        overnight: "Sigiriya",
      },
      {
        day: 2,
        title: "Sigiriya → Kandy",
        description: "Morning climb or Pidurangala viewpoint, then a scenic drive to Kandy.",
        overnight: "Kandy",
      },
      {
        day: 3,
        title: "Kandy → Nuwara Eliya",
        description: "Temple visit and tea-country drive with waterfall stops.",
        overnight: "Nuwara Eliya",
      },
      {
        day: 4,
        title: "Nuwara Eliya leisure",
        description: "Lake Gregory, tea tasting, or a private estate walk.",
        overnight: "Nuwara Eliya",
      },
      {
        day: 5,
        title: "Hills → Galle / Mirissa",
        description: "Descend to the coast for sunset on the ramparts or beach.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 6,
        title: "South coast free day",
        description: "Beach time, spa, or a private boat at sunset.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 7,
        title: "Coast → Airport",
        description: "Private transfer for your departure.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Galle+Fort+Sri+Lanka",
    rating: 5,
    reviews: 64,
  },
  {
    id: 7,
    title: "Family Sri Lanka Discovery",
    image: slImages.pinnawala,
    gallery: [photos.family, photos.elephant, localImages.galleFort, localImages.sigiriya, photos.beach],
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    startLocation: "Colombo Airport",
    endLocation: "Colombo Airport",
    price: 890,
    shortDescription:
      "A child-friendly mix of animals, beaches, short walks and comfortable hotels.",
    overview:
      "Paced for families. We keep driving days reasonable, choose hotels with pools where possible, and include elephants, a gentle cultural stop and beach time.",
    places: ["Pinnawala", "Kandy", "Udawalawe", "Galle"],
    accommodation: "5 nights in family rooms or connecting rooms on request",
    transport: "Private van with child seats available on request",
    meals: "Daily breakfast",
    highlights: [
      "Pinnawala or Udawalawe elephants",
      "Kandy temple and lake",
      "Galle Fort ice-cream walk",
      "South-coast beach afternoon",
    ],
    included: [
      "Airport transfers",
      "Private van and driver",
      "5 nights family accommodation",
      "Daily breakfast",
    ],
    excluded: ["Entrance fees", "Child seats if not requested in advance", "Lunches and dinners"],
    categories: ["Family Tours", "Round Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Kandy via Pinnawala",
        description: "Elephant orphanage or riverside stop, then Kandy hotel with pool.",
        overnight: "Kandy",
      },
      {
        day: 2,
        title: "Kandy city",
        description: "Temple of the Tooth, botanical garden, and an easy lake walk.",
        overnight: "Kandy",
      },
      {
        day: 3,
        title: "Kandy → Udawalawe",
        description: "Scenic drive south. Optional afternoon safari.",
        overnight: "Udawalawe",
      },
      {
        day: 4,
        title: "Udawalawe → Galle",
        description: "Morning elephant safari, then continue to the coast.",
        overnight: "Galle",
      },
      {
        day: 5,
        title: "Galle Fort & beach",
        description: "Fort walls, lighthouse photos, and swimming time.",
        overnight: "Galle",
      },
      {
        day: 6,
        title: "Galle → Airport",
        description: "Transfer timed to your flight, with a snack stop on the way.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Kandy+Sri+Lanka",
    rating: 4.8,
    reviews: 73,
  },
  {
    id: 8,
    title: "Sigiriya & Dambulla Day Tour",
    image: slImages.sigiriya,
    gallery: [localImages.sigiriya, photos.ruins, localImages.culture, photos.kandyTemple],
    duration: "1 Day",
    durationDays: 1,
    startLocation: "Colombo / Negombo / Airport",
    endLocation: "Same as start",
    price: 95,
    shortDescription:
      "A full-day private trip to Sigiriya Rock and Dambulla Cave Temple.",
    overview:
      "Leave the west coast early, climb Sigiriya, visit Dambulla’s cave temples, and return the same evening with your own driver.",
    places: ["Sigiriya", "Dambulla"],
    accommodation: "Day tour — no overnight stay",
    transport: "Private AC car, approximately 8–10 hours including driving",
    meals: "Not included; we recommend good lunch stops",
    highlights: [
      "Sigiriya Rock Fortress",
      "Dambulla Cave Temple",
      "Village or spice-garden stop",
    ],
    included: ["Private vehicle and driver", "Fuel and parking", "Bottled water"],
    excluded: ["Entrance tickets", "Lunch", "Guide inside the sites unless requested"],
    categories: ["Day Tours", "Cultural Tours", "Budget Tours"],
    itinerary: [
      {
        day: 1,
        title: "West coast → Sigiriya → Dambulla → return",
        description:
          "Early pickup, Sigiriya climb, lunch, Dambulla Cave Temple, and return transfer in the evening.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Sigiriya+Sri+Lanka",
    rating: 4.7,
    reviews: 188,
  },
  {
    id: 9,
    title: "Kandy Cultural Day Tour",
    image: slImages.kandyTemple,
    gallery: [localImages.kandy, photos.kandyTemple, localImages.buddha, localImages.culture],
    duration: "1 Day",
    durationDays: 1,
    startLocation: "Colombo / Negombo",
    endLocation: "Same as start",
    price: 75,
    shortDescription:
      "Temple of the Tooth, Peradeniya Gardens and the hills around Kandy in one day.",
    overview:
      "A classic day tour from Colombo or Negombo into Sri Lanka’s hill capital. Ideal if you have only one free day before a beach stay or departure.",
    places: ["Kandy", "Peradeniya"],
    accommodation: "Day tour — no overnight stay",
    transport: "Private AC car",
    meals: "Not included",
    highlights: [
      "Temple of the Tooth Relic",
      "Royal Botanical Garden",
      "Kandy lake and viewpoint",
    ],
    included: ["Private vehicle and driver", "Fuel and parking"],
    excluded: ["Entrance tickets", "Lunch", "Cultural show tickets"],
    categories: ["Day Tours", "Cultural Tours", "Budget Tours"],
    itinerary: [
      {
        day: 1,
        title: "Colombo → Kandy → return",
        description:
          "Morning drive to Kandy, temple visit, botanical garden, optional cultural show, and evening return.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Kandy+Sri+Lanka",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 10,
    title: "Luxury Ceylon Journey",
    image: slImages.galleLighthouse,
    gallery: [photos.luxury, photos.hotel, localImages.sigiriya, photos.teaCountry, localImages.galleFort],
    duration: "10 Days / 9 Nights",
    durationDays: 10,
    startLocation: "Colombo Airport",
    endLocation: "Colombo Airport",
    price: null,
    shortDescription:
      "A refined private itinerary with luxury hotels, slower pacing and special experiences.",
    overview:
      "For travellers who want Sri Lanka at a premium standard. We combine heritage, tea country, wildlife and the coast with hand-picked hotels and a discreet driver-guide.",
    places: ["Sigiriya", "Kandy", "Nuwara Eliya", "Yala", "Galle", "Mirissa"],
    accommodation: "9 nights in 5-star and luxury boutique hotels",
    transport: "Premium private vehicle with senior driver-guide",
    meals: "Daily breakfast; selected dinners on request",
    highlights: [
      "Luxury lodge near Sigiriya",
      "Tea-country estate stay",
      "Private safari arrangements",
      "Galle Fort boutique hotel",
    ],
    included: [
      "Airport meet and assist",
      "Premium private vehicle",
      "9 nights luxury accommodation",
      "Daily breakfast",
      "24/7 trip support",
    ],
    excluded: ["International flights", "Some entrance fees", "Alcohol and spa"],
    categories: ["Luxury Tours", "Round Tours", "Honeymoon Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Colombo or Negombo",
        description: "Meet and assist, then a quiet first night near the airport or in Colombo.",
        overnight: "Colombo / Negombo",
      },
      {
        day: 2,
        title: "West coast → Sigiriya",
        description: "Transfer to a luxury lodge. Evening village or tank experience.",
        overnight: "Sigiriya",
      },
      {
        day: 3,
        title: "Sigiriya at leisure",
        description: "Private rock climb or Pidurangala, spa time, and a countryside dinner.",
        overnight: "Sigiriya",
      },
      {
        day: 4,
        title: "Sigiriya → Kandy",
        description: "Dambulla and a refined stay overlooking Kandy lake or the hills.",
        overnight: "Kandy",
      },
      {
        day: 5,
        title: "Kandy → Nuwara Eliya",
        description: "Tea-country drive to an estate bungalow or highland luxury hotel.",
        overnight: "Nuwara Eliya",
      },
      {
        day: 6,
        title: "Hill country leisure",
        description: "Private estate walk, tea tasting, and optional train segment.",
        overnight: "Nuwara Eliya or Ella",
      },
      {
        day: 7,
        title: "Hills → Yala",
        description: "Arrive at a luxury safari camp. Afternoon or evening game drive.",
        overnight: "Yala",
      },
      {
        day: 8,
        title: "Yala → Galle",
        description: "Morning safari, then a boutique hotel inside or near Galle Fort.",
        overnight: "Galle",
      },
      {
        day: 9,
        title: "Galle & south coast",
        description: "Fort galleries, beach club, or a private sunset cruise.",
        overnight: "Galle or Mirissa",
      },
      {
        day: 10,
        title: "Coast → Airport",
        description: "Timed luxury transfer to your departure flight.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Sri+Lanka",
    rating: 5,
    reviews: 41,
  },
  {
    id: 11,
    title: "Budget Sri Lanka Highlights",
    image: slImages.anuradhapura,
    gallery: [localImages.anuradhapura, localImages.sigiriya, localImages.kandy, localImages.beachTour],
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    startLocation: "Colombo Airport",
    endLocation: "Colombo Airport",
    price: 420,
    shortDescription:
      "A simple private-driver circuit covering the must-see places on a sensible budget.",
    overview:
      "See Sigiriya, Kandy, Ella and the south coast without luxury pricing. Clean hotels, a private vehicle, and an honest itinerary that still feels like a proper Sri Lanka trip.",
    places: ["Sigiriya", "Kandy", "Ella", "Galle"],
    accommodation: "5 nights in clean 2–3 star hotels and guesthouses",
    transport: "Private car or van",
    meals: "Daily breakfast",
    highlights: [
      "Sigiriya or Pidurangala",
      "Kandy temple",
      "Ella viewpoints",
      "Galle Fort",
    ],
    included: [
      "Airport pickup and drop-off",
      "Private driver and vehicle",
      "5 nights budget-friendly hotels",
      "Daily breakfast",
    ],
    excluded: ["Entrance tickets", "Train tickets", "Lunches and dinners"],
    categories: ["Budget Tours", "Round Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Sigiriya",
        description: "Direct transfer and rest. Optional village walk.",
        overnight: "Sigiriya",
      },
      {
        day: 2,
        title: "Sigiriya → Kandy",
        description: "Rock climb or Pidurangala, Dambulla, then Kandy.",
        overnight: "Kandy",
      },
      {
        day: 3,
        title: "Kandy → Ella",
        description: "Hill-country drive with tea and waterfall stops.",
        overnight: "Ella",
      },
      {
        day: 4,
        title: "Ella sightseeing",
        description: "Nine Arches Bridge and Little Adam’s Peak.",
        overnight: "Ella",
      },
      {
        day: 5,
        title: "Ella → Galle",
        description: "Descend to the coast and walk Galle Fort.",
        overnight: "Galle",
      },
      {
        day: 6,
        title: "Galle → Airport",
        description: "Morning free and airport transfer.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Sri+Lanka",
    rating: 4.6,
    reviews: 119,
  },
  {
    id: 12,
    title: "East Coast & Arugam Bay",
    image: slImages.arugamBay,
    gallery: [localImages.arugamBay, localImages.beachMemory, photos.surf, photos.beach, photos.temple],
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    startLocation: "Colombo / Airport",
    endLocation: "Colombo / Airport",
    price: 610,
    shortDescription:
      "Trincomalee temples and beaches, then surf culture and lagoons at Arugam Bay.",
    overview:
      "Best from May to September, when the east coast is at its calmest. Combine sacred Koneswaram, Nilaveli or Uppuveli beaches, and the laid-back surf town of Arugam Bay.",
    places: ["Trincomalee", "Arugam Bay"],
    accommodation: "4 nights in beach hotels and surf lodges",
    transport: "Private vehicle for the full east-coast transfer",
    meals: "Daily breakfast",
    highlights: [
      "Koneswaram Temple",
      "Nilaveli / Uppuveli beach",
      "Arugam Bay surf and lagoon",
      "Optional Pottuvil lagoon safari",
    ],
    included: [
      "Private vehicle and driver",
      "4 nights accommodation",
      "Daily breakfast",
    ],
    excluded: ["Surf lessons", "Boat trips", "Park tickets if visiting Kumana"],
    categories: ["Beach Tours", "Adventure Tours"],
    itinerary: [
      {
        day: 1,
        title: "Colombo → Trincomalee",
        description: "Cross-island drive to the northeast coast. Evening swim.",
        overnight: "Trincomalee",
      },
      {
        day: 2,
        title: "Trincomalee beaches & temple",
        description: "Koneswaram Temple, Fort Frederick, and Nilaveli beach time.",
        overnight: "Trincomalee",
      },
      {
        day: 3,
        title: "Trincomalee → Arugam Bay",
        description: "Coastal and inland drive south to Sri Lanka’s surf capital.",
        overnight: "Arugam Bay",
      },
      {
        day: 4,
        title: "Arugam Bay free day",
        description: "Surf, lagoon safari, or a lazy beach café day.",
        overnight: "Arugam Bay",
      },
      {
        day: 5,
        title: "Arugam Bay → Colombo",
        description: "Return west, or extend toward Yala and the south.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Arugam+Bay+Sri+Lanka",
    rating: 4.7,
    reviews: 58,
  },
  {
    id: 13,
    title: "Ancient Cities Heritage Tour",
    image: slImages.anuradhapura,
    gallery: [localImages.anuradhapura, photos.ruins, localImages.sigiriya, localImages.buddha, localImages.culture],
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    startLocation: "Colombo / Airport",
    endLocation: "Colombo / Kandy",
    price: 310,
    shortDescription:
      "Anuradhapura and Polonnaruwa in depth, with Sigiriya if you want the classic trio.",
    overview:
      "For travellers who care about history. More time in the two great ancient capitals, with a knowledgeable driver and optional local site guide.",
    places: ["Anuradhapura", "Polonnaruwa", "Sigiriya"],
    accommodation: "2 nights near the Cultural Triangle",
    transport: "Private AC car",
    meals: "Daily breakfast",
    highlights: [
      "Sri Maha Bodhi and Ruwanwelisaya",
      "Polonnaruwa Gal Vihara",
      "Optional Sigiriya climb",
    ],
    included: ["Private vehicle", "2 nights hotel", "Daily breakfast"],
    excluded: ["Site tickets", "Bicycle hire in Polonnaruwa", "Guide fees"],
    categories: ["Cultural Tours", "Budget Tours"],
    itinerary: [
      {
        day: 1,
        title: "Airport → Anuradhapura",
        description: "Transfer and afternoon at the sacred city’s main dagobas.",
        overnight: "Anuradhapura",
      },
      {
        day: 2,
        title: "Anuradhapura → Polonnaruwa",
        description: "Morning remaining sites, then Polonnaruwa by bicycle or tuk-tuk.",
        overnight: "Polonnaruwa or Sigiriya",
      },
      {
        day: 3,
        title: "Sigiriya → Kandy or Colombo",
        description: "Optional Sigiriya climb and onward transfer.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Anuradhapura+Sri+Lanka",
    rating: 4.8,
    reviews: 52,
  },
  {
    id: 14,
    title: "Mirissa Whale Watching Day Tour",
    image: slImages.mirissa,
    gallery: [photos.whale, localImages.beachTour, localImages.unawatuna, localImages.galleFort],
    duration: "1 Day",
    durationDays: 1,
    startLocation: "Galle / Mirissa / Unawatuna",
    endLocation: "Same as start",
    price: 85,
    shortDescription:
      "Dawn whale-watching from Mirissa with beach time and an optional Galle Fort stop.",
    overview:
      "Seasonal day tour (typically November to April). We collect you before sunrise, place you on a trusted boat, and give you the afternoon free on the south coast.",
    places: ["Mirissa", "Galle"],
    accommodation: "Day tour — no overnight stay",
    transport: "Private hotel pickup and drop-off",
    meals: "Not included; light breakfast recommended before boarding",
    highlights: [
      "Blue whale watching (seasonal)",
      "Mirissa harbour sunrise",
      "Optional Galle Fort afternoon",
    ],
    included: ["Hotel pickup in the south", "Boat ticket booking", "Return transfer"],
    excluded: ["Boat ticket if you prefer to pay on the day", "Lunch", "Seasickness tablets"],
    categories: ["Day Tours", "Beach Tours", "Adventure Tours"],
    itinerary: [
      {
        day: 1,
        title: "Hotel → Mirissa harbour → beach / Galle",
        description:
          "Very early pickup, 3–5 hours at sea, then beach time or Galle Fort before drop-off.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Mirissa+Harbour+Sri+Lanka",
    rating: 4.5,
    reviews: 91,
  },
];

export const getTourById = (id: number): Tour | undefined =>
  toursData.find((tour) => tour.id === id);

export const getToursByCategory = (category: TourCategory): Tour[] =>
  toursData.filter((tour) => tour.categories.includes(category));

export const getToursByPlace = (place: string): Tour[] =>
  toursData.filter((tour) =>
    tour.places.some((item) => item.toLowerCase() === place.toLowerCase())
  );

export const formatTourPrice = (price: number | null) =>
  price === null ? "Contact for Price" : `From $${price}`;
