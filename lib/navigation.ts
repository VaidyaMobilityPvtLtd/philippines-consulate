import type { NavItem, LinkItem } from "./types";

/**
 * Utility bar (top strip): search + secondary links.
 */
export const utilityNav: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "Downloads", href: "/downloads" },
];

/**
 * Primary navigation (the blue bar). Items with `children` render a dropdown.
 * Section slugs here are the single source of truth for the whole site's IA.
 */
export const mainNav: NavItem[] = [
  {
    label: "Visa & Migration",
    href: "/visa-migration",
    children: [
      { label: "What is a Philippine Visa", href: "/visa-migration/what-is-philippine-visa" },
      { label: "Visa for Pleasure / Business", href: "/visa-migration/pleasure-business" },
      { label: "Student Visa", href: "/visa-migration/student-visa-requirements" },
      { label: "Pilot Training Visa", href: "/visa-migration/pilot-training" },
      { label: "Seaman Visa", href: "/visa-migration/seaman-visa" },
      { label: "Transit Visa", href: "/visa-migration/transit-visa" },
      { label: "Other Requirements", href: "/visa-migration/other-requirements" },
      { label: "Visa Fees", href: "/visa-migration/visa-fees" },
    ],
  },
  {
    label: "Passport Service",
    href: "/passport-service",
    children: [
      { label: "New Passport", href: "/passport-service/new-passport" },
      { label: "Passport Renewal", href: "/passport-service/renewal" },
      { label: "Lost Passport", href: "/passport-service/lost-passport" },
      { label: "Passport Cancellation", href: "/passport-service/cancellation" },
    ],
  },
  {
    label: "Registration Service",
    href: "/registration-service",
    children: [
      { label: "Report of Birth", href: "/registration-service/report-of-birth" },
      { label: "Report of Death", href: "/registration-service/report-of-death" },
      { label: "Report of Marriage", href: "/registration-service/report-of-marriage" },
    ],
  },
  {
    label: "About Philippines",
    href: "/about-philippines",
    children: [
      { label: "Philippine at a Glance", href: "/about-philippines/overview" },
      { label: "Economy", href: "/about-philippines/economy" },
      { label: "Foreign Policy", href: "/about-philippines/foreign-policy" },
      { label: "Trade Policy", href: "/about-philippines/trade-policy" },
      { label: "Information Directory", href: "/about-philippines/directory" },
    ],
  },
  {
    label: "Study in Philippines",
    href: "/study-in-philippines",
    children: [
      { label: "General Information", href: "/study-in-philippines/overview" },
      { label: "Universities & Colleges", href: "/study-in-philippines/universities" },
      { label: "Historical Data", href: "/study-in-philippines/historical-data" },
    ],
  },
  {
    label: "Traveling in Philippines",
    href: "/traveling-in-philippines",
    children: [
      { label: "Tourism", href: "/traveling-in-philippines/tourism" },
      { label: "Tourist Destinations", href: "/traveling-in-philippines/destinations" },
      { label: "Visitor Information", href: "/traveling-in-philippines/visitor-guide" },
      { label: "Working in the Philippines", href: "/traveling-in-philippines/jobs" },
      { label: "Hotels & Accommodation", href: "/traveling-in-philippines/accommodation" },
    ],
  },
  { label: "About Nepal", href: "/about-nepal" },
  { label: "Traveling in Nepal", href: "/traveling-in-nepal" },
];

/** Footer link columns. */
export const footerNav: { heading: string; links: LinkItem[] }[] = [
  {
    heading: "Visa & Migration",
    links: [
      { label: "What is a Philippine Visa", href: "/visa-migration/what-is-philippine-visa" },
      { label: "Visa for Pleasure / Business", href: "/visa-migration/pleasure-business" },
      { label: "Student Visa", href: "/visa-migration/student-visa-requirements" },
      { label: "Seaman Visa", href: "/visa-migration/seaman-visa" },
      { label: "Visa Fees", href: "/visa-migration/visa-fees" },
    ],
  },
  {
    heading: "Consular Services",
    links: [
      { label: "Passport Services", href: "/passport-service" },
      { label: "Report of Birth", href: "/registration-service/report-of-birth" },
      { label: "Report of Marriage", href: "/registration-service/report-of-marriage" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "About the Philippines", href: "/about-philippines" },
      { label: "Traveling in Philippines", href: "/traveling-in-philippines" },
      { label: "About Nepal", href: "/about-nepal" },
      { label: "About Us", href: "/about-us" },
      { label: "Feedback", href: "/feedback" },
    ],
  },
];
