import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/page/PlaceholderPage";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <PlaceholderPage
      eyebrow="Updates"
      title="News & Announcements"
      intro="The latest news, advisories and announcements from the Consulate General."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]}
    />
  );
}
