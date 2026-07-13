import type { Metadata } from "next";
import { ContentPage } from "@/components/page/ContentPage";
import { aboutUsPage } from "@/content/sections/about-us";

export const metadata: Metadata = {
  title: aboutUsPage.title,
  description: aboutUsPage.intro,
};

export default function AboutUsPage() {
  return (
    <ContentPage
      page={aboutUsPage}
      eyebrow="The Consulate"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
      ]}
    />
  );
}
