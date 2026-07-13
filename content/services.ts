import type { ServiceGroup, PillGroup } from "@/lib/types";

/** The three "Consulate Services" list cards. */
export const consulateServices: ServiceGroup[] = [
  {
    title: "Visa Services",
    icon: "visa",
    items: [
      { label: "Business / Tourism Visa", href: "/visa-migration/pleasure-business" },
      { label: "Student Visa", href: "/visa-migration/student-visa-requirements" },
      { label: "Pilot Training Visa", href: "/visa-migration/pilot-training" },
      { label: "Seaman Visa", href: "/visa-migration/seaman-visa" },
      { label: "Transit Visa", href: "/visa-migration/transit-visa" },
    ],
  },
  {
    title: "Passport Services",
    icon: "passport",
    items: [
      { label: "New Passport Application", href: "/passport-service/new-passport" },
      { label: "Passport Renewal", href: "/passport-service/renewal" },
      { label: "Lost Passport Report", href: "/passport-service/lost-passport" },
      { label: "Passport Cancellation", href: "/passport-service/cancellation" },
    ],
  },
  {
    title: "Civil Registration",
    icon: "registration",
    items: [
      { label: "Report of Birth", href: "/registration-service/report-of-birth" },
      { label: "Report of Death", href: "/registration-service/report-of-death" },
      { label: "Report of Marriage", href: "/registration-service/report-of-marriage" },
    ],
  },
];

/** The three tag/pill groups below the service cards. */
export const pillGroups: PillGroup[] = [
  {
    title: "About the Philippines",
    items: [
      { label: "Overview", href: "/about-philippines/overview" },
      { label: "Economy", href: "/about-philippines/economy" },
      { label: "Foreign Policy", href: "/about-philippines/foreign-policy" },
      { label: "Trade Policy", href: "/about-philippines/trade-policy" },
    ],
  },
  {
    title: "Traveling in Philippines",
    items: [
      { label: "Tourist Destinations", href: "/traveling-in-philippines/tourism" },
      { label: "Visitor Guide", href: "/traveling-in-philippines/visitor-guide" },
      { label: "Hotels & Accommodation", href: "/traveling-in-philippines/accommodation" },
    ],
  },
  {
    title: "Study in Philippines",
    items: [
      { label: "Universities", href: "/study-in-philippines/universities" },
      { label: "Student Information", href: "/study-in-philippines/overview" },
      { label: "Historical Data", href: "/study-in-philippines/historical-data" },
    ],
  },
];
