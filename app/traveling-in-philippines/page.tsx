import type { Metadata } from "next";
import { SectionHub } from "@/components/page/SectionHub";

export const metadata: Metadata = {
  title: "Traveling in Philippines",
  description:
    "Tourism highlights, destinations, visitor information, work resources, and accommodation for travelers to the Philippines.",
};

export default function TravelingInPhilippinesPage() {
  return (
    <SectionHub
      eyebrow="Travel & Tourism"
      title="Traveling in the Philippines"
      intro="Beaches, heritage cities, island destinations, and practical visitor guidance for your trip."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Traveling in Philippines", href: "/traveling-in-philippines" },
      ]}
      highlights={[
        { label: "Destinations", value: "8 anchor highlights", icon: "mapPin" },
        { label: "Climate", value: "Tropical year-round", icon: "globe" },
        { label: "Entry", value: "Check visa rules first", icon: "visa" },
        { label: "Stay", value: "Hotels & lodging links", icon: "travel" },
      ]}
      introEyebrow="Plan your visit"
      introTitle="From inspiration to practical trip details"
      introBody={[
        "Explore tourism highlights and signature destinations, then use visitor information for practical travel tips. Working and accommodation pages list useful external resources.",
        "Confirm visa and entry requirements before you book — start with Visa & Migration if you are traveling from Nepal.",
      ]}
      startHere={[
        { label: "Tourism overview", href: "/traveling-in-philippines/tourism" },
        { label: "Top destinations", href: "/traveling-in-philippines/destinations" },
        { label: "Visa & entry", href: "/visa-migration" },
      ]}
      topicsHeading="Travel topics"
      topicsIntro="Browse tourism, destinations, visitor tips, work, and lodging."
      topics={[
        {
          title: "Tourism",
          description:
            "Beaches, heritage, wildlife, and adventure across the archipelago.",
          href: "/traveling-in-philippines/tourism",
          icon: "travel",
          featured: true,
          cta: "Explore tourism",
        },
        {
          title: "Tourist Destinations",
          description: "Eight signature destinations that showcase the best of the country.",
          href: "/traveling-in-philippines/destinations",
          icon: "mapPin",
          accent: "bg-flag-yellow text-ink",
        },
        {
          title: "Visitor Information",
          description: "Practical information for travelers — arrival, tips, and basics.",
          href: "/traveling-in-philippines/visitor-guide",
          icon: "info",
          accent: "bg-flag-blue",
        },
        {
          title: "Working in the Philippines",
          description: "Resources for finding work and understanding employment context.",
          href: "/traveling-in-philippines/jobs",
          icon: "business",
          accent: "bg-primary",
        },
        {
          title: "Hotels & Accommodation",
          description: "Where to stay — lodging links and visitor references.",
          href: "/traveling-in-philippines/accommodation",
          icon: "document",
          accent: "bg-primary-dark",
        },
      ]}
      relatedIntro="Pair travel inspiration with entry rules and country context."
      related={[
        {
          title: "Visa & Migration",
          description: "Visa categories, visa-free entry, and application guidance.",
          href: "/visa-migration",
          icon: "visa",
        },
        {
          title: "About the Philippines",
          description: "People, geography, and country overview.",
          href: "/about-philippines",
          icon: "aboutPh",
        },
        {
          title: "Study in Philippines",
          description: "Considering a longer stay for education?",
          href: "/study-in-philippines",
          icon: "study",
        },
      ]}
      helpTitle="Planning a trip from Nepal?"
      helpBody="Confirm visa requirements first, then use visitor information for arrival and travel tips."
      helpActions={[
        { label: "Visa & Migration", href: "/visa-migration", variant: "onDark" },
        { label: "Contact us", href: "/contact", variant: "ghostDark" },
      ]}
    />
  );
}
