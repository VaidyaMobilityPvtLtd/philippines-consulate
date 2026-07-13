import type { Metadata } from "next";
import { SectionLanding } from "@/components/page/SectionLanding";
import { findSection } from "@/lib/sections";

export const metadata: Metadata = { title: "About Philippines" };

export default function AboutPhilippinesPage() {
  return (
    <SectionLanding
      item={findSection("/about-philippines")!}
      eyebrow="Discover"
      intro="Discover the Philippines — an overview of the country, its economy, foreign policy and trade relations."
    />
  );
}
