import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { utilityNav } from "@/lib/navigation";

/**
 * Top white bar (desktop): emblem + search left, utility links right.
 * Kept compact to match Figma proportions.
 */
export function TopBar() {
  return (
    <div className="hidden bg-white xl:block">
      <Container className="flex items-center justify-between gap-8 py-2">
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <Logo variant="onLight" showWordmark={false} size={48} />
          <SearchBar className="w-full max-w-[360px] 2xl:max-w-[400px]" />
        </div>
        <nav aria-label="Utility navigation" className="shrink-0">
          <ul className="flex items-center gap-7 font-heading text-[12px] font-bold uppercase tracking-[0.04em] text-primary 2xl:gap-8">
            {utilityNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-70">
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
