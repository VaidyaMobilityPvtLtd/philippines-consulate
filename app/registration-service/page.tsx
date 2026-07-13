import type { Metadata } from "next";
import { SectionLanding } from "@/components/page/SectionLanding";
import { findSection } from "@/lib/sections";

export const metadata: Metadata = { title: "Registration Service" };

export default function RegistrationServicePage() {
  return (
    <SectionLanding
      item={findSection("/registration-service")!}
      intro="Report a birth, death or marriage that occurred abroad for civil registration with the Philippine government."
    />
  );
}
