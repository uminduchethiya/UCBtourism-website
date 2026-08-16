export const COMPANY = {
  brand: "TravelIn",
  legalName: "Southern Tours",
  tagline: "Private tours & drivers across Sri Lanka",
  phone: "+94 77 293 3146",
  phoneTel: "+94772933146",
  whatsapp: "94772933146",
  email: "southertours@gmail.com",
  location: "Padukka, Wattareka, Sri Lanka",
  hours: "Mon–Fri: 10 AM – 5 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Padukka+Wattareka+Sri+Lanka&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Tours", to: "/tours" },
  { label: "Plan Your Tour", to: "/plan-your-tour" },
  { label: "Destinations", to: "/destinations" },
  { label: "Gallery", to: "/gallery" },
  { label: "Drivers", to: "/drivers" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
