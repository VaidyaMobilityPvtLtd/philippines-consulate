import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/page/PlaceholderPage";

export const metadata: Metadata = { title: "Downloads" };

export default function DownloadsPage() {
  return (
    <PlaceholderPage
      eyebrow="Forms & Documents"
      title="Downloads"
      intro="Downloadable visa application forms, affidavits and other consular documents."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Downloads", href: "/downloads" }]}
    />
  );
}
