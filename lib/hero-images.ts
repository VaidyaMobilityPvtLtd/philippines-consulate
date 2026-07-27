/**
 * Distinct HD hero imagery per section — Philippines / Nepal consulate site.
 */

export const heroImages = {
  home: {
    src: "/philippines/beach.jpg",
    alt: "Crystal-clear tropical beach in the Philippines",
  },
  visa: {
    src: "/philippines/manila.jpg",
    alt: "Manila Bay skyline in the Philippines",
  },
  passport: {
    src: "/philippines/passport.jpg",
    alt: "Philippine passport ready for travel",
  },
  registration: {
    src: "/philippines/family.jpg",
    alt: "Filipino family celebration",
  },
  study: {
    src: "/philippines/campus.jpg",
    alt: "University campus in the Philippines",
  },
  travelPh: {
    src: "/philippines/lagoon.jpg",
    alt: "Turquoise lagoon in the Philippines",
  },
  aboutPh: {
    src: "/philippines/hero-islands.jpg",
    alt: "Island landscape of the Philippines",
  },
  economy: {
    src: "/philippines/manila.jpg",
    alt: "Modern Manila skyline",
  },
  heritage: {
    src: "/philippines/heritage.jpg",
    alt: "Colonial heritage streetscape in the Philippines",
  },
  terraces: {
    src: "/philippines/terraces.jpg",
    alt: "Rice terraces in the Philippine highlands",
  },
  jeepney: {
    src: "/philippines/jeepney.jpg",
    alt: "Colorful jeepney on a Philippine street",
  },
  bohol: {
    src: "/philippines/bohol.jpg",
    alt: "Chocolate Hills in Bohol, Philippines",
  },
  mayon: {
    src: "/philippines/mayon.jpg",
    alt: "Mayon Volcano in the Philippines",
  },
  news: {
    src: "/philippines/jeepney.jpg",
    alt: "Everyday life in the Philippines",
  },
  downloads: {
    src: "/philippines/passport.jpg",
    alt: "Travel documents for Philippine consular services",
  },
  aboutNepal: {
    src: "/nepal/durbar.jpg",
    alt: "Kathmandu Durbar Square temples in Nepal",
  },
  travelNepal: {
    src: "/nepal/prayerflags.jpg",
    alt: "Prayer flags on a Himalayan ridge in Nepal",
  },
  nepalValley: {
    src: "/nepal/kathmandu-valley.jpg",
    alt: "Boudhanath Stupa above the Kathmandu skyline with the Himalayas behind",
  },
  nepalPokhara: {
    src: "/nepal/pokhara.jpg",
    alt: "Boats on Phewa Lake with Annapurna behind, Pokhara",
  },
  contact: {
    src: "/nepal/hero-kathmandu.jpg",
    alt: "Boudhanath Stupa in Kathmandu",
  },
  aboutUs: {
    src: "/nepal/consulate.jpg",
    alt: "Consulate building exterior",
  },
  feedback: {
    src: "/nepal/valley.jpg",
    alt: "Historic temples in the Kathmandu Valley",
  },
  nepalKathmandu: {
    src: "/nepal/hero-kathmandu.jpg",
    alt: "Landmark in Kathmandu, Nepal",
  },
  nepalHimalaya: {
    src: "/nepal/hero-himalaya.jpg",
    alt: "Himalayan peaks in Nepal",
  },
  nepalLumbini: {
    src: "/nepal/lumbini.jpg",
    alt: "Lumbini pilgrimage gardens",
  },
  nepalChitwan: {
    src: "/nepal/chitwan.jpg",
    alt: "Jungle landscape in Chitwan",
  },
} as const;

export type HeroImage = { src: string; alt: string };

/** Resolve a distinct hero image from a section or page path. */
export function heroImageForPath(pathname: string): HeroImage {
  if (pathname === "/" ) return heroImages.home;

  if (pathname.startsWith("/visa-migration")) return heroImages.visa;
  if (pathname.startsWith("/passport-service")) return heroImages.passport;
  if (pathname.startsWith("/registration-service")) return heroImages.registration;
  if (pathname.startsWith("/study-in-philippines")) return heroImages.study;
  if (pathname.startsWith("/traveling-in-philippines")) return heroImages.travelPh;
  if (pathname.startsWith("/about-philippines/economy")) return heroImages.economy;
  if (pathname.startsWith("/about-philippines/overview")) return heroImages.aboutPh;
  if (pathname.startsWith("/about-philippines")) return heroImages.mayon;

  if (pathname.startsWith("/traveling-in-nepal")) return heroImages.travelNepal;
  if (pathname === "/about-nepal") return heroImages.aboutNepal;

  if (pathname === "/contact") return heroImages.contact;
  if (pathname === "/about-us") return heroImages.aboutUs;
  if (pathname === "/feedback") return heroImages.feedback;
  if (pathname === "/news") return heroImages.news;
  if (pathname === "/downloads") return heroImages.downloads;

  return heroImages.home;
}
