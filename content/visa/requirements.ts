import type { IconName } from "@/lib/types";

export interface RequirementCard {
  title: string;
  icon: IconName;
  items: string[];
}

/** The two info cards in the "Entry Requirements" section. */
export const entryRequirementCards: RequirementCard[] = [
  {
    title: "Passport & Documents",
    icon: "passport",
    items: [
      "Passport valid for at least six (6) months beyond the intended stay.",
      "Original confirmed return / onward airline ticket with a photocopy.",
      "Proof of sufficient financial capacity for the duration of the stay.",
      "Duly accomplished visa application form (F.A. Form No. 2).",
    ],
  },
  {
    title: "Length of Stay",
    icon: "clock",
    items: [
      "Visa-free entry for temporary visits not exceeding twenty-one (21) days.",
      "Stays beyond 21 days require a temporary visitor's visa.",
      "Maximum authorized period of stay for temporary visitors is fifty-nine (59) days.",
      "Extensions are processed by the Philippine Bureau of Immigration.",
    ],
  },
];

/** The red notice shown at the bottom of the Entry Requirements section. */
export const entryNotice =
  "The issuance of a visa does not guarantee admission into the Philippines. The admission of foreign nationals is a function of the immigration authorities at the port of entry.";
