import type { PageContent } from "@/lib/types";

/** Registration Service (civil registry) sub-pages, keyed by slug. */
export const registrationPages: Record<string, PageContent> = {
  "report-of-birth": {
    slug: "report-of-birth",
    title: "Report of Birth",
    section: "Registration Service",
    intro: "Registering the birth abroad of a child whose parent is a Filipino citizen.",
    sections: [
      { type: "heading", text: "Report of Birth of a Child Whose Parent is a Filipino Citizen" },
      {
        type: "paragraph",
        text: "The report serves as a declaration of the person furnishing information on the birth abroad of a Filipino child. Filipinos living abroad should promptly register births with the Philippine Embassy or Consulate General.",
      },
      {
        type: "paragraph",
        text: "When a child is born to parents who are both Filipino citizens, or to one parent with Filipino citizenship (not naturalized elsewhere), the birth must be reported immediately to the relevant Philippine Embassy or Consulate.",
      },
      {
        type: "paragraph",
        text: "Reports filed after twelve months from birth may be recorded if the consular officer determines that satisfactory evidence of authenticity exists. The reporting person must provide an explanation for the delay.",
      },
      { type: "heading", text: "Procedures and Requirements" },
      {
        type: "list",
        ordered: true,
        items: [
          "The Report of Birth Form (Form No. 40) must be executed by a parent, attending physician, or nurse in four copies. When reported in person, it is sworn before a consular officer. If mailed, it requires signatures before two witnesses.",
          "A Certificate / Declaration of Birth from local authorities must include: the child's name, date and hour of birth, place of birth, sex and nationality; the parents' names, citizenship and religion; and the parents' civil status. The original and four copies must be attested by Nepal's Ministry of External Affairs, then the Philippine Consulate General.",
          "Copies of the parent's passport(s) are required to establish Filipino citizenship.",
          "If the parents are married, the marriage license or certificate (properly attested, four copies) must be provided.",
        ],
      },
      { type: "note", text: "The Embassy or Consulate assumes no responsibility for any loss or damage through the mail." },
    ],
  },

  "report-of-death": {
    slug: "report-of-death",
    title: "Report of Death",
    section: "Registration Service",
    intro: "Registering the death abroad of a Filipino citizen.",
    sections: [
      { type: "heading", text: "Report of Death of a Filipino Citizen" },
      {
        type: "paragraph",
        text: "The death of a Filipino citizen abroad must be reported to the Consulate exercising jurisdiction over the place of death, to ensure that the occurrence of death is properly registered and recorded with the Office of the Civil Registrar General in Manila.",
      },
      { type: "heading", text: "Requirements" },
      {
        type: "paragraph",
        text: "The Report of Death Form (Form No. 39) must be completed and submitted together with the following supporting documents:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Proof of Philippine citizenship of the deceased (i.e. Philippine passport).",
          "A copy of the deceased's Death Certificate.",
          "A copy of the Permit of Disposition of Human Remains.",
          "A copy of the Mortuary Certificate.",
        ],
      },
      { type: "heading", text: "Payment of Fees" },
      {
        type: "paragraph",
        text: "The fee for each report is NRs. 2,840.00. Documents to be returned by mail require an additional fee of NRs. 500.00 to cover postage.",
      },
      { type: "note", text: "The Consulate assumes no responsibility for any loss or damage through the mail." },
    ],
  },

  "report-of-marriage": {
    slug: "report-of-marriage",
    title: "Report of Marriage",
    section: "Registration Service",
    intro: "Registering a marriage contracted abroad by a Filipino citizen.",
    sections: [
      {
        type: "paragraph",
        text: "Filipino citizens who marry outside the Philippines must register their marriage with the appropriate Philippine Foreign Service Post in the country where the marriage occurred. The registration is then transmitted through the Department of Foreign Affairs to the Office of the Civil Registrar General in the Philippines.",
      },
      {
        type: "paragraph",
        text: "The Consular Section of the Embassy of the Philippines in New Delhi handles marriage registrations for Filipino citizens married in India only.",
      },
      { type: "heading", text: "Procedure and Requirements" },
      {
        type: "list",
        ordered: true,
        items: [
          "Submit a duly accomplished Report of Marriage Form in triplicate with legible printed entries. The wife must indicate her maiden name in all the forms.",
          "Submit an attested / authenticated Marriage Certificate from local authorities. Abstract copies are not accepted. Documents must be attested by Patiala House (Ministry of External Affairs) in New Delhi, or by the Philippine Consulates in Chennai, Kolkata, or Mumbai.",
          "Submit Birth Certificates and photocopies of passport data pages for both parties.",
          "Provide three photocopies of each required document. Original documents are returned after verification.",
          "Submit three coloured passport-sized photos (1.77\" x 1.37\" or 4.5 x 3.5 cm) per person, taken within six months, signed by the subject on the side or bottom.",
        ],
      },
      { type: "heading", text: "Fees and Payment" },
      {
        type: "list",
        items: [
          "Report of Marriage fee: NRs. 2,320.00.",
          "Return courier service: additional NRs. 500.00.",
          "Payment by demand draft payable to the Embassy of the Philippines from a New Delhi bank.",
        ],
      },
      {
        type: "note",
        text: "Additional documents may be required when necessary. The Embassy's Consular Section assumes no responsibility for any loss or damage through the mail.",
      },
    ],
  },
};
