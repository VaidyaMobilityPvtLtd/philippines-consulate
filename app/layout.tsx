import type { Metadata } from "next";
import { Roboto_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/lib/site";

/** Primary / display — Figma brand font for titles & nav emphasis */
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

/** Body — open, readable companion for paragraphs, forms, and UI copy */
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.location}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.tagline,
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${robotoCondensed.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
