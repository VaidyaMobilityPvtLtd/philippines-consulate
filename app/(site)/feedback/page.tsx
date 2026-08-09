import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeedbackForm } from "@/components/page/FeedbackForm";
import { heroImages } from "@/lib/hero-images";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Share your suggestions and comments with the Consulate General of the Philippines.",
};

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="We value your input"
        title="Feedback"
        intro="Have a suggestion or comment? Let us know how we can serve you better."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Feedback", href: "/feedback" },
        ]}
        imageSrc={heroImages.feedback.src}
        imageAlt={heroImages.feedback.alt}
      />
      <Section>
        <div className="max-w-3xl">
          <FeedbackForm />
        </div>
      </Section>
    </>
  );
}
