import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { utilityNav } from "@/lib/navigation";

/**
 * Top white bar (desktop): emblem + search on the left, utility links on the
 * right. Matches the Figma header. Hidden below xl, where MainNav shows a
 * compact logo + hamburger instead.
 */
export function TopBar() {
  return (
    <div className="hidden border-b border-line bg-surface xl:block">
      <Container className="flex items-center justify-between gap-6 py-3">
        <div className="flex items-center gap-5">
          <Logo variant="onLight" showWordmark className="hidden 2xl:flex" />
          <Logo variant="onLight" showWordmark={false} className="flex 2xl:hidden" />
          <SearchBar className="w-72 2xl:w-80" />
        </div>
        <nav aria-label="Utility navigation">
          <ul className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-primary">
            {utilityNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-primary-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
