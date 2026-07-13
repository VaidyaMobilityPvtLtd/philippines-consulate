import type { Metadata } from "next";
import { SectionLanding } from "@/components/page/SectionLanding";
import { findSection } from "@/lib/sections";

export const metadata: Metadata = { title: "Passport Service" };

export default function PassportServicePage() {
  return (
    <SectionLanding
      item={findSection("/passport-service")!}
      intro="Apply for a new passport, renew an existing one, or report a lost or cancelled passport."
    />
  );
}
