import type { PageContent } from "@/lib/types";

/** About Philippines sub-pages, keyed by slug. (foreign-policy, trade-policy
 *  and directory had no content on the source site and fall back to a
 *  placeholder until content is supplied.) */
export const aboutPhilippinesPages: Record<string, PageContent> = {
  overview: {
    slug: "overview",
    title: "The Philippines at a Glance",
    section: "About Philippines",
    intro: "An introduction to the Philippines — its people, geography, climate and government.",
    sections: [
      {
        type: "paragraph",
        text: "The visitor to Metro Manila commonly sees the Philippines as the most westernized of Asian countries, and in many ways it is. But there is also a rich underlay of Malay culture beneath the patina of Spanish and American heritage. National cultural life is a happy marriage of many influences, as the indigenous Malay culture is assimilated and adapted to different strains.",
      },
      {
        type: "paragraph",
        text: "The Philippines is an archipelago of 7,107 islands. It stretches from the south of China to the northern tip of Borneo. The country has over a hundred ethnic groups and a mixture of foreign influences which have moulded a unique Filipino culture.",
      },
      {
        type: "paragraph",
        text: "Before the Spanish explorers came, Indo-Malays and Chinese merchants had settled here. In 1521, the Spaniards, led by Ferdinand Magellan, discovered the islands. The Spanish conquistadores established a colonial government in Cebu in 1565, transferred the seat of government to Manila in 1571, and proceeded to colonize the country. The Filipinos resisted and waged Asia's first nationalist revolution in 1896. On June 12, 1898, Emilio Aguinaldo declared the Philippines independent from Spain. After ruling for 333 years, the Spaniards left in 1898 and were replaced by the Americans, who stayed for 48 years. On July 4, 1946, the Americans recognized Philippine independence.",
      },
      {
        type: "paragraph",
        text: "The Philippines is the third largest English-speaking country in the world. It is divided into three geographical areas: Luzon, Visayas, and Mindanao. It has 17 regions, 81 provinces, 118 cities, 1,510 municipalities, and 41,995 barangays. (A barangay is the smallest political unit into which cities and municipalities are divided — the basic unit of the Philippine political system.)",
      },
      { type: "heading", text: "Location" },
      {
        type: "paragraph",
        text: "The Philippine archipelago is composed of 7,107 islands, with a land area of 299,764 sq. kilometers. Its length measures 1,850 kilometers, starting from a point near the southern tip of Taiwan and ending close to northern Borneo; its breadth is about 965 kilometers. It is bounded by the South China Sea to the west, the Pacific Ocean to the east, the Sulu and Celebes Seas to the south, and the Bashi Channel to the north.",
      },
      {
        type: "paragraph",
        text: "Strategically located in the Asia-Pacific region, the Philippines is readily accessible from the major travel centers of the world. Travel time from Hong Kong to Manila is 1 hour and 20 minutes; from Singapore, 3 hours; Bangkok, 3 hours; Tokyo, 3 hours 35 minutes; Sydney, 7 hours 40 minutes; London, 14 hours; Frankfurt, 14 hours; San Francisco, 11 hours 50 minutes. Manila is the country's capital and main port city; Cebu, in the south, is the second international gateway.",
      },
      { type: "heading", text: "Time Zone and Currency" },
      {
        type: "paragraph",
        text: "GMT + 8 hours. Unit of currency: Peso (P) = 100 centavos. Bank notes: P10, P20, P50, P100, P200, P500 and P1,000. Coins: 5c, 10c, 25c, P1, P5, P10.",
      },
      { type: "heading", text: "Climate" },
      {
        type: "paragraph",
        text: "The Philippines has two very different climate zones. In the coastal and lowland areas there is a typically tropical marine climate: hot and humid throughout most of the year. In the highest elevations of 1,200 meters and above the climate can be cold. There are three pronounced seasons: the wet or rainy season from June to October; the cool, dry season from November to February; and the hot, dry season from March to May. Typhoons are prevalent in the rainy season. The temperature in Manila ranges from 21°C to 32°C, with a 27°C average and average humidity of 77%.",
      },
      { type: "heading", text: "People" },
      {
        type: "paragraph",
        text: "The Filipino is basically of Malay stock with a sprinkling of Chinese, American, Spanish and Arab blood. From a long history of Western colonial rule, interspersed with the visits of merchants and traders, evolved a people of a unique blend of east and west, both in appearance and culture. The Filipinos are divided geographically and culturally into regions, each recognizable by distinct traits and dialects — the sturdy and frugal Ilocanos of the north, the industrious Tagalogs of the central plains, the carefree Visayans from the central islands, and the colorful tribesmen and religious Muslims of Mindanao. Ethnic groups: Christian Malay 91.5%, Muslim Malay 4%, Chinese 1.5%, other 3%.",
      },
      { type: "heading", text: "Language" },
      {
        type: "paragraph",
        text: "The national language is Filipino, although there are at least 87 regional languages. English is widely spoken and understood and is used for most business and legal transactions. The eight major dialects spoken by the majority of Filipinos are Tagalog, Cebuano, Ilocano, Hiligaynon (Ilonggo), Bicol, Waray, Pampango, and Pangasinense.",
      },
      { type: "heading", text: "Religion" },
      {
        type: "paragraph",
        text: "Some 80 percent of the population is Catholic, Spain's lasting legacy. About 15 percent is Muslim, found basically in Mindanao. The rest is made up mostly of smaller Christian denominations and Buddhists.",
      },
      { type: "heading", text: "Literacy" },
      {
        type: "paragraph",
        text: "The country has one of the most highly educated populations in Southeast Asia, with a literacy rate of 94.6%. English is widely spoken and used extensively in business, government, and education.",
      },
      { type: "heading", text: "Government and Political System" },
      {
        type: "paragraph",
        text: "The Philippines is a presidential, representative, and democratic republic, whereby the president is both head of state and head of government within a multi-party system. It has three separate and interdependent branches: the legislative (law-making), the executive (law-enforcing), and the judicial (law-interpreting). Legislative power is vested in a two-chamber Congress — the Senate (upper chamber) and the House of Representatives (lower chamber). Judicial power is vested in the courts, with the Supreme Court as the highest judicial body. Provinces are headed by governors; cities and municipalities by mayors; and the barangays by barangay chairpersons.",
      },
      { type: "heading", text: "International Organization Participation" },
      {
        type: "paragraph",
        text: "APEC, ARF, AsDB, ASEAN, FAO, IAEA, IBRD, ICAO, ILO, IMF, IMO, Interpol, IOC, IOM, ISO, ITU, NAM, OAS (observer), UN, UNCTAD, UNESCO, UNHCR, UNIDO, UPU, WHO, WIPO, WMO, WToO, WTrO, among others.",
      },
    ],
  },

  economy: {
    slug: "economy",
    title: "Economy",
    section: "About Philippines",
    intro: "An overview of the Philippine economy and economic plan.",
    sections: [
      { type: "heading", text: "Overview" },
      {
        type: "paragraph",
        text: "Due to the combined effect of the Asian financial crisis and poor weather conditions, GDP growth in 1998 fell to about -0.5% from 5% in 1997, but recovered to about 3% in 1999 and 3.6% in 2000.",
      },
      {
        type: "paragraph",
        text: "The Philippine Economic Plan emphasizes macroeconomic stability as essential for investment and growth. It integrates fiscal and monetary policies aimed at maintaining sound finances, controlling inflation, and supporting healthy account balances, together with governance guidelines to ensure sustained reform effectiveness. Economic performance improved significantly, with GDP reaching 4.2% in Q1 2005 and climbing to 5.4% by the end of 2006.",
      },
      { type: "heading", text: "Sources" },
      {
        type: "links",
        links: [
          { label: "National Economic and Development Authority", href: "http://www.neda.gov.ph/" },
          { label: "Official Gazette of the Republic of the Philippines", href: "http://www.gov.ph/" },
        ],
      },
    ],
  },
};
