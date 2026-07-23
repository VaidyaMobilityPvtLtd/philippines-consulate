import type { Metadata } from "next";
import { SectionHub } from "@/components/page/SectionHub";

export const metadata: Metadata = {
  title: "Study in Philippines",
  description:
    "Why international students choose the Philippines, university directories, and guidance for Nepalese applicants.",
};

export default function StudyInPhilippinesPage() {
  return (
    <SectionHub
      eyebrow="Education"
      title="Study in the Philippines"
      intro="English-medium programs, established universities, and practical guidance for students considering the Philippines."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Study in Philippines", href: "/study-in-philippines" },
      ]}
      highlights={[
        { label: "Language", value: "English-medium study", icon: "study" },
        { label: "Directory", value: "Universities & colleges", icon: "document" },
        { label: "Visa", value: "Student visa required", icon: "visa" },
        { label: "Support", value: "Consulate guidance", icon: "info" },
      ]}
      introEyebrow="For prospective students"
      introTitle="Plan your studies with clear next steps"
      introBody={[
        "Start with general information about studying in the Philippines, then browse universities and colleges. When you are ready to apply, review student visa requirements.",
        "The Consulate can help with visa questions; admissions and enrollment are handled by each school.",
      ]}
      startHere={[
        { label: "General information", href: "/study-in-philippines/overview" },
        { label: "Universities & colleges", href: "/study-in-philippines/universities" },
        { label: "Student visa", href: "/visa-migration/student-visa-requirements" },
      ]}
      topicsHeading="Study topics"
      topicsIntro="Learn about studying in the Philippines and find institutions."
      topics={[
        {
          title: "General Information",
          description:
            "Why the Philippines is a leading destination for international students.",
          href: "/study-in-philippines/overview",
          icon: "study",
          featured: true,
          cta: "Read overview",
        },
        {
          title: "Universities & Colleges",
          description: "A directory of colleges and universities across the country.",
          href: "/study-in-philippines/universities",
          icon: "document",
          accent: "bg-flag-yellow text-ink",
        },
        {
          title: "Historical Data",
          description: "Background figures and context on education and student mobility.",
          href: "/study-in-philippines/historical-data",
          icon: "calendar",
          accent: "bg-primary",
        },
      ]}
      relatedIntro="After you shortlist schools, prepare entry and travel."
      related={[
        {
          title: "Student Visa",
          description: "Requirements for studying in the Philippines.",
          href: "/visa-migration/student-visa-requirements",
          icon: "visa",
        },
        {
          title: "Visitor Information",
          description: "Practical tips for arriving and getting around.",
          href: "/traveling-in-philippines/visitor-guide",
          icon: "travel",
        },
        {
          title: "About the Philippines",
          description: "Country overview before you travel for studies.",
          href: "/about-philippines",
          icon: "aboutPh",
        },
      ]}
      helpTitle="Questions about studying in the Philippines?"
      helpBody="We can point you to student visa guidance and consular requirements. School admissions are handled by each institution."
      helpActions={[
        { label: "Contact us", href: "/contact", variant: "onDark" },
        {
          label: "Student visa",
          href: "/visa-migration/student-visa-requirements",
          variant: "ghostDark",
        },
      ]}
    />
  );
}
