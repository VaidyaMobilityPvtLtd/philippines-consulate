import type { Metadata } from "next";
import { ContentPage } from "@/components/page/ContentPage";
import { aboutNepalPage } from "@/content/sections/nepal";

export const metadata: Metadata = {
  title: aboutNepalPage.title,
  description: aboutNepalPage.intro,
};

export default function AboutNepalPage() {
  return (
    <ContentPage
      page={aboutNepalPage}
      eyebrow="Discover"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Nepal", href: "/about-nepal" },
      ]}
    />
  );
}
