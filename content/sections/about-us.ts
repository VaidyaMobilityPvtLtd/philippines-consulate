import type { PageContent } from "@/lib/types";

/** The "About Us" standalone page. */
export const aboutUsPage: PageContent = {
  slug: "about-us",
  title: "About Us",
  section: "The Consulate",
  intro:
    "The Consulate of the Republic of the Philippines in Kathmandu serves Filipino nationals and strengthens ties between the Philippines and Nepal.",
  sections: [
    { type: "heading", text: "The Consul General" },
    {
      type: "paragraph",
      text: "Mr. Suraj Vaidya serves as the Consul General of the Philippines for Nepal.",
    },
    {
      type: "paragraph",
      text: "The Consulate of the Republic of the Philippines provides consular assistance to Filipino nationals in Nepal and facilitates travel, trade, education and cultural exchange between the two countries.",
    },
    { type: "heading", text: "Contact Person" },
    { type: "paragraph", text: "Mr. Subin Shrestha — Administrative Officer" },
    { type: "heading", text: "General Opening Hours" },
    { type: "paragraph", text: "Monday – Friday: 9:00 AM – 3:00 PM (Lunch break: 1:00 PM – 2:00 PM)" },
    {
      type: "links",
      links: [{ label: "Contact the Consulate", href: "/contact" }],
    },
  ],
};
