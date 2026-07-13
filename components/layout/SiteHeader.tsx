import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";

/** Sticky site header: utility strip + primary navigation. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainNav />
    </header>
  );
}
