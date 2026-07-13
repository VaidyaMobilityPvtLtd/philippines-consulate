import type { Metadata } from "next";
import { SectionLanding } from "@/components/page/SectionLanding";
import { findSection } from "@/lib/sections";

export const metadata: Metadata = { title: "Traveling in Philippines" };

export default function TravelingInPhilippinesPage() {
  return (
    <SectionLanding
      item={findSection("/traveling-in-philippines")!}
      eyebrow="Discover"
      intro="Plan your trip to the Philippines with tourism highlights, visitor information and a guide to accommodation."
    />
  );
}
