import { localImages, slImages } from "../../../data/images";

export interface Destination {
  slug: string;
  name: string;
  region: string;
  image: string;
  gallery: string[];
  intro: string;
  attractions: string[];
  thingsToDo: string[];
  bestTime: string;
  recommendedDays: string;
  nearby: string[];
  tourIds: number[];
}

export const destinationsData: Destination[] = [
  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    image: slImages.sigiriya,
    gallery: [slImages.sigiriya, localImages.sigiriya, slImages.dambulla, slImages.polonnaruwa],
    intro:
      "Sigiriya, the Lion Rock, is Sri Lanka’s most famous citadel. A 5th-century palace sits on a 200-metre rock, with frescoes, water gardens and views across the jungle.",
    attractions: ["Sigiriya Rock Fortress", "Pidurangala Rock", "Water gardens", "Village tank sunsets"],
    thingsToDo: [
      "Climb Sigiriya early to avoid heat and crowds",
      "Hike Pidurangala for the classic view of the rock",
      "Cycle through nearby villages",
      "Visit Dambulla Cave Temple on the same day",
    ],
    bestTime: "January to April and July to September, in the cooler morning hours",
    recommendedDays: "1–2 days",
    nearby: ["polonnaruwa", "anuradhapura", "kandy"],
    tourIds: [1, 2, 8, 10, 11, 13],
  },
  {
    slug: "kandy",
    name: "Kandy",
    region: "Hill Country",
    image: slImages.kandyTemple,
    gallery: [slImages.kandyTemple, localImages.kandy, localImages.culture, localImages.buddha],
    intro:
      "Kandy is the cultural heart of the highlands. The Temple of the Tooth Relic, a peaceful lake, botanical gardens and surrounding tea hills make it a natural overnight stop.",
    attractions: ["Temple of the Tooth", "Kandy Lake", "Peradeniya Botanical Garden", "Cultural dance show"],
    thingsToDo: [
      "Attend a puja at the Temple of the Tooth",
      "Walk the lake in the evening",
      "Visit a spice garden on the way in",
      "Continue into tea country the next day",
    ],
    bestTime: "December to April; evenings are cooler year-round",
    recommendedDays: "1–2 days",
    nearby: ["nuwara-eliya", "sigiriya", "ella"],
    tourIds: [1, 2, 6, 7, 9, 11],
  },
  {
    slug: "ella",
    name: "Ella",
    region: "Hill Country",
    image: slImages.ellaNineArches,
    gallery: [slImages.ellaNineArches, slImages.ellaStation, slImages.teaCountry, localImages.ambuluwawa],
    intro:
      "Ella is a small highland town with big views. Travellers come for the train ride, Nine Arches Bridge, Little Adam’s Peak and cool evenings after the coast or Cultural Triangle.",
    attractions: ["Nine Arches Bridge", "Little Adam’s Peak", "Ella Rock", "Ravana Falls"],
    thingsToDo: [
      "Ride the scenic train from Nanu Oya or Kandy",
      "Hike Little Adam’s Peak at sunrise",
      "Photograph Nine Arches Bridge",
      "Taste tea on a nearby estate",
    ],
    bestTime: "January to April; July and August are also popular",
    recommendedDays: "2 days",
    nearby: ["nuwara-eliya", "yala", "udawalawe"],
    tourIds: [2, 5, 11],
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "Hill Country",
    image: slImages.teaCountry,
    gallery: [slImages.teaCountry, slImages.nuwaraEliya, slImages.rambodaFalls, slImages.ellaNineArches],
    intro:
      "Nuwara Eliya, often called Little England, sits among tea estates at around 1,800 metres. Colonial bungalows, strawberry farms and cool mist give it a character of its own.",
    attractions: ["Tea estates and factories", "Lake Gregory", "Ramboda Falls", "Hakgala Botanical Garden"],
    thingsToDo: [
      "Tour a working tea factory",
      "Walk or cycle around Lake Gregory",
      "Stop at Ramboda Falls on the Kandy road",
      "Catch the train toward Ella",
    ],
    bestTime: "January to April; pack a warm layer in the evenings",
    recommendedDays: "1–2 days",
    nearby: ["ella", "kandy"],
    tourIds: [2, 5, 6, 10],
  },
  {
    slug: "galle",
    name: "Galle",
    region: "South Coast",
    image: slImages.galleFort,
    gallery: [slImages.galleFort, slImages.galleLighthouse, slImages.unawatuna, localImages.koggala],
    intro:
      "Galle Fort is a living UNESCO town of Dutch ramparts, boutique hotels, cafés and a lighthouse. It is the natural base for exploring Sri Lanka’s south coast.",
    attractions: ["Galle Fort", "Lighthouse and ramparts", "Unawatuna Beach", "Koggala Lagoon"],
    thingsToDo: [
      "Walk the fort walls at sunset",
      "Browse galleries and jewellery shops",
      "Swim at Unawatuna",
      "Take a Koggala lagoon boat",
    ],
    bestTime: "November to April for the south coast",
    recommendedDays: "2 days",
    nearby: ["mirissa", "udawalawe", "yala"],
    tourIds: [2, 4, 6, 7, 10, 11],
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    region: "South Coast",
    image: slImages.mirissa,
    gallery: [slImages.mirissa, localImages.beachTour, slImages.unawatuna, slImages.hikkaduwa],
    intro:
      "Mirissa is a crescent of sand known for relaxed beach days and seasonal whale watching. It pairs easily with Galle Fort and coconut-palm coves nearby.",
    attractions: ["Mirissa Beach", "Secret Beach", "Whale watching harbour", "Coconut Tree Hill"],
    thingsToDo: [
      "Join a dawn whale-watching boat in season",
      "Swim and watch the sunset",
      "Visit Coconut Tree Hill",
      "Day trip to Galle Fort",
    ],
    bestTime: "November to April; whales are most often seen December to March",
    recommendedDays: "2–3 days",
    nearby: ["galle", "yala"],
    tourIds: [2, 4, 6, 14],
  },
  {
    slug: "yala",
    name: "Yala",
    region: "Southeast",
    image: slImages.yala,
    gallery: [slImages.yala, slImages.leopard, localImages.wildlife, slImages.elephants],
    intro:
      "Yala National Park is Sri Lanka’s best-known safari landscape. Dry forest, lagoons and coastline support leopards, elephants, sloth bears and exceptional birdlife.",
    attractions: ["Yala Block 1", "Leopard habitats", "Coastal lagoons", "Tissamaharama tanks"],
    thingsToDo: [
      "Book a morning jeep safari",
      "Stay in a lodge close to the gate",
      "Combine with Ella or the south coast",
      "Visit nearby temples or tanks at dusk",
    ],
    bestTime: "February to July, when waterholes draw more wildlife",
    recommendedDays: "1–2 days with at least one safari",
    nearby: ["ella", "udawalawe", "mirissa", "arugam-bay"],
    tourIds: [2, 3, 10],
  },
  {
    slug: "udawalawe",
    name: "Udawalawe",
    region: "South Central",
    image: slImages.udawalawe,
    gallery: [slImages.udawalawe, slImages.elephants, slImages.pinnawala, localImages.landscape],
    intro:
      "Udawalawe is open grassland around a large reservoir — one of the most reliable places in Sri Lanka to see wild elephants, including family herds.",
    attractions: ["Udawalawe National Park", "Elephant Transit Home", "Reservoir viewpoints"],
    thingsToDo: [
      "Take a half-day jeep safari",
      "Visit the Elephant Transit Home at feeding time",
      "Continue to Ella, Yala or the south coast",
    ],
    bestTime: "Year-round; mornings are cooler and more active",
    recommendedDays: "1 day",
    nearby: ["ella", "yala", "galle"],
    tourIds: [3, 7],
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    region: "Cultural Triangle",
    image: slImages.anuradhapura,
    gallery: [slImages.anuradhapura, localImages.anuradhapura, slImages.dambulla, localImages.buddha],
    intro:
      "Anuradhapura was Sri Lanka’s first great capital. Monumental dagobas, monasteries and the sacred Sri Maha Bodhi tree still define the city more than two thousand years later.",
    attractions: ["Ruwanwelisaya", "Sri Maha Bodhi", "Isurumuniya", "Abhayagiri and Jetavanaramaya"],
    thingsToDo: [
      "Hire a bicycle or tuk-tuk for the sacred city",
      "Visit at golden hour when the dagobas glow",
      "Combine with Mihintale if you have extra time",
    ],
    bestTime: "January to April; start early to avoid midday heat",
    recommendedDays: "1–2 days",
    nearby: ["polonnaruwa", "sigiriya"],
    tourIds: [1, 13],
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    region: "Cultural Triangle",
    image: slImages.polonnaruwa,
    gallery: [slImages.polonnaruwa, slImages.anuradhapura, slImages.sigiriya, slImages.dambulla],
    intro:
      "Polonnaruwa is a compact UNESCO city of palaces, image houses and the remarkable Gal Vihara Buddha statues. It is easier to explore in a single day than Anuradhapura.",
    attractions: ["Gal Vihara", "Royal Palace", "Quadrangle", "Lankatilaka"],
    thingsToDo: [
      "Cycle the archaeological park",
      "See Gal Vihara in soft afternoon light",
      "Pair with Sigiriya the same day or the next",
    ],
    bestTime: "January to April",
    recommendedDays: "Half a day to 1 day",
    nearby: ["sigiriya", "anuradhapura"],
    tourIds: [1, 13],
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    region: "East Coast",
    image: slImages.trincomalee,
    gallery: [slImages.trincomalee, slImages.bentota, slImages.arugamBay, localImages.beachMemory],
    intro:
      "Trincomalee sits on one of the world’s great natural harbours. Hindu temples, colonial forts and pale beaches at Nilaveli and Uppuveli make it a highlight of the east.",
    attractions: ["Koneswaram Temple", "Fort Frederick", "Nilaveli Beach", "Pigeon Island"],
    thingsToDo: [
      "Visit Koneswaram Temple on Swami Rock",
      "Snorkel at Pigeon Island in season",
      "Spend a beach day at Nilaveli or Uppuveli",
    ],
    bestTime: "May to September, when the east coast is calmest",
    recommendedDays: "2 days",
    nearby: ["arugam-bay", "anuradhapura"],
    tourIds: [12],
  },
  {
    slug: "arugam-bay",
    name: "Arugam Bay",
    region: "East Coast",
    image: slImages.arugamBay,
    gallery: [slImages.arugamBay, localImages.arugamBay, localImages.beachMemory, slImages.trincomalee],
    intro:
      "Arugam Bay is Sri Lanka’s surf capital — a relaxed village of point breaks, lagoon safaris and beach cafés. It is at its best during the east-coast season.",
    attractions: ["Main Point surf break", "Pottuvil Lagoon", "Whiskey Point", "Kumana National Park"],
    thingsToDo: [
      "Take a surf lesson or rent a board",
      "Join a sunrise lagoon safari",
      "Visit nearby temples and empty beaches",
    ],
    bestTime: "May to September",
    recommendedDays: "2–4 days",
    nearby: ["yala", "trincomalee"],
    tourIds: [12],
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinationsData.find((destination) => destination.slug === slug);
