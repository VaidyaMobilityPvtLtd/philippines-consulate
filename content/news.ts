import type { IconName } from "@/lib/types";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: "Announcement" | "Advisory" | "Notice";
  summary: string;
  body: string[];
};

/**
 * Consulate news & announcements — patterned after DFA post sites
 * (e.g. New Delhi PE NewsRoom) using Kathmandu-relevant notices.
 */
export const newsItems: NewsItem[] = [
  {
    slug: "office-hours-reminder",
    title: "Consular office hours reminder",
    date: "2026-01-15",
    category: "Notice",
    summary:
      "The Consulate General in Kathmandu receives clients Monday to Friday, 9:00 AM – 3:00 PM, with lunch break from 1:00 – 2:00 PM.",
    body: [
      "Please plan your visit within regular office hours. The Consulate is closed on Philippine and Nepali public holidays.",
      "For visa, passport, and civil registration inquiries, you may also email philcongen@voith.com.np or call +977-1-4008801 to 05.",
    ],
  },
  {
    slug: "passport-application-guidance",
    title: "Passport applications — personal appearance required",
    date: "2025-11-20",
    category: "Advisory",
    summary:
      "All first-time, renewal, and lost-passport applicants must appear in person with complete documentary requirements.",
    body: [
      "Bring original documents and photocopies. Incomplete applications may delay processing.",
      "Passport fees are payable via deposit to Standard Chartered Bank Nepal Limited (A/C 01-0209171-01).",
      "See Passport Services for full requirement checklists.",
    ],
  },
  {
    slug: "visa-entry-reminder",
    title: "Visa and entry requirements for the Philippines",
    date: "2025-09-08",
    category: "Advisory",
    summary:
      "Travelers should confirm visa-free eligibility, passport validity (at least six months), and supporting documents before departure.",
    body: [
      "Nationals of visa-free countries may generally stay up to 21 days for tourism or business, subject to immigration rules.",
      "Longer stays or other purposes require a visa from the Consulate before travel.",
      "Review Visa & Migration for categories, fees, and country lists.",
    ],
  },
  {
    slug: "civil-registration-abroad",
    title: "Report of birth, marriage, and death abroad",
    date: "2025-06-12",
    category: "Announcement",
    summary:
      "Filipino nationals may report births, marriages, and deaths that occurred abroad through the Consulate’s registration services.",
    body: [
      "Timely reporting helps ensure civil registry records with the Philippine Statistics Authority.",
      "Contact the Consulate for forms and supporting document checklists.",
    ],
  },
];

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  group: "Passport" | "Visa" | "Registration" | "General";
};

/**
 * Forms & related documents — mirrored from the legacy philcongen site
 * (affidavits, passport/visa pathways). File downloads can be attached later;
 * links currently route to the relevant service pages or contact.
 */
export const downloadItems: DownloadItem[] = [
  {
    title: "New passport requirements",
    description: "Checklist for first-time Philippine passport applicants.",
    href: "/passport-service/new-passport",
    icon: "passport",
    group: "Passport",
  },
  {
    title: "Passport renewal requirements",
    description: "Documents and fee guidance for renewing a Philippine passport.",
    href: "/passport-service/renewal",
    icon: "passport",
    group: "Passport",
  },
  {
    title: "Lost passport requirements",
    description: "Replacement process, affidavit of loss, and police report notes.",
    href: "/passport-service/lost-passport",
    icon: "document",
    group: "Passport",
  },
  {
    title: "Passport cancellation",
    description: "How to cancel a Philippine passport through the Consulate.",
    href: "/passport-service/cancellation",
    icon: "document",
    group: "Passport",
  },
  {
    title: "Business / tourism visa",
    description: "Pleasure and business visa requirements for Nepal-based applicants.",
    href: "/visa-migration/pleasure-business",
    icon: "visa",
    group: "Visa",
  },
  {
    title: "Student visa requirements",
    description: "Guidance for studying in the Philippines.",
    href: "/visa-migration/student-visa-requirements",
    icon: "student",
    group: "Visa",
  },
  {
    title: "Visa fees",
    description: "Current consular visa fee schedule.",
    href: "/visa-migration/visa-fees",
    icon: "document",
    group: "Visa",
  },
  {
    title: "Report of birth",
    description: "Civil registration for births abroad.",
    href: "/registration-service/report-of-birth",
    icon: "registration",
    group: "Registration",
  },
  {
    title: "Report of marriage",
    description: "Civil registration for marriages abroad.",
    href: "/registration-service/report-of-marriage",
    icon: "registration",
    group: "Registration",
  },
  {
    title: "Report of death",
    description: "Civil registration for deaths abroad.",
    href: "/registration-service/report-of-death",
    icon: "registration",
    group: "Registration",
  },
  {
    title: "Affidavit of loss of passport",
    description: "Request the form at the Consulate; required for lost-passport cases.",
    href: "/contact",
    icon: "document",
    group: "General",
  },
  {
    title: "Affidavit of cancellation of passport",
    description: "Request the form at the Consulate for passport cancellation.",
    href: "/contact",
    icon: "document",
    group: "General",
  },
];

export const audiencePaths = [
  {
    title: "For Filipino nationals",
    description: "Passports, civil registration, and consular assistance while in Nepal.",
    href: "/passport-service",
    icon: "passport" as IconName,
    links: [
      { label: "New / renew passport", href: "/passport-service" },
      { label: "Report of birth", href: "/registration-service/report-of-birth" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "For visitors & applicants",
    description: "Philippine visas, entry rules, study, and travel information.",
    href: "/visa-migration",
    icon: "visa" as IconName,
    links: [
      { label: "Visa categories", href: "/visa-migration" },
      { label: "Visa fees", href: "/visa-migration/visa-fees" },
      { label: "Study in Philippines", href: "/study-in-philippines" },
    ],
  },
] as const;
