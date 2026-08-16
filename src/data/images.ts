import sigiriyaAerial from "../assets/carasoulbg1.jpg";
import kandyLocal from "../assets/carasoulbg2.jpg";
import elephantsAerial from "../assets/carasoulbg3.jpg";
import ambuluwawa from "../assets/ambuluwawa.jpg";
import anuradhapuraLocal from "../assets/anuradapurya.jpg";
import stiltFishermen from "../assets/beachtour.jpeg";
import buddha from "../assets/budda.jpg";
import perahera from "../assets/cluture.jpg";
import galleFortLocal from "../assets/gallefort.jpg";
import koggala from "../assets/koogala.jpg";
import arugamLocal from "../assets/planyourtrip.jpg";
import beachMemory from "../assets/planyourtrip1.jpeg";
import unawatunaLocal from "../assets/planyourtrip4.jpg";
import wildlifeLeopard from "../assets/wildlifesrilanka.jpg";

const sl = (file: string) => `/images/sri-lanka/${file}`;

/** Real Sri Lanka landmark photos stored in /public/images/sri-lanka */
export const slImages = {
  sigiriya: sl("sigiriya.jpg"),
  kandyTemple: sl("kandy-temple.jpg"),
  ellaNineArches: sl("ella-nine-arches.jpg"),
  ellaStation: sl("ella-station.jpg"),
  nuwaraEliya: sl("nuwara-eliya.jpg"),
  teaCountry: sl("tea-country.jpg"),
  galleFort: sl("galle-fort.jpg"),
  galleLighthouse: sl("galle-lighthouse.jpg"),
  mirissa: sl("mirissa.jpg"),
  unawatuna: sl("unawatuna.jpg"),
  arugamBay: sl("arugam-bay.jpg"),
  trincomalee: sl("trincomalee.jpg"),
  yala: sl("yala.jpg"),
  udawalawe: sl("udawalawe.jpg"),
  elephants: sl("elephants.jpg"),
  pinnawala: sl("pinnawala.jpg"),
  leopard: sl("leopard.jpg"),
  anuradhapura: sl("anuradhapura.jpg"),
  polonnaruwa: sl("polonnaruwa.jpg"),
  dambulla: sl("dambulla.jpg"),
  rambodaFalls: sl("ramboda-falls.jpg"),
  adamsPeak: sl("adams-peak.jpg"),
  bentota: sl("bentota.jpg"),
  hikkaduwa: sl("hikkaduwa.jpg"),
};

export const localImages = {
  sigiriya: sigiriyaAerial,
  kandy: kandyLocal,
  landscape: elephantsAerial,
  ambuluwawa,
  anuradhapura: anuradhapuraLocal,
  beachTour: stiltFishermen,
  buddha,
  culture: perahera,
  galleFort: galleFortLocal,
  koggala,
  arugamBay: arugamLocal,
  beachMemory,
  unawatuna: unawatunaLocal,
  wildlife: wildlifeLeopard,
};

export const photos = {
  sigiriya: slImages.sigiriya,
  kandyTemple: slImages.kandyTemple,
  ellaTrain: slImages.ellaNineArches,
  teaCountry: slImages.teaCountry,
  galle: slImages.galleFort,
  beach: slImages.mirissa,
  elephant: slImages.elephants,
  safari: slImages.udawalawe,
  leopard: slImages.leopard,
  waterfall: slImages.rambodaFalls,
  hotel: slImages.galleLighthouse,
  couple: slImages.unawatuna,
  family: slImages.pinnawala,
  guests: slImages.bentota,
  temple: slImages.dambulla,
  ruins: slImages.polonnaruwa,
  whale: slImages.mirissa,
  surf: slImages.arugamBay,
  luxury: slImages.galleLighthouse,
  driver1:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  driver2:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  driver3:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  driver4:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  driver5:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
};
