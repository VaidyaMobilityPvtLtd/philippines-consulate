import type { PageContent } from "@/lib/types";

/** Passport Service sub-pages, keyed by slug. */
export const passportPages: Record<string, PageContent> = {
  "new-passport": {
    slug: "new-passport",
    title: "New Passport",
    section: "Passport Service",
    intro: "Requirements for first-time Philippine passport applicants.",
    sections: [
      { type: "heading", text: "Passport Requirements for First-Time Applicants" },
      {
        type: "list",
        items: [
          "Personal appearance is required.",
          "Duly accomplished application form.",
          "Birth Certificate (BC) in Security Paper (SECPA) issued by the National Statistics Office (NSO), or Certified True Copy (CTC) of the BC issued by the Local Civil Registrar duly authenticated by the NSO.",
          "Three (3) coloured photos of the applicant taken against a royal blue background. The applicant should be in decent attire with a collar. Photos must be of good quality and taken within the last six (6) months. Photo size: 4.5 cm x 3.5 cm; facial image size: not less than 3 cm. The DFA has the right to reject photos that do not comply with specifications and international standards.",
          "Proof of identity / supporting documents indicating full name, date and place of birth and citizenship.",
          "Other supporting documents.",
        ],
      },
      { type: "heading", text: "Additional Requirements" },
      {
        type: "paragraph",
        text: "For married women who want to use the surname of their spouse: Marriage Contract (MC) in Security Paper issued by the NSO, or Certified True Copy issued by the Local Civil Registrar duly authenticated by the NSO.",
      },
      { type: "heading", text: "For married women who would like to revert to their maiden name" },
      {
        type: "list",
        items: [
          "If already widowed: Death Certificate of the deceased husband.",
          "If marriage is annulled: certified true copy and photocopy of the first page and the dispositive portion of the judgment on annulment, and NSO-issued MC with the annotation on the annulment decree.",
          "If divorced: certified true copy and photocopy of the first page and the dispositive portion of the judgment on divorce secured by the foreign spouse, authenticated by the Philippine Embassy or Consulate where the divorce was obtained.",
        ],
      },
      { type: "heading", text: "For Minors (below 18 years old)" },
      {
        type: "list",
        items: [
          "Personal appearance of either parent (if the minor is of legitimate status).",
          "Personal appearance of the mother (if the minor is of illegitimate status).",
          "If the minor is NOT travelling with either parent: original and photocopy of DSWD Clearance; Affidavit of Support and Consent.",
        ],
      },
      { type: "heading", text: "If both parents are abroad" },
      {
        type: "list",
        items: [
          "Affidavit of Support and Consent (authenticated by the nearest Philippine Embassy or Consulate General if not executed before a consul).",
          "Special Power of Attorney (authenticated by the nearest Philippine Embassy or Consulate General if not executed before a consul), designating the representative by name and authorizing them to apply for a passport on behalf of the minor.",
          "Passport and photocopy of the passport of the minor's travelling companion.",
          "Identification card and photocopy thereof of the duly authorized person.",
        ],
      },
    ],
  },

  renewal: {
    slug: "renewal",
    title: "Passport Renewal",
    section: "Passport Service",
    intro: "Requirements for renewing an existing Philippine passport.",
    sections: [
      { type: "heading", text: "Requirements for Renewal of Passport" },
      {
        type: "list",
        ordered: true,
        items: [
          "Request application letter addressed to the Consul General.",
          "Duly accomplished passport application form (a parent may complete the form for minors). Complete all entries to avoid unnecessary delay.",
          "Old passport and photocopy with the latest Bureau of Immigration departure / arrival stamps.",
          "Proof of actual residence (driver's license, state ID, employment ID, or similar).",
          "Four photographs (1.77\" x 1.37\", taken within six months). The photo must show the applicant's front view, in decent attire and without eyeglasses. Digital photographs will not be accepted.",
        ],
      }, 
      { type: "heading", text: "For Married Women Using Married Name" },
      {
        type: "list",
        items: [
          "If married in the Philippines: original / certified true copy and photocopy of the marriage certificate.",
          "If married outside the Philippines within the Consulate's jurisdiction: original and photocopy of the Marriage Certificate plus a duly accomplished Consulate Report of Marriage Contracted Abroad form.",
        ],
      },
      { type: "heading", text: "For Minors" },
      {
        type: "list",
        items: [
          "Personal appearance of the mother is required.",
          "Affidavit of Support, Consent & Guarantee from either parent is required.",
        ],
      },
      { type: "heading", text: "Payment of Fees" },
      {
        type: "note",
        text: "The fee for the renewal of a passport, Rs. 8,352/-, is to be deposited in the Standard Chartered Bank.",
      },
    ],
  },

  "lost-passport": {
    slug: "lost-passport",
    title: "Lost Passport",
    section: "Passport Service",
    intro: "Requirements to replace a lost Philippine passport.",
    sections: [
      {
        type: "paragraph",
        text: "Processing of a lost Philippine passport involves a working-day waiting period from submission of complete requirements and payment receipt. The Consulate office will interview all applicants for lost-passport replacement. Applicants should bring original supporting documents to avoid delays; these may be verified and returned after completion. Photocopies of the additional required documents are recommended to ensure sufficient copies.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Duly accomplished passport application form with complete entries; parents may complete it for minors.",
          "Four photographs (1.77\" x 1.37\") from the last six months showing front view, decent attire, without eyeglasses; digital photos not accepted.",
          "Proof of actual residence (driver's license, state ID, employment ID, or similar).",
          "Original and authenticated birth certificate from the National Statistics Office (NSO).",
          "Supporting documents establishing Filipino citizenship (marriage certificate, school records, professional ID, or similar).",
          "Notarized Affidavit of Loss signed before a Consulate Officer detailing the circumstances, passport number, date and place of issue; a police report is required.",
          "Photocopy of the lost passport's data page or a previously issued passport (if available).",
        ],
      },
      { type: "heading", text: "Payment of Fees" },
      {
        type: "note",
        text: "The fee for the replacement of a lost Philippine passport, Rs. 8,352/-, is to be deposited in the Standard Chartered Bank.",
      },
    ],
  },

  cancellation: {
    slug: "cancellation",
    title: "Passport Cancellation",
    section: "Passport Service",
    intro: "Requirements for the cancellation of a Philippine passport.",
    sections: [
      { type: "heading", text: "Requirements for Cancellation of a Philippine Passport" },
      {
        type: "list",
        items: [
          "Request letter for cancellation stating the reason, addressed to the Consul General.",
          "Affidavit form duly accomplished (available at the Philippine Consulate office).",
          "Original passport with photocopy, including pages showing Bureau of Immigration arrival & departure stamps.",
        ],
      },
      {
        type: "note",
        text: "Fees are to be deposited in Standard Chartered Bank, any branch, in the name of the Consulate of the Republic of the Philippines, A/C No. 01-0209171-01, covering the service fee and courier charges (Delhi–Kathmandu and Kathmandu–Delhi).",
      },
    ],
  },
};
