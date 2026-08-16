import { localImages, slImages } from "../../../data/images";

export const GALLERY_CATEGORIES = [
  "Beaches",
  "Wildlife",
  "Mountains",
  "Cultural Sites",
  "Temples",
  "Waterfalls",
  "Safari",
  "Hotels",
  "Guests",
  "Tour Memories",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}

// Add or replace items here to update the Gallery page.
export const galleryImages: GalleryImage[] = [
  { id: 1, src: slImages.mirissa, alt: "Mirissa beach", category: "Beaches", caption: "Mirissa, south coast" },
  { id: 2, src: slImages.unawatuna, alt: "Unawatuna", category: "Beaches", caption: "Unawatuna Bay" },
  { id: 3, src: slImages.arugamBay, alt: "Arugam Bay", category: "Beaches", caption: "Arugam Bay" },
  { id: 4, src: slImages.bentota, alt: "Bentota beach", category: "Beaches", caption: "Bentota" },
  { id: 5, src: slImages.hikkaduwa, alt: "Hikkaduwa", category: "Beaches", caption: "Hikkaduwa" },
  { id: 6, src: slImages.trincomalee, alt: "Trincomalee bay", category: "Beaches", caption: "Bay of Trincomalee" },
  { id: 7, src: localImages.beachTour, alt: "Stilt fishermen", category: "Beaches", caption: "South-coast stilt fishermen" },
  { id: 8, src: slImages.elephants, alt: "Sri Lankan elephants", category: "Wildlife", caption: "Sri Lankan tuskers" },
  { id: 9, src: slImages.pinnawala, alt: "Pinnawala elephants", category: "Wildlife", caption: "Pinnawala Elephant Orphanage" },
  { id: 10, src: slImages.leopard, alt: "Sri Lankan leopard", category: "Wildlife", caption: "Sri Lankan leopard" },
  { id: 11, src: localImages.wildlife, alt: "Leopard in foliage", category: "Wildlife", caption: "Leopard in the jungle" },
  { id: 12, src: localImages.landscape, alt: "Elephants from above", category: "Wildlife", caption: "Elephants in the park" },
  { id: 13, src: slImages.teaCountry, alt: "Tea plantation", category: "Mountains", caption: "Hill-country tea estate" },
  { id: 14, src: slImages.nuwaraEliya, alt: "Nuwara Eliya", category: "Mountains", caption: "Nuwara Eliya from above" },
  { id: 15, src: slImages.ellaNineArches, alt: "Nine Arches Bridge", category: "Mountains", caption: "Nine Arches Bridge, Ella" },
  { id: 16, src: slImages.ellaStation, alt: "Ella railway", category: "Mountains", caption: "Ella railway station" },
  { id: 17, src: slImages.adamsPeak, alt: "Adam's Peak", category: "Mountains", caption: "Sri Pada / Adam’s Peak" },
  { id: 18, src: localImages.ambuluwawa, alt: "Ambuluwawa", category: "Mountains", caption: "Ambuluwawa Tower" },
  { id: 19, src: slImages.sigiriya, alt: "Sigiriya", category: "Cultural Sites", caption: "Sigiriya Rock Fortress" },
  { id: 20, src: localImages.sigiriya, alt: "Sigiriya aerial", category: "Cultural Sites", caption: "Sigiriya from the air" },
  { id: 21, src: slImages.galleFort, alt: "Galle Fort", category: "Cultural Sites", caption: "Galle Fort" },
  { id: 22, src: slImages.galleLighthouse, alt: "Galle lighthouse", category: "Cultural Sites", caption: "Galle Fort lighthouse" },
  { id: 23, src: slImages.polonnaruwa, alt: "Polonnaruwa", category: "Cultural Sites", caption: "Polonnaruwa ancient city" },
  { id: 24, src: slImages.anuradhapura, alt: "Anuradhapura", category: "Cultural Sites", caption: "Ruwanwelisaya, Anuradhapura" },
  { id: 25, src: slImages.kandyTemple, alt: "Temple of the Tooth", category: "Temples", caption: "Temple of the Tooth, Kandy" },
  { id: 26, src: localImages.kandy, alt: "Kandy temple", category: "Temples", caption: "Sri Dalada Maligawa" },
  { id: 27, src: slImages.dambulla, alt: "Dambulla", category: "Temples", caption: "Dambulla Cave Temple" },
  { id: 28, src: localImages.buddha, alt: "Buddha statue", category: "Temples", caption: "Ancient Buddha image" },
  { id: 29, src: slImages.rambodaFalls, alt: "Ramboda Falls", category: "Waterfalls", caption: "Ramboda Falls" },
  { id: 30, src: slImages.udawalawe, alt: "Udawalawe", category: "Safari", caption: "Udawalawe National Park" },
  { id: 31, src: slImages.yala, alt: "Yala", category: "Safari", caption: "Yala National Park coast" },
  { id: 32, src: slImages.galleLighthouse, alt: "Fort stay", category: "Hotels", caption: "Stay inside Galle Fort" },
  { id: 33, src: slImages.galleFort, alt: "Galle Fort hotels", category: "Hotels", caption: "Boutique streets of Galle" },
  { id: 34, src: slImages.bentota, alt: "Bentota stay", category: "Hotels", caption: "South-coast beach hotels" },
  { id: 35, src: localImages.culture, alt: "Kandy Perahera", category: "Guests", caption: "Esala Perahera, Kandy" },
  { id: 36, src: slImages.pinnawala, alt: "Visitors with elephants", category: "Guests", caption: "A family stop at Pinnawala" },
  { id: 37, src: slImages.kandyTemple, alt: "Temple visitors", category: "Guests", caption: "Visiting the Temple of the Tooth" },
  { id: 38, src: localImages.beachTour, alt: "South coast memory", category: "Tour Memories", caption: "Sunset on the south coast" },
  { id: 39, src: localImages.koggala, alt: "Koggala", category: "Tour Memories", caption: "Koggala lagoon" },
  { id: 40, src: slImages.ellaNineArches, alt: "Ella memory", category: "Tour Memories", caption: "The train through Ella" },
  { id: 41, src: slImages.mirissa, alt: "Mirissa memory", category: "Tour Memories", caption: "A morning in Mirissa" },
];
