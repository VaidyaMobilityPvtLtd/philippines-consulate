import type { Category } from "@/lib/types";

/** The six visa category cards shown on the Visa & Migration landing page. */
export const visaCategories: Category[] = [
  {
    slug: "pleasure-business",
    title: "Business & Tourism",
    description:
      "Temporary visitor's visa for those traveling to the Philippines for business or pleasure.",
    icon: "business",
    href: "/visa-migration/pleasure-business",
  },
  {
    slug: "student-visa-requirements",
    title: "Student Visa",
    description:
      "For foreign nationals enrolling in a Philippine higher-education institution.",
    icon: "student",
    href: "/visa-migration/student-visa-requirements",
  },
  {
    slug: "pilot-training",
    title: "Pilot Training Visa",
    description:
      "For students attending an accredited Philippine air-flight training school.",
    icon: "pilot",
    href: "/visa-migration/pilot-training",
  },
  {
    slug: "seaman-visa",
    title: "Seaman Visa",
    description:
      "Issued to seamen and airmen entering the Philippines to join a vessel or aircraft.",
    icon: "seaman",
    href: "/visa-migration/seaman-visa",
  },
  {
    slug: "transit-visa",
    title: "Transit Visa",
    description:
      "For travelers passing through the Philippines en route to another destination.",
    icon: "transit",
    href: "/visa-migration/transit-visa",
  },
  {
    slug: "other-requirements",
    title: "Other Requirements",
    description:
      "Minor children, foreign newsmen and short-term non-degree course applicants.",
    icon: "document",
    href: "/visa-migration/other-requirements",
  },
];
