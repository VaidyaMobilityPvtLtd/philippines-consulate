import type { PageContent } from "@/lib/types";

/** Study in Philippines sub-pages, keyed by slug. */
export const studyPages: Record<string, PageContent> = {
  overview: {
    slug: "overview",
    title: "General Information",
    section: "Study in Philippines",
    intro: "Why the Philippines is a leading destination for international students.",
    sections: [
      {
        type: "paragraph",
        text: "For students interested in studying abroad in Southeast Asia, the Philippines is one of the great destinations, hard to beat. Some 5,000 foreign students study in the Philippines. Few countries in Asia can match the country when it comes to providing quality education and fun at the same time.",
      },
      {
        type: "paragraph",
        text: "As the world's third largest English-speaking nation, the Philippines provides huge knowledge resources, up-to-date instruction, and a multicultural learning atmosphere with its 93.9% literacy rate. It is home to a number of ISO-certified universities and 275 higher-education institutions identified as Centers of Excellence and Centers of Development.",
      },
      {
        type: "paragraph",
        text: "The business and accounting schools in the country adhere to the US Generally Accepted Accounting Principles (GAAP) and International Financial Reporting Standards (IFRS), while the engineering and marine schools are included in the APEC Engineer Registry and the International Maritime Organization (IMO) white list. Students are also guaranteed training from more than 115,000 teachers with master's and doctorate degrees.",
      },
      {
        type: "paragraph",
        text: "Foreign students do not only get the chance of earning an excellent education — they also find ways of enjoying their stay in the Philippines. After serious lessons in their classrooms, they can relax by swimming, surfing, diving, and snorkeling on numerous pristine beaches, or unwind at heritage sites such as the man-made rice terraces, marine parks, mountains, and underground rivers.",
      },
      {
        type: "paragraph",
        text: "The Philippines is known for its people's hospitality and joyfulness. Visitors everywhere marvel at the way they are treated in each place they visit, and enjoy the many festivals held in every locality, reflecting the country's rich and diverse culture and traditions.",
      },
      {
        type: "links",
        links: [
          { label: "Student Visa Requirements", href: "/visa-migration/student-visa-requirements" },
          { label: "Student Visa Procedures", href: "/visa-migration/student-visa-procedure" },
        ],
      },
    ],
  },

  universities: {
    slug: "universities",
    title: "Colleges & Universities",
    section: "Study in Philippines",
    intro: "A directory of colleges and universities in the Philippines.",
    sections: [
      { type: "heading", text: "List of Colleges and Universities" },
      {
        type: "links",
        links: [
          { label: "Asia Pacific College", href: "http://www.apc.edu.ph" },
          { label: "Ateneo de Manila University", href: "http://www.admu.edu.ph" },
          { label: "Ateneo de Naga", href: "http://www.adn.edu.ph/" },
          { label: "Ateneo de Zamboanga", href: "http://www.adzu.edu.ph" },
          { label: "De La Salle University", href: "http://www.dlsu.edu.ph/" },
          { label: "MSU-Iligan Institute of Technology", href: "http://www.msuiit.edu.ph/" },
          { label: "Philippine Women's University", href: "http://www.pwu.edu/" },
          { label: "University of the Philippines (Diliman)", href: "http://www.upd.edu.ph/" },
          { label: "University of the Philippines System", href: "http://www.up.edu.ph/" },
          { label: "University of the Philippines (Los Baños)", href: "http://www.uplb.edu.ph/" },
          { label: "University of San Carlos", href: "http://www.usc.edu.ph" },
          { label: "University of St. La Salle", href: "http://www.usls.edu/" },
          { label: "Xavier University (Ateneo de Cagayan)", href: "http://www.xu.edu.ph/" },
        ],
      },
      { type: "heading", text: "Top 20 Universities in the Philippines" },
      {
        type: "list",
        ordered: true,
        items: [
          "University of the Philippines – Diliman",
          "University of Santo Tomas",
          "Mindanao State University – Iligan Institute of Technology",
          "University of the Philippines – Los Baños",
          "Mindanao State University – Marawi",
          "Ateneo de Davao University",
          "Ateneo de Manila University",
          "Silliman University",
          "University of San Carlos",
          "Saint Louis University",
          "University of the Philippines – Manila",
          "De La Salle University – Manila",
          "Pamantasan ng Lungsod ng Maynila",
          "Xavier University",
          "University of Negros Occidental",
          "University of Southern Philippines",
          "Polytechnic University of the Philippines",
          "Mapúa Institute of Technology",
          "Central Mindanao University",
          "Adamson University",
        ],
      },
      {
        type: "note",
        text: "Ranked according to the study conducted by the Professional Regulation Commission (PRC) and the Commission on Higher Education (CHED).",
      },
    ],
  },
};
