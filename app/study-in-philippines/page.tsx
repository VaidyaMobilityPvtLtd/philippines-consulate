import type { Metadata } from "next";
import { SectionLanding } from "@/components/page/SectionLanding";
import { findSection } from "@/lib/sections";

export const metadata: Metadata = { title: "Study in Philippines" };

export default function StudyInPhilippinesPage() {
  return (
    <SectionLanding
      item={findSection("/study-in-philippines")!}
      eyebrow="Discover"
      intro="Information for students planning to study in the Philippines, including universities and guidance for Nepalese students."
    />
  );
}
