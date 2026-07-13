import type { PageContent } from "@/lib/types";

/**
 * Content for every Visa & Migration sub-page, keyed by slug.
 * Text is transcribed from the Philippine Consulate General source site and
 * modeled as generic content blocks rendered by <ContentRenderer />.
 */
export const visaSubpages: Record<string, PageContent> = {
  "what-is-philippine-visa": {
    slug: "what-is-philippine-visa",
    title: "What is a Philippine Visa",
    section: "Visa & Migration",
    intro:
      "Understanding what a Philippine visa is — and what it does and does not guarantee.",
    sections: [
      {
        type: "paragraph",
        text: "A Philippine visa is an endorsement made on a travel document by a consular officer at a Philippine Embassy or Consulate abroad denoting that the visa applicant has been properly examined and that the bearer is permitted to proceed to the Philippines and request permission from the Philippine Immigration authorities at the ports of entries to enter the country.",
      },
      {
        type: "note",
        text: "The visa thus issued is not a guarantee that the holder will be automatically admitted into the country, because the admission of foreign nationals into the Philippines is a function of the immigration authorities at the port of entry.",
      },
    ],
  },

  "pleasure-business": {
    slug: "pleasure-business",
    title: "Visa for Pleasure / Business",
    section: "Visa & Migration",
    intro:
      "Guidelines on the entry of temporary visitors to the Philippines for business or tourism.",
    sections: [
      { type: "heading", text: "Guidelines on Entry of Temporary Visitor's Visa" },
      {
        type: "paragraph",
        text: "Nepalese passport holders travelling to the Philippines for a temporary stay not exceeding twenty-one (21) days may enter the Philippines visa-free, provided they possess a return ticket.",
      },
      {
        type: "paragraph",
        text: "For stays exceeding 21 days, a temporary visitor's visa is required, issued by the Philippine Consul General in Kathmandu.",
      },
      {
        type: "note",
        text: "A visa shall NOT be given to an applicant for a temporary stay if there is any reason to believe that the visa applicant, once in the Philippines, will change status. Fraud or misrepresentation results in automatic refusal and permanent ineligibility. Issuance of a visa does not guarantee admission to the Philippines.",
      },
      { type: "heading", text: "Requirements for Temporary Visitor's Visa" },
      {
        type: "list",
        ordered: true,
        items: [
          "Duly accomplished visa application form (F.A. Form 2). Application forms that are incompletely filled-out will be returned to the applicant.",
          "Valid passport whose validity must extend at least six (6) months beyond the length of the proposed stay in the Philippines.",
          'Two 2" x 2" size photographs taken within the last six (6) months. The applicant\'s signature must be affixed on the front side of the picture.',
          "Original confirmed return airline tickets together with a photocopy.",
          "Proof of financial capacity (e.g. travellers cheques, latest print-out of credit card account(s), latest print-out of bank statement, ownership of real estate properties, and other documents showing the applicant's capacity to financially support himself/herself during the stay in the Philippines).",
          "The applicant's personal appearance is required. The applicant may be requested to submit additional documents.",
        ],
      },
      { type: "heading", text: "Visa Fees" },
      {
        type: "table",
        headers: ["Type", "Fee"],
        rows: [
          ["Single entry, valid for three (3) months", "NRs. 3,410.00"],
          ["Multiple entry, valid for twelve (12) months", "NRs. 10,225.00"],
        ],
      },
      {
        type: "note",
        text: "The authorized maximum period of stay granted to all temporary visitor's visa applicants is fifty-nine (59) days. Multiple-entry visas can only be issued after approval is received from the Department of Foreign Affairs, Manila.",
      },
    ],
  },

  "other-requirements": {
    slug: "other-requirements",
    title: "Other Visa / Entry Requirements",
    section: "Visa & Migration",
    intro:
      "Special entry requirements that apply to particular categories of travelers.",
    sections: [
      {
        type: "paragraph",
        text: "In addition to the standard temporary visitor's visa, certain categories of travelers must comply with special requirements before entering the Philippines. Select the category that applies to you.",
      },
      {
        type: "links",
        links: [
          {
            label: "Minor children below 15 years travelling unaccompanied",
            href: "/visa-migration/minor-children",
          },
          {
            label: "Foreign newsmen, journalists & cinema / television groups",
            href: "/visa-migration/foreign-newsmen",
          },
          {
            label: "Short-term non-degree courses",
            href: "/visa-migration/short-term-courses",
          },
          {
            label: "Extension of authorized period of stay",
            href: "/visa-migration/extension-of-stay",
          },
        ],
      },
    ],
  },

  "minor-children": {
    slug: "minor-children",
    title: "Minor Children Traveling Unaccompanied",
    section: "Visa & Migration",
    intro:
      "For children below 15 years old traveling to the Philippines unaccompanied by, or not joining, a parent.",
    sections: [
      {
        type: "paragraph",
        text: "Children under fifteen (15) years of age going to the Philippines travelling alone or unaccompanied by parents (or to be accompanied during travel by an individual other than a parent), or not coming to join a parent in the Philippines, must comply with the following requirements:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Duly accomplished visa application form (Form No. 2) in duplicate. A parent, on behalf of the minor applicant, may accomplish this form.",
          "The minor's passport (the original passport itself must be submitted), which must be valid for at least six (6) months beyond the intended stay in the Philippines.",
          'Two 2" x 2" photographs of the minor taken within the last six (6) months.',
          "Affidavit of Request, Consent and Guaranty executed by either or both parents, duly notarized by a local Notary Public or by a consular officer of the Embassy or Consulate.",
        ],
      },
      {
        type: "note",
        text: "This Affidavit must be presented before immigration officials at the port of entry in the Philippines. Only upon presentation of the duly attested / notarized Affidavit will the Philippine Bureau of Immigration issue a Waiver of Exclusion Ground (W.E.G.) upon the minor's arrival in the Philippines.",
      },
      { type: "heading", text: "Additional Requirements" },
      {
        type: "list",
        items: [
          "Two photocopies of the data page of the passport of the accompanying guardian and the child.",
          "Original airline tickets together with a photocopy.",
        ],
      },
    ],
  },

  "foreign-newsmen": {
    slug: "foreign-newsmen",
    title: "Foreign Newsmen, Journalists & Film Crews",
    section: "Visa & Migration",
    intro:
      "Additional requirements for foreign newsmen, journalists and cinema / television groups.",
    sections: [
      {
        type: "paragraph",
        text: "Foreign newsmen and journalists visiting the Philippines for professional purposes must apply for a temporary visitor's visa with these additional requirements:",
      },
      { type: "heading", text: "Applicant Documentation" },
      {
        type: "list",
        ordered: true,
        items: [
          "Curriculum vitae of the newsman / journalist.",
          "Shortlist of work credits.",
          "Copy of one sample article written by the applicant.",
          "Background of the media organization, including target market / audience, circulation and format.",
        ],
      },
      { type: "heading", text: "Administrative Arrangements" },
      {
        type: "list",
        ordered: true,
        items: [
          "List of reportorial team members with nationality and passport details.",
          "Planned itinerary and activities, with a storyline for any films.",
          "List of equipment per team member, with certification for re-export.",
          "Flight details (arrival and departure).",
          '1" x 1" photograph per team member for International Press Center accreditation.',
        ],
      },
      {
        type: "paragraph",
        text: "Upon arrival in the Philippines, newsmen and journalists must report to the International Press Center (IPC) for accreditation.",
      },
    ],
  },

  "short-term-courses": {
    slug: "short-term-courses",
    title: "Short-Term Non-Degree Courses",
    section: "Visa & Migration",
    intro:
      "For foreign nationals attending short-term, non-degree courses such as language or computer training.",
    sections: [
      {
        type: "paragraph",
        text: "Foreign nationals seeking short-term non-degree courses like language and computer training must apply for a temporary visitor's visa. After arriving in the Philippines and gaining acceptance from a Bureau of Immigration-authorized school, applicants should request a Special Study Permit at the Bureau's Student Desk.",
      },
      { type: "heading", text: "Requirements" },
      {
        type: "list",
        items: [
          "Letter request.",
          "Certificate of Acceptance from a Bureau-accredited school.",
          "Photocopy of passport showing the period of stay.",
          "Affidavit of Support and proof of financial capacity.",
          "Birth Certificate.",
        ],
      },
    ],
  },

  "pilot-training": {
    slug: "pilot-training",
    title: "Pilot Training Visa",
    section: "Visa & Migration",
    intro:
      "Visa requirements for students attending an accredited Philippine air-flight training school.",
    sections: [
      { type: "heading", text: "Visa Requirement for Pilot Training" },
      {
        type: "list",
        ordered: true,
        items: [
          "The Philippine-based air-flight training school should be authorized or accredited by the Bureau of Immigration to accept foreign students.",
          "A letter of confirmation has to be received by the Philippine Embassy / Consulate, sent directly either by fax or email by the air-flight training school.",
          "The letter of confirmation should contain student details and course details.",
          "Proof of initial payment duly received by the Philippine-based air-flight training school.",
          "A copy of the bank transfer made by the student of an amount not less than US$ 7,000.",
          "Certification Letter from the Civil Aviation Authority of the Government of Nepal.",
          "Police clearance.",
          "Bank balances of parents / guardian along with the latest statement, with a minimum of NRs. 250,000.00 or equivalent to US$ 3,000.",
          "Visa application form filled up with one passport-size photo.",
          "Confirmed flight schedule.",
          "Visa fee NRs. 3,410 (deposit at Standard Chartered Bank, any branch).",
          "Original passport.",
        ],
      },
      {
        type: "note",
        text: "The visa form and bank deposit slip are available at the Philippine Consulate office. Please collect the bank deposit slip with the official stamp and signature of authorized staff of the Consulate.",
      },
      {
        type: "links",
        links: [
          {
            label: "View the list of accredited air-flight training schools",
            href: "/visa-migration/flight-training-schools",
          },
        ],
      },
    ],
  },

  "flight-training-schools": {
    slug: "flight-training-schools",
    title: "List of Air Flight Training Schools",
    section: "Visa & Migration",
    intro:
      "Air-flight training schools in the Philippines accredited to accept foreign students.",
    sections: [
      { type: "heading", text: "Guidelines for Pilot Training in the Philippines" },
      {
        type: "table",
        headers: ["S. No.", "Training School", "Responsible Person", "Designation"],
        rows: [
          ["1", "Ace Pilots Aviation Academy", "Capt. Paramjit Hehar", "VP Flight Operations"],
          ["", "", "Ms. Emllou Cruzin", "Registrar"],
          ["2", "Aeroflite Aviation Corporation", "Capt. Amel Miguel", "President / CEO"],
          ["", "", "Capt. Jerome John Valera", "COO"],
          ["", "", "Mr. Emerson Calderon", "Marketing & Student Affairs Officer"],
          ["3", "Aero International Aviation", "Capt. Reynan K. Fuentebekk", "CEO"],
          ["4", "Aeronavigation Academy International Philippines, Inc.", "", ""],
          ["5", "Aircrew Flight Training Academy", "", "President"],
          ["6", "All Asia Aviation Academy", "Mr. David Velasco", "President"],
          ["7", "Aviation Dynamics", "", ""],
          ["8", "Aviation Link Asia Training Center", "", ""],
          ["9", "Aviation Resource Group Flight Academy", "Capt. Romeo V. Layug", "CEO"],
          ["10", "Aviatour Inc.", "Mr. Kenneth Madrid", "EVP Global Sales & Marketing"],
          ["11", "AVPRO Flight & Training Center, Inc.", "", ""],
          ["12", "Axle Air Aviation Flying School", "", ""],
          ["13", "Clark Aviation Institute", "", ""],
          ["14", "Cyclone Flying School", "", ""],
          ["15", "Delta Air Aviation School, Inc.", "Capt. Jeremias L. Testado", "President / CEO"],
          ["16", "Eagle Air Academy, Inc.", "", ""],
          ["17", "Flight Dynamics School of Aeronautics", "Mr. Juanito M. Dela Cruz", "President"],
          ["18", "Flight School International", "Mrs. Crisolita S. Rebusi Navaro", ""],
          ["19", "Flight & Simulator Training, Inc.", "Mr. Ronaldo P. Moscardon", "Chairman & CEO"],
          ["20", "Fliteline Aviation", "Capt. Jeny E. Periada", "Operations Manager"],
          ["21", "Griffin Aviation Academy, Philippines", "Capt. Ramon V. Guico III", ""],
          ["22", "Mactan-Cebu Aero Flying Center Corporation", "Engr. Nerio M. Giangan", "Chairman of the Board"],
          ["23", "Manila Aero Club Flying Academy Inc.", "", ""],
          ["24", "Masters Flying School", "Capt. Ernesto Villa", "President"],
          ["25", "National Aviation Specialist Academy (NASA)", "Capt. Loed Michael Dela Torre", "President"],
          ["26", "Omni Aviation", "Mr. Benhur Gomez", "President"],
          ["", "", "Ms. Corazon Q. Guevarra", "General Manager"],
          ["27", "Orient Aviation Corporation", "Ms. Ellsa C. Cadingon", "Operations Manager"],
          ["28", "Pacific Pearl Airways Aviation School", "", ""],
          ["29", "Philippine Pilots Academy, Inc.", "", ""],
          ["30", "Philippine Pilot Training Center", "Mr. Dan Bahinting", "Director"],
          ["31", "South Wind Aviation Center", "Ms. Betty L. Milagrosa", "President"],
          ["32", "TMT Aviation School", "Mr. Reinerio Quiobe", "Board of Directors"],
          ["33", "Technoair Corporation", "", ""],
          ["34", "WCC Aviation Company, Inc.", "", ""],
          ["35", "WCC-Masters Flying School", "Capt. Ramon V. Guico III", "DPM-VP"],
          ["36", "World Aviation Corporation", "Capt. Michael John P. Reyes", "Director for Flight Operations / Chief Pilot"],
          ["37", "Visayas Aerospace College & Tech. Inc.", "", ""],
          ["38", "Yokota Aviation", "Mr. Narcico Ventura", "President & General Manager"],
        ],
      },
    ],
  },

  "student-visa-procedure": {
    slug: "student-visa-procedure",
    title: "Student Visa Procedures",
    section: "Visa & Migration",
    intro: "Step-by-step procedure in the issuance of a student visa.",
    sections: [
      { type: "heading", text: "Step 1" },
      {
        type: "paragraph",
        text: "A foreign student who is at least 18 years of age at the time of enrolment communicates directly with his choice of any Philippine Higher Education Institution (PHEI) authorized to admit foreign students, and complies with the school's institutional requirements, including submission of the following documents:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Original copy of the student's Personal History Statement duly signed by the applicant in English and in the national alphabet, with original left and right hand thumbprints and original photos.",
          "Transcript of scholastic records (original and photocopy), duly authenticated by the Philippine Embassy or Consulate in the applicant's country of origin or legal residence.",
          "Documentary proof of adequate financial support to cover the student's accommodation and subsistence, as well as school dues and other incidental expenses.",
          "Passport pages where name, photo, birth date and birthplace appear.",
          "Original copy of the Certificate of Eligibility for Admission (CEA) issued by CHED (required only for quota courses of study such as Medicine and Dentistry).",
        ],
      },
      { type: "heading", text: "Step 2" },
      {
        type: "paragraph",
        text: "The HEI, satisfied with the student's compliance with its requirements, issues a Notice of Acceptance (NOA) to the student and submits the original and photocopy to the Department of Foreign Affairs (DFA), together with all the documents, hand-carried to the DFA by the HEI's designated Liaison Officer.",
      },
      { type: "heading", text: "Step 3" },
      {
        type: "paragraph",
        text: "The DFA endorses the documents to the Philippine Embassy (or the Philippine Consulate General, as the case may be) located in the student's country of origin.",
      },
      { type: "heading", text: "Step 4" },
      {
        type: "paragraph",
        text: "The Embassy or Consulate awaits the personal appearance of the applicant before a consular officer for interview and compliance with consular requirements. In addition to the documents transmitted to the post by the DFA, students must submit the required documents to the Philippine Consulate in triplicate.",
      },
      { type: "heading", text: "Step 5" },
      {
        type: "paragraph",
        text: "The DFA notifies the HEI — copy furnished to CHED, BI, NICA and NBI — of the issuance of a student visa to the student as soon as it receives a report to this effect from the issuing post.",
      },
      { type: "heading", text: "Step 6" },
      {
        type: "paragraph",
        text: "Upon arrival in the Philippines, the student shall report immediately to the accepting HEI, which shall assist in obtaining the Alien Certificate of Registration (ACR) and Certificate of Residence for Temporary Students (CRTS) from the Bureau of Immigration (BI).",
      },
      {
        type: "note",
        text: "Processing time for visa applications takes at least seven (7) days from submission of complete requirements and receipt of payment for service fees. Payment of the visa fee does not guarantee that the visa will be issued / granted.",
      },
    ],
  },

  "student-visa-requirements": {
    slug: "student-visa-requirements",
    title: "Student Visa Requirements",
    section: "Visa & Migration",
    intro:
      "Documentary requirements for a Philippine student visa application.",
    sections: [
      { type: "heading", text: "Visa Application Form" },
      {
        type: "list",
        ordered: true,
        items: [
          "Visa application form fully completed in English — triplicate (F.A. Form No. 2).",
          "Passport-size colour photograph.",
          "Original and valid passport, valid for at least 6 months beyond the planned stay in the Philippines.",
          "Photocopy of the page of the passport with the applicant's data.",
        ],
      },
      { type: "heading", text: "Air Ticket" },
      {
        type: "list",
        items: ["Confirmed one-way air ticket and a photocopy of the confirmed air ticket."],
      },
      { type: "heading", text: "Medical Report" },
      {
        type: "list",
        items: [
          "Medical Certificate (F.A. Form No. 11) signed by a medical practitioner appointed by the Consulate of the Republic of the Philippines.",
          "Pathology test and medical reports.",
        ],
      },
      {
        type: "paragraph",
        text: "Dr. Ishowori Lal Shrestha · Sidhi Poly Clinic · Dillibazar, Kathmandu · Tel: 4410604",
      },
      {
        type: "list",
        items: [
          "Blood serology",
          "Urinalysis",
          "Stool analysis",
          "Full-size chest X-ray",
        ],
      },
      { type: "heading", text: "Police Clearance Report" },
      {
        type: "list",
        items: ["Police Clearance Certificate duly authenticated by a Notary Public."],
      },
      { type: "heading", text: "Affidavit of Financial Support" },
      {
        type: "list",
        items: ["Affidavit of Financial Support along with the latest bank statement of not less than Five Lakhs."],
      },
      { type: "heading", text: "Letter of Acceptance" },
      {
        type: "list",
        items: ["Sealed Letter of Acceptance from the respective university."],
      },
      { type: "heading", text: "Visa Fee" },
      {
        type: "list",
        items: [
          "Student visa fee of NRs. 28,400.00 to be deposited in Standard Chartered Bank Nepal Limited to the account of the Consulate of the Republic of the Philippines, Account No. 01-0209171-01.",
        ],
      },
      {
        type: "note",
        text: "Visa formalities take 7 or more days from the date of submission of all required documents. F.A. Forms No. 2 and 11 are available at the Consulate of the Republic of the Philippines, Kathmandu. The student visa must be applied for within 10 days of receiving approval from PCG Kathmandu.",
      },
    ],
  },

  "seaman-visa": {
    slug: "seaman-visa",
    title: "Seaman Visa",
    section: "Visa & Migration",
    intro:
      "Issued to persons entering the Philippines in the pursuit of their profession as seaman / airmen.",
    sections: [
      {
        type: "paragraph",
        text: "A seaman visa is issued to a person entering the Philippines in the pursuit of their profession as a seaman / airman. A seaman / airman coming to the Philippines to join a vessel should be properly documented for entry and admission into the Philippines.",
      },
      {
        type: "paragraph",
        text: "A list of all foreign nationals who are members of the crew of a foreign-registration vessel or aircraft proceeding to the Philippines must be submitted for the issuance of a crew list visa. No seaman or airman shall enter the Philippines as a member of a crew or aircraft unless his name appears on a crew list visa, or unless he is in possession of an appropriate individual 9(c) visa.",
      },
      { type: "heading", text: "Requirements" },
      {
        type: "list",
        ordered: true,
        items: [
          "Duly accomplished visa application (F.A. Form 2) in duplicate copies. If entering the Philippines with the vessel, a duly accomplished crew list visa form (F.A. Form 61) in duplicate copies. Incomplete forms will be returned to the applicant.",
          "Passport (the original passport itself must be submitted) valid for entry into the Philippines and the country of destination for a period of at least sixty (60) days, or possession of some additional document that is also valid.",
          'Two 2" x 2" photographs taken within the last six (6) months. The applicant\'s signature must be affixed on the front side of the picture.',
          "Original airline ticket together with a photocopy.",
          "The applicant's personal appearance is required. The applicant may be requested to submit additional documents.",
        ],
      },
      { type: "heading", text: "Payment of Visa Fee" },
      {
        type: "paragraph",
        text: "The visa fee for a seaman visa is NRs. 2,275.00, while the crew list visa fee for vessels is as follows:",
      },
      {
        type: "table",
        headers: ["Number of crew members", "Fee"],
        rows: [
          ["Not more than forty (40)", "NRs. 8,000.00"],
          ["Forty-one (41) to one hundred (100)", "NRs. 12,000.00"],
          ["One hundred one (101) to two hundred (200)", "NRs. 16,000.00"],
          ["In excess of two hundred (200)", "NRs. 20,000.00"],
        ],
      },
      {
        type: "note",
        text: "Processing time for visa applications takes at least three (3) days from submission of complete requirements and receipt of payment for service fees. Payment of the visa fee does not guarantee that the visa will be issued / granted.",
      },
    ],
  },

  "transit-visa": {
    slug: "transit-visa",
    title: "Transit Visa",
    section: "Visa & Migration",
    intro:
      "For travelers passing through the Philippines to reach another destination overseas.",
    sections: [
      {
        type: "paragraph",
        text: "A transit visa serves individuals passing through the Philippines to reach another destination overseas. Applicants must be travelling from one international location to another via the Philippines.",
      },
      { type: "heading", text: "Required Documentation" },
      {
        type: "list",
        ordered: true,
        items: [
          "Completed visa application (F.A. Form 2) — two copies; incomplete forms will be returned.",
          "Original passport valid for at least 60 days for both Philippine entry and destination-country travel.",
          'Two 2" x 2" photographs from the last 6 months with the applicant\'s signature on the front.',
          "Confirmed onward airline ticket (original and photocopy).",
          "Personal appearance at application.",
        ],
      },
      {
        type: "paragraph",
        text: "Visa Fee: NRs. 2,275.00 · Processing Time: minimum three (3) days from complete submission and payment receipt.",
      },
      {
        type: "note",
        text: "Issuance of a visa does not guarantee admission to the Philippines. Payment of the visa fee does not guarantee that the visa will be issued / granted.",
      },
    ],
  },

  "extension-of-stay": {
    slug: "extension-of-stay",
    title: "Extension of Authorized Stay",
    section: "Visa & Migration",
    intro:
      "Extending the authorized period of stay in the Philippines.",
    sections: [
      {
        type: "paragraph",
        text: "Temporary visitor visa holders whose stay exceeds the authorized duration must report to the Bureau of Immigration, obtain an extension, and remit the applicable fees.",
      },
      {
        type: "links",
        links: [
          {
            label: "Bureau of Immigration — fees & charges",
            href: "https://immigration.gov.ph",
          },
        ],
      },
    ],
  },

  "visa-fees": {
    slug: "visa-fees",
    title: "Visa Fees",
    section: "Visa & Migration",
    intro:
      "A consolidated schedule of visa fees. All fees are payable to the Consulate of the Republic of the Philippines.",
    sections: [
      { type: "heading", text: "Schedule of Fees" },
      {
        type: "table",
        headers: ["Visa Type", "Fee (NRs.)"],
        rows: [
          ["Temporary Visitor — single entry (3 months)", "3,410.00"],
          ["Temporary Visitor — multiple entry (12 months)", "10,225.00"],
          ["Student Visa", "28,400.00"],
          ["Pilot Training Visa", "3,410.00"],
          ["Seaman Visa", "2,275.00"],
          ["Transit Visa", "2,275.00"],
        ],
      },
      { type: "heading", text: "Crew List Visa (per vessel)" },
      {
        type: "table",
        headers: ["Number of crew members", "Fee (NRs.)"],
        rows: [
          ["Not more than forty (40)", "8,000.00"],
          ["Forty-one (41) to one hundred (100)", "12,000.00"],
          ["One hundred one (101) to two hundred (200)", "16,000.00"],
          ["In excess of two hundred (200)", "20,000.00"],
        ],
      },
      {
        type: "note",
        text: "Fees are deposited to the account of the Consulate of the Republic of the Philippines at Standard Chartered Bank Nepal Limited, Account No. 01-0209171-01. Payment of the visa fee does not guarantee that the visa will be issued / granted.",
      },
    ],
  },
};

/** Ordered slug list — used for static generation and prev/next helpers. */
export const visaSubpageSlugs = Object.keys(visaSubpages);
