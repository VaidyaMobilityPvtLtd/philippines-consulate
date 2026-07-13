import type { Metadata } from "next";
import { SectionLanding } from "@/components/page/SectionLanding";
import { findSection } from "@/lib/sections";

export const metadata: Metadata = { title: "Traveling in Nepal" };

export default function TravelingInNepalPage() {
  return (
    <SectionLanding
      item={findSection("/traveling-in-nepal")!}
      eyebrow="Discover"
      intro="Explore Nepal's destinations, from the Himalayas to its historic cities."
    />
  );
}
