import type { PageContent } from "@/lib/types";
import { visaSubpages } from "./visa/subpages";
import { passportPages } from "./sections/passport";
import { registrationPages } from "./sections/registration";
import { aboutPhilippinesPages } from "./sections/about-philippines";
import { studyPages } from "./sections/study";
import { travelingPages } from "./sections/traveling";

/**
 * Single source of truth mapping each section route to its sub-page content.
 * To add or edit a page, edit the relevant file under `content/sections/`
 * (or `content/visa/subpages.ts`) — routing and rendering are automatic.
 */
export const sectionContent: Record<string, Record<string, PageContent>> = {
  "/visa-migration": visaSubpages,
  "/passport-service": passportPages,
  "/registration-service": registrationPages,
  "/about-philippines": aboutPhilippinesPages,
  "/study-in-philippines": studyPages,
  "/traveling-in-philippines": travelingPages,
};

/** Look up the content for a section sub-page, if any exists. */
export function getSectionPage(sectionHref: string, slug: string): PageContent | undefined {
  return sectionContent[sectionHref]?.[slug];
}
