import type { QuickLink } from "@/lib/types";

export const homeHero = {
  eyelet: "Consulate General of the Philippines · Kathmandu",
  title: "Your gateway to Philippine consular services in Nepal",
  subtitle:
    "Visa, passport, and registration support — with clear guidance for travel, study, and exchange between the Philippines and Nepal.",
  primaryCta: { label: "Explore Visa & Migration", href: "/visa-migration" },
  secondaryCta: { label: "Contact the Consulate", href: "/contact" },
};

export const homeIntro = {
  heading: "More services & information",
  body:
    "Explore travel, study, and country information from the Philippine Consulate General in Kathmandu.",
};

/**
 * Quick-link cards for every major section of the site — the home page's
 * primary navigation into the rest of the content.
 */
export const quickLinks: QuickLink[] = [
  {
    title: "Visa & Migration",
    description:
      "Visa categories, visa-free countries, entry requirements, fees and application procedures.",
    href: "/visa-migration",
    icon: "visa",
    links: [
      { label: "Business / Tourism", href: "/visa-migration/pleasure-business" },
      { label: "Student Visa", href: "/visa-migration/student-visa-requirements" },
      { label: "Visa Fees", href: "/visa-migration/visa-fees" },
    ],
  },
  {
    title: "Passport Service",
    description:
      "Apply for a new passport, renew an existing one, or report a lost passport.",
    href: "/passport-service",
    icon: "passport",
    links: [
      { label: "New Passport", href: "/passport-service/new-passport" },
      { label: "Renewal", href: "/passport-service/renewal" },
      { label: "Lost Passport", href: "/passport-service/lost-passport" },
    ],
  },
  {
    title: "Registration Service",
    description:
      "Report a birth, death or marriage that occurred abroad for civil registration.",
    href: "/registration-service",
    icon: "registration",
    links: [
      { label: "Report of Birth", href: "/registration-service/report-of-birth" },
      { label: "Report of Marriage", href: "/registration-service/report-of-marriage" },
    ],
  },
  {
    title: "About Philippines",
    description:
      "An overview of the Philippines — its economy, foreign policy and trade relations.",
    href: "/about-philippines", 
    icon: "aboutPh",
    links: [
      { label: "Overview", href: "/about-philippines/overview" },
      { label: "Economy", href: "/about-philippines/economy" },
    ],
  },
  {
    title: "Study in Philippines",
    description:
      "General information, list of universities and colleges, and data for Nepalese students.",
    href: "/study-in-philippines",
    icon: "study",
    links: [
      { label: "Universities", href: "/study-in-philippines/universities" },
      { label: "General Information", href: "/study-in-philippines/overview" },
    ],
  },
  {
    title: "Traveling in Philippines",
    description:
      "Tourism highlights, visitor information and a guide to hotels and accommodation.",
    href: "/traveling-in-philippines",
    icon: "travel",
    links: [
      { label: "Tourism", href: "/traveling-in-philippines/tourism" },
      { label: "Accommodation", href: "/traveling-in-philippines/accommodation" },
    ],
  },
  {
    title: "About Nepal",
    description:
      "Learn about Nepal — its history, culture and the Kathmandu Valley.",
    href: "/about-nepal",
    icon: "nepal",
  },
  {
    title: "Traveling in Nepal",
    description:
      "Discover Nepal's destinations and plan your journey through the Himalayas.",
    href: "/traveling-in-nepal",
    icon: "travel",
  },
];
