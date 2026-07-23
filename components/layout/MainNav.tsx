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

function DesktopNavItem({
  item,
  pathname,
  index,
  total,
}: {
  item: NavItem;
  pathname: string;
  index: number;
  total: number;
}) {
  const active = isActive(pathname, item.href);
  const alignEnd = index >= total - 2;
  const base = cn(
    "inline-flex h-full w-full items-center justify-center gap-1 whitespace-nowrap px-2 text-center font-heading text-[12px] font-medium transition-colors 2xl:px-3 2xl:text-[13px]",
    active ? "bg-white text-primary" : "text-white hover:bg-white/10",
  );

  if (!item.children) {
    return (
      <li className="flex min-w-0 flex-1">
        <Link href={item.href} className={base}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative flex min-w-0 flex-1">
      <Link href={item.href} className={base} aria-haspopup="true">
        {item.label}
        <Icon
          name="chevronDown"
          size={12}
          className="opacity-70 transition-transform duration-200 group-hover:rotate-180"
        />
      </Link>

      <div
        className={cn(
          "pointer-events-none invisible absolute top-full z-50 w-[min(16.5rem,calc(100vw-2rem))] pt-1.5",
          alignEnd ? "right-0" : "left-0",
          "opacity-0 translate-y-1 transition-all duration-150 ease-out",
          "group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
        )}
      >
        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_10px_28px_rgba(20,24,40,0.12)]">
          <ul className="max-h-[min(22rem,70vh)] overflow-y-auto py-1.5">
            {item.children.map((child) => {
              const childActive = isActive(pathname, child.href);
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className={cn(
                      "block px-4 py-2.5 text-left text-[13px] leading-snug transition-colors",
                      childActive
                        ? "bg-primary-50 font-semibold text-primary"
                        : "text-ink-soft hover:bg-surface-muted hover:text-ink",
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-line">
            <Link
              href={item.href}
              className="block px-4 py-2.5 text-left text-[12px] font-semibold text-primary transition-colors hover:bg-surface-muted"
            >
              View all in {item.label}
            </Link>
          </div>
        </div>
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
    <li className="border-b border-white/10 last:border-b-0">
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "flex-1 py-3 font-heading text-[15px] font-medium",
            active ? "text-white" : "text-white/82",
          )}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            className="p-3 text-white/70 hover:bg-white/10"
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
                className="block py-2 pl-4 text-sm text-white/72 transition-colors hover:bg-white/8 hover:text-white"
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
    <div className="bg-primary text-white">
      <Container className="flex items-stretch justify-between">
        {/* Compact logo (below xl, where the top bar is hidden) */}
        <Logo variant="onDark" showWordmark={false} size={36} className="py-2 xl:hidden" />

        {/* Desktop primary nav — evenly spans full width (aligns with Downloads) */}
        <nav aria-label="Primary navigation" className="hidden min-w-0 flex-1 xl:block">
          <ul className="flex h-10 w-full items-stretch">
            {mainNav.map((item, index) => (
              <DesktopNavItem
                key={item.href}
                item={item}
                pathname={pathname}
                index={index}
                total={mainNav.length}
              />
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="p-2 text-white hover:bg-white/10 xl:hidden"
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={24} />
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 xl:hidden">
          <Container className="pb-4 pt-4">
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
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-heading text-[11px] font-bold uppercase tracking-[0.06em] text-white/68">
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
