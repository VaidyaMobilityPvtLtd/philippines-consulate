/**
 * Shared content & config types for the Philippine Consulate General site.
 * The content model is intentionally generic so every inner page can be
 * described as data and rendered by a single <ContentRenderer />.
 */

export type IconName =
  | "business"
  | "student"
  | "pilot"
  | "seaman"
  | "transit"
  | "document"
  | "passport"
  | "registration"
  | "aboutPh"
  | "study"
  | "travel"
  | "nepal"
  | "visa"
  | "globe"
  | "search"
  | "menu"
  | "close"
  | "chevronDown"
  | "chevronRight"
  | "arrowRight"
  | "external"
  | "mapPin"
  | "phone"
  | "mail"
  | "clock"
  | "alert"
  | "download"
  | "calendar"
  | "info"
  | "image";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** A single link with a label. */
export interface LinkItem {
  label: string;
  href: string;
  /** external links open in a new tab */
  external?: boolean;
}

/* ------------------------------------------------------------------ */
/* Generic page-content model (drives every data-rendered inner page) */
/* ------------------------------------------------------------------ */

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string }
  | { type: "links"; links: LinkItem[] }
  | { type: "image"; url: string; alt?: string; caption?: string };

export interface PageContent {
  slug: string;
  title: string;
  /** short lead paragraph shown under the page title */
  intro?: string;
  /** grouping label, e.g. "Visa & Migration" — used for breadcrumbs */
  section?: string;
  /** optional hero image shown in the page banner */
  heroImage?: string;
  sections: ContentBlock[];
}

/* ------------------------------------------------------------------ */
/* Home / landing building blocks                                      */
/* ------------------------------------------------------------------ */

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

export interface QuickLink {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  links?: LinkItem[];
}

export interface ServiceGroup {
  title: string;
  icon?: IconName;
  items: LinkItem[];
}

export interface PillGroup {
  title: string;
  items: LinkItem[];
}

/** "These passport holders can stay longer without a visa" */
export interface StayCategory {
  days: number;
  label: string;
  countries: string[];
}
