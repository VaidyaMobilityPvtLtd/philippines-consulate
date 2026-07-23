import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";
import { HoursBar } from "./HoursBar";

/**
 * Site header: sticky nav only; hours strip sits below and scrolls away
 * (keeps the sticky bar compact, like DFA post sites).
 */
export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(20,24,31,0.06)]">
        <TopBar />
        <MainNav />
      </header>
      <HoursBar />
    </>
  );
}
