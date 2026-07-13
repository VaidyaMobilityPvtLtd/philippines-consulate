import type { PageContent } from "@/lib/types";

/** Traveling in Philippines sub-pages, keyed by slug. */
export const travelingPages: Record<string, PageContent> = {
  tourism: {
    slug: "tourism",
    title: "Tourism",
    section: "Traveling in Philippines",
    intro: "Beaches, heritage, wildlife and adventure across the Philippine archipelago.",
    sections: [
      {
        type: "paragraph",
        text: "The Philippines, the exceptionally beautiful archipelago nation in Southeast Asia, is blessed with an abundance of natural resources, a rich history, and a unique culture. The nation features islands, mountains, beaches, volcanoes, diving spots, and distinctive wildlife.",
      },
      { type: "heading", text: "Beaches" },
      {
        type: "paragraph",
        text: "The country possesses extensive coastlines with attractions including long white-sand beaches, an immense variety of marine life, and rare and exotic sea flora and fauna. Notable locations include White Beach on Boracay Island, Cebu, Panglao, Balicasag, Pamilacan, and Alona Beach.",
      },
      { type: "heading", text: "Heritage" },
      {
        type: "paragraph",
        text: "Spain's colonization of the Philippines brought about the construction of Intramuros in 1571, a walled city in Manila featuring European architecture and preserved medieval structures.",
      },
      { type: "heading", text: "Sports Tourism" },
      {
        type: "paragraph",
        text: "Activities include skydiving, hot-air balloons, board sailing, sea kayaking, and surfing at locations such as Baler, Infanta, and Daet.",
      },
      { type: "heading", text: "Wildlife" },
      {
        type: "paragraph",
        text: "Wildlife locations include the tarsier habitat in Bohol, Albay Park and Wildlife, the Crocodile Park, Tubbataha Reef National Marine Park, Olango Island, and the Ninoy Aquino Parks and Wildlife Nature Center.",
      },
      { type: "heading", text: "And More" },
      {
        type: "paragraph",
        text: "Mountain climbing, rock climbing, caving, mountain biking, golf courses, shopping, and the vibrant nightlife of Manila.",
      },
    ],
  },

  destinations: {
    slug: "destinations",
    title: "Eight Anchor Tourist Destinations",
    section: "Traveling in Philippines",
    intro: "Eight signature destinations that showcase the best of the Philippines.",
    sections: [
      { type: "heading", text: "Manila" },
      {
        type: "paragraph",
        text: "A microcosm of the rhythm of the islands. Named after a delicate white mangrove plant, this charming city lives as a silent witness to the country's turbulent history. Attractions include Intramuros, Corregidor, Rizal Park, the Cultural Center of the Philippines, Chinatown, and the urban centers of Makati and Ortigas.",
      },
      { type: "heading", text: "Cebu" },
      {
        type: "paragraph",
        text: "Called the 'Queen City of the South,' Cebu is the site of exciting business ventures between local and foreign capital. It offers beach resorts, museums, churches, and shopping — fashion accessories, handcrafted guitars, steel crafts, and local delicacies.",
      },
      { type: "heading", text: "Davao" },
      {
        type: "paragraph",
        text: "Known for its elegant orchids, exotic fruits and Muslim heritage, Davao is a bustling city teeming with cultural diversity. Notable attractions include Mt. Apo (the country's highest peak), bird sanctuaries, and Samal Island beach resorts.",
      },
      { type: "heading", text: "Baguio" },
      {
        type: "paragraph",
        text: "The country's summer capital, Baguio stands amidst the mountainous Cordillera region 1,500 m above sea level. The city offers cooler temperatures and attractions like Burnham Park, Camp John Hay, Lourdes Grotto, and Mines View Park, plus access to the Banaue Rice Terraces.",
      },
      { type: "heading", text: "Boracay" },
      {
        type: "paragraph",
        text: "Known far and wide as an island paradise, Boracay has charmed vacationers with its powder-white sand, crystal-blue waters and purposely laid-back pace, featuring water sports and diverse dining.",
      },
      { type: "heading", text: "Palawan" },
      {
        type: "paragraph",
        text: "An island of peace and quiet where it seems time has stood still. Home to over 80 cultural minority groups and unique wildlife including the Calamian deer, Palawan bearcat, and tarsier, plus white-sand beaches and dive sites.",
      },
      { type: "heading", text: "Bohol" },
      {
        type: "paragraph",
        text: "The country's tenth largest island, Bohol is a masterpiece of nature with its blend of pristine white beaches, wonderful dive sites, virgin forest and rolling hills. Famous for the Chocolate Hills and the Baclayon Church.",
      },
      { type: "heading", text: "Laoag / Vigan" },
      {
        type: "paragraph",
        text: "Time-locked Ilocos is a broad, hardy country blessed with impressive wide highways and stretches of narrow cobblestone roads, and antiquated towns dominated by heavily buttressed grand churches.",
      },
    ],
  },

  "visitor-guide": {
    slug: "visitor-guide",
    title: "Visitor Information",
    section: "Traveling in Philippines",
    intro: "Practical information for travelers to the Philippines.",
    sections: [
      { type: "heading", text: "Getting There" },
      {
        type: "paragraph",
        text: "Manila, Cebu, Davao, Clark, Subic, and Laoag serve as international gateways. The Ninoy Aquino International Airport (NAIA) in Manila is the premier gateway, served by more than 30 airlines. The Mactan International Airport in Cebu handles flights from Japan, Hong Kong, Singapore, Malaysia, Korea, and Australia. Major cruise liners call on the port of Manila.",
      },
      { type: "heading", text: "Entry Regulations" },
      {
        type: "paragraph",
        text: "A valid passport is required. Except for stateless persons and those from countries with which the Philippines has no diplomatic relations, most visitors may enter without a visa and stay for 21 days, provided they hold onward-journey tickets. Hong Kong and Taiwan passport holders require special permits obtainable from Philippine embassies and consulates.",
      },
      { type: "heading", text: "Health Regulations" },
      {
        type: "paragraph",
        text: "A certificate of vaccination against yellow fever is required for travelers coming from infected areas.",
      },
      { type: "heading", text: "Airport Information" },
      {
        type: "paragraph",
        text: "International airports provide duty-free and souvenir shops, tourist information counters, hotel and travel-agency representatives, car rental services, banks and ATMs, postal service, telephone booths, medical clinics, and baggage deposit areas. Airports are handicapped-friendly; wheelchairs are available on request. Visitors should complete Baggage Declaration Forms before disembarking.",
      },
      { type: "heading", text: "Climate & What to Wear" },
      {
        type: "paragraph",
        text: "March to May is hot and dry; June to October is rainy; November to February is cool. Average temperatures: 25°C to 32°C; humidity 77%. Light, casual clothes are recommended, with warmer garments for mountain regions. Church and temple visits require avoiding shorts and scanty clothing.",
      },
      { type: "heading", text: "Currency & Tipping" },
      {
        type: "paragraph",
        text: "Unit: Peso (P) = 100 centavos. Banknotes: P10, P20, P50, P100, P200, P500, P1,000. Tipping is expected for many services — the standard practice is 10% of the total bill, optional where a 10% service charge is already included.",
      },
      { type: "heading", text: "Local Transport" },
      {
        type: "paragraph",
        text: "Philippine Airlines, Cebu Pacific, and others provide daily service to major destinations. Interisland ships connect Manila to major ports, and ferries serve smaller islands. Metered and fixed-rate taxis are available in key cities; jeepneys and buses offer inexpensive transportation. Metro Manila's railway system includes the LRT-1, LRT-2, and MRT lines.",
      },
      { type: "heading", text: "Business & Banking Hours" },
      {
        type: "paragraph",
        text: "Private and government offices operate 8:00 a.m.–5:00 p.m. or 9:00 a.m.–6:00 p.m. Shopping malls, department stores, and supermarkets open 10:00 a.m.–8:00 p.m. daily. Banks: 9:00 a.m.–3:00 p.m., Monday–Friday; ATMs operate 24 hours. International credit cards (Visa, Diners Club, Mastercard, American Express) are accepted in major establishments.",
      },
      { type: "heading", text: "Electricity & Water" },
      {
        type: "paragraph",
        text: "220 volts, A.C., 60 cycles; most hotels have 110-volt outlets. Water in Metro Manila and key cities is potable; bottled water is widely available.",
      },
      { type: "heading", text: "Public Holidays" },
      {
        type: "paragraph",
        text: "New Year's Day (January 1); EDSA Revolution Day (February 24/25); Araw ng Kagitingan (April 9); Maundy Thursday and Good Friday (moveable); Labor Day (May 1); Independence Day (June 12); National Heroes Day (last Sunday of August); All Saints' Day (November 1); Bonifacio Day (November 30); Christmas Day (December 25); Rizal Day (December 30).",
      },
      { type: "heading", text: "Tourism Resources" },
      {
        type: "links",
        links: [
          { label: "Department of Tourism", href: "http://www.wowphilippines.com.ph/" },
          { label: "Philippine Tourism Authority", href: "http://www.philtourism.com/" },
          { label: "Duty Free Philippines", href: "http://www.dutyfree-philippines.com/" },
        ],
      },
    ],
  },

  jobs: {
    slug: "jobs",
    title: "Working in the Philippines",
    section: "Traveling in Philippines",
    intro: "Resources for finding work in the Philippines.",
    sections: [
      { type: "heading", text: "Job Search Resources" },
      {
        type: "links",
        links: [
          { label: "JobsOnline Philippines", href: "http://www.jobsonline.com.ph" },
          { label: "BestJobs Philippines", href: "http://www.bestjobs.ph/" },
          { label: "Phil-Job.net", href: "http://www.phil-job.net/" },
          { label: "PhilippineWorks", href: "http://www.philippineworks.com/" },
        ],
      },
    ],
  },

  accommodation: {
    slug: "accommodation",
    title: "Hotels & Accommodation",
    section: "Traveling in Philippines",
    intro: "Where to stay across the Philippines.",
    sections: [
      { type: "heading", text: "Hotels and Accommodation" },
      {
        type: "links",
        links: [
          { label: "AsiaRooms — Philippines", href: "http://www.asiarooms.com/philippines/index.html" },
          { label: "TravelMart — Philippines", href: "http://www.travelmart.net/philippines/index.html" },
          { label: "AsiaTravel — Philippines", href: "http://www.asiatravel.com/philippines.htm" },
          { label: "Phil Travel Center", href: "http://www.philtravelcenter.com/" },
          { label: "Philippine Hotel Network", href: "http://www.philippinehotel.net/" },
          { label: "iTravel Philippines", href: "http://www.itravelphilippines.net/" },
        ],
      },
    ],
  },
};
