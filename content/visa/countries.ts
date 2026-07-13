import type { StayCategory } from "@/lib/types";

/** Standard visa-free stay (in days) for the countries listed below. */
export const standardStayDays = 21;

/**
 * Nationals of these countries traveling for business or tourism may enter
 * the Philippines visa-free for a stay not exceeding 21 days (valid return
 * ticket + passport valid ≥6 months beyond the stay required).
 * Source: Philippine Consulate General visa guidelines.
 */
export const visaFreeCountries: string[] = [
  "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Australia",
  "Austria", "Bahamas", "Bahrain", "Barbados", "Belgium", "Benin", "Bhutan",
  "Bolivia", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Central African Republic", "Chad", "Chile", "Colombia", "Comoros", "Congo",
  "Costa Rica", "Cote d'Ivoire", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guatemala",
  "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "Indonesia", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Kenya", "Kiribati", "Kuwait", "Lao People's Democratic Republic", "Latvia",
  "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Norway", "Oman",
  "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Poland",
  "Portugal", "Qatar", "Republic of Korea", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Seychelles", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "Spain", "Suriname", "Swaziland", "Sweden",
  "Switzerland", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Tuvalu", "Uganda", "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United Republic of Tanzania", "United States of America", "Uruguay",
  "Venezuela", "Vietnam", "Zambia", "Zimbabwe",
];

/**
 * Special passport categories with a different visa-free period. Shown in the
 * "stay longer without a visa" panel on the landing page.
 */
export const stayCategories: StayCategory[] = [
  {
    days: 59,
    label: "59 days",
    countries: ["Brazil", "Israel"],
  },
  {
    days: 7,
    label: "7 days",
    countries: [
      "Hong Kong SAR passport",
      "British National Overseas (BNO) passport",
      "Portuguese passport issued in Macao",
      "Macao SAR passport",
    ],
  },
];
