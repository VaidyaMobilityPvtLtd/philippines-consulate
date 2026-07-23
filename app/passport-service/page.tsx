import type { Metadata } from "next";
import { SectionHub } from "@/components/page/SectionHub";

export const metadata: Metadata = {
  title: "Passport Services",
  description:
    "Apply for a new Philippine passport, renew an existing one, or replace a lost or cancelled passport at the Consulate General in Kathmandu.",
};

export default function PassportServicePage() {
  return (
    <SectionHub
      eyebrow="Consular Services"
      title="Passport Services"
      intro="Apply for a new passport, renew an existing one, or report a lost or cancelled Philippine passport."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Passport Services", href: "/passport-service" },
      ]}
      highlights={[
        { label: "Services", value: "4 passport topics", icon: "passport" },
        { label: "Where", value: "Consulate · Kathmandu", icon: "mapPin" },
        { label: "Forms", value: "Downloads available", icon: "download" },
        { label: "Help", value: "Contact for appointments", icon: "phone" },
      ]}
      introEyebrow="Philippine passport"
      introTitle="Choose the service that matches your situation"
      introBody={[
        "Whether you need a first passport, a renewal, or help after a loss, start with the matching topic below. Each page lists the documents and steps required.",
        "Bring complete supporting documents to avoid delays. If you are unsure which process applies, contact the Consulate first.",
      ]}
      startHere={[
        { label: "New passport requirements", href: "/passport-service/new-passport" },
        { label: "Renew an existing passport", href: "/passport-service/renewal" },
        { label: "Forms & downloads", href: "/downloads" },
      ]}
      topicsHeading="Passport topics"
      topicsIntro="Select your case to see requirements and guidance."
      topics={[
        {
          title: "New Passport",
          description: "First-time applicants — documents, photos, and application steps.",
          href: "/passport-service/new-passport",
          icon: "passport",
          featured: true,
          cta: "View requirements",
        },
        {
          title: "Passport Renewal",
          description: "Renew before expiry with the required forms and old passport.",
          href: "/passport-service/renewal",
          icon: "document",
          accent: "bg-flag-yellow text-ink",
        },
        {
          title: "Lost Passport",
          description: "Report a loss and apply for a replacement with supporting affidavits.",
          href: "/passport-service/lost-passport",
          icon: "alert",
          accent: "bg-flag-red",
        },
        {
          title: "Passport Cancellation",
          description: "Cancel a Philippine passport when required by consular rules.",
          href: "/passport-service/cancellation",
          icon: "info",
          accent: "bg-primary-dark",
        },
      ]}
      relatedIntro="Other consular services you may need."
      related={[
        {
          title: "Civil Registration",
          description: "Report of birth, marriage, or death for Filipino citizens abroad.",
          href: "/registration-service",
          icon: "registration",
        },
        {
          title: "Visa & Migration",
          description: "Visa categories and entry guidance for travel to the Philippines.",
          href: "/visa-migration",
          icon: "visa",
        },
        {
          title: "Contact Us",
          description: "Hours, location, and how to reach the Consulate in Kathmandu.",
          href: "/contact",
          icon: "phone",
        },
      ]}
      helpTitle="Questions about your passport application?"
      helpBody="The Consulate can confirm which process fits your case and which documents to bring."
    />
  );
}
