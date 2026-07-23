import type { Metadata } from "next";
import { SectionHub } from "@/components/page/SectionHub";

export const metadata: Metadata = {
  title: "Registration Service",
  description:
    "Report of birth, death, and marriage for Filipino citizens abroad — civil registration at the Consulate General in Kathmandu.",
};

export default function RegistrationServicePage() {
  return (
    <SectionHub
      eyebrow="Consular Services"
      title="Registration Service"
      intro="Register births, marriages, and deaths involving Filipino citizens abroad through the Consulate General in Kathmandu."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Registration Service", href: "/registration-service" },
      ]}
      highlights={[
        { label: "Reports", value: "Birth · Marriage · Death", icon: "registration" },
        { label: "Who", value: "Filipino citizens abroad", icon: "info" },
        { label: "Forms", value: "Available in Downloads", icon: "download" },
        { label: "Next step", value: "Prepare documents first", icon: "document" },
      ]}
      introEyebrow="Civil registration"
      introTitle="Report life events to Philippine civil records"
      introBody={[
        "Filipino citizens abroad should report births, marriages, and deaths so records remain accurate with Philippine authorities.",
        "Each report type has its own checklist. Open the matching topic, gather the required documents, then contact the Consulate to proceed.",
      ]}
      startHere={[
        { label: "Report of Birth", href: "/registration-service/report-of-birth" },
        { label: "Report of Marriage", href: "/registration-service/report-of-marriage" },
        { label: "Forms & downloads", href: "/downloads" },
      ]}
      topicsHeading="Registration topics"
      topicsIntro="Choose the report that matches your situation."
      topics={[
        {
          title: "Report of Birth",
          description:
            "Register the birth abroad of a child whose parent is a Filipino citizen.",
          href: "/registration-service/report-of-birth",
          icon: "registration",
          featured: true,
          cta: "View requirements",
        },
        {
          title: "Report of Marriage",
          description: "Register a marriage contracted abroad by a Filipino citizen.",
          href: "/registration-service/report-of-marriage",
          icon: "document",
          accent: "bg-flag-yellow text-ink",
        },
        {
          title: "Report of Death",
          description: "Register the death abroad of a Filipino citizen.",
          href: "/registration-service/report-of-death",
          icon: "info",
          accent: "bg-flag-red",
        },
      ]}
      relatedIntro="Related consular services."
      related={[
        {
          title: "Passport Services",
          description: "New passport, renewal, lost passport, and cancellation.",
          href: "/passport-service",
          icon: "passport",
        },
        {
          title: "Downloads",
          description: "Forms and guides for consular applications.",
          href: "/downloads",
          icon: "download",
        },
        {
          title: "Contact Us",
          description: "Ask which documents apply to your case.",
          href: "/contact",
          icon: "phone",
        },
      ]}
      helpTitle="Need help with a civil registration?"
      helpBody="Contact the Consulate before you visit so you bring the correct supporting documents."
    />
  );
}
