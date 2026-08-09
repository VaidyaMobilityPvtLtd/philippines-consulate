"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logoutAdmin } from "@/lib/admin-api";
import type { AdminUser } from "@/lib/api-types";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const nav: { href: string; label: string; exact?: boolean }[] = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/news", label: "News" },
  { href: "/admin/contact", label: "Contact" },
  { href: "/admin/feedback", label: "Feedback" },
];

function isActive(pathname: string, item: (typeof nav)[number]) {
  return item.exact
    ? pathname === item.href
    : pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function AdminShell({
  user,
  children,
}: {
  user: AdminUser;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function onLogout() {
    setLoggingOut(true);
    try {
      await logoutAdmin();
      router.replace("/admin/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  const demoMode = process.env.NEXT_PUBLIC_USE_API !== "true";

  return (
    <div className="min-h-screen bg-surface-muted">
      <header className="sticky top-0 z-40 border-b border-primary-dark/20 bg-primary text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
        <Container className="flex items-center justify-between gap-3 py-3 sm:gap-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt=""
              width={34}
              height={38}
              className="h-auto w-8 shrink-0 object-contain sm:w-[34px]"
            />
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold tracking-wide sm:text-[15px]">
                Consulate Admin
              </p>
              <p className="truncate text-[11px] text-white/70 sm:text-xs">
                {demoMode ? "Demo mode · local data" : "Internal content & inbox tools"}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-tight text-white">{user.name}</p>
              <p className="text-xs text-white/65">{user.email}</p>
            </div>
            <button
              type="button"
              onClick={onLogout}
              disabled={loggingOut}
              className="rounded-lg border border-white/25 bg-white/10 px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-white/20 disabled:opacity-60 sm:px-3 sm:text-sm"
            >
              {loggingOut ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </Container>
      </header>

      <Container className="grid gap-0 py-5 sm:py-6 lg:grid-cols-[220px_1fr] lg:gap-8 lg:py-8">
        {/* Mobile nav */}
        <nav
          aria-label="Admin sections"
          className="mb-5 -mx-1 overflow-x-auto px-1 lg:hidden"
        >
          <ul className="flex w-max gap-1 rounded-xl border border-line bg-surface p-1">
            {nav.map((item) => {
              const active = isActive(pathname, item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary text-white"
                        : "text-ink-soft hover:bg-primary-50 hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <nav
            aria-label="Admin sections"
            className="sticky top-[4.75rem] rounded-xl border border-line bg-surface p-2"
          >
            <p className="px-3 pb-2 pt-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
              Workspace
            </p>
            <ul className="space-y-0.5">
              {nav.map((item) => {
                const active = isActive(pathname, item);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary-50 text-primary"
                          : "text-ink-soft hover:bg-surface-muted hover:text-ink",
                      )}
                    >
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-primary"
                        />
                      ) : null}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 border-t border-line px-3 py-3">
              <Link
                href="/"
                className="text-xs font-medium text-primary transition-colors hover:text-primary-dark"
              >
                View public site
              </Link>
            </div>
          </nav>
        </aside>

        <main className="admin-page min-w-0">{children}</main>
      </Container>
    </div>
  );
}
