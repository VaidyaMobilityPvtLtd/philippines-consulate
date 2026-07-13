import { mainNav } from "./navigation";
import type { NavItem } from "./types";

/** Look up a top-level nav section by its href (e.g. "/passport-service"). */
export function findSection(href: string): NavItem | undefined {
  return mainNav.find((item) => item.href === href);
}
