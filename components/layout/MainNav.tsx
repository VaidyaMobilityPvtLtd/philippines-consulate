"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { Icon } from "@/components/icons";
import { mainNav, utilityNav } from "@/lib/navigation";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/** Desktop nav node: active renders as a white "tab", plus a hover dropdown. */
function DesktopNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);
  const base = cn(
    "inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
    active ? "bg-surface text-primary shadow-sm" : "text-white/90 hover:bg-white/10 hover:text-white",
  );

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={base}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative">
      <Link href={item.href} className={base} aria-haspopup="true">
        {item.label}
        <Icon name="chevronDown" size={13} className="transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="w-64 overflow-hidden rounded-xl border border-line bg-surface py-2 shadow-card-hover">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={cn(
                  "block px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-primary-50 hover:text-primary",
                  isActive(pathname, child.href) && "bg-primary-50 text-primary",
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

/** Mobile accordion item. */
function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = isActive(pathname, item.href);

  return (
    <li className="border-b border-white/10">
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn("flex-1 py-3 text-[15px] font-medium", active ? "text-white" : "text-white/85")}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            className="p-3 text-white/70"
          >
            <Icon name="chevronDown" size={18} className={cn("transition-transform", open && "rotate-180")} />
          </button>
        )}
      </div>
      {item.children && open && (
        <ul className="pb-2">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block py-2 pl-4 text-sm text-white/70 hover:text-white"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function MainNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-primary text-white shadow-[0_2px_8px_rgba(20,31,99,0.18)]">
      <Container className="flex items-center justify-between gap-4">
        {/* Compact logo (below xl, where the top bar is hidden) */}
        <Logo variant="onDark" showWordmark className="py-3 xl:hidden" />

        {/* Desktop primary nav */}
        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-0.5 py-2">
            {mainNav.map((item) => (
              <DesktopNavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-white hover:bg-white/10 xl:hidden"
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={24} />
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden">
          <Container className="pb-4">
            <SearchBar className="mb-4 w-full" />
            <ul>
              {mainNav.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-wide text-white/70">
              {utilityNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </div>
  );
}
