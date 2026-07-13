/**
 * Global site configuration: identity + contact details.
 * Contact details are transcribed from the Consulate's website.
 */

export const site = {
  name: "Consulate General of the Philippines",
  shortName: "Philippine Consulate",
  location: "Kathmandu, Nepal",
  tagline:
    "Serving Filipino nationals and facilitating travel, trade and cultural ties between the Philippines and Nepal.",
  consulGeneral: "Mr. Suraj Vaidya",
  contact: {
    address: "Ananda Nagar, Dhumbarahi, Kathmandu, Nepal · P.O. Box 2640",
    phone: "+977-1-4008801 to 05, 4008799",
    fax: "+977-1-4008813, 4008770",
    email: "philcongen@voith.com.np",
    hours: "Monday – Friday, 9:00 AM – 3:00 PM (Lunch 1:00 – 2:00 PM)",
    bank: "Standard Chartered Bank Nepal Limited · A/C 01-0209171-01",
  },
  external: {
    immigration: "https://immigration.gov.ph",
    government: "https://www.gov.ph",
    visitNepal: "https://visitnepal2020.com/",
  },
} as const;

export type Site = typeof site;
