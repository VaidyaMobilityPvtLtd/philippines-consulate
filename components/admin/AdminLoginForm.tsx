"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formatApiError, loginAdmin } from "@/lib/admin-api";
import { MOCK_ADMIN_CREDENTIALS } from "@/lib/admin-mock";
import { adminFieldClass, adminLabelClass } from "@/components/admin/ui";
import { Container } from "@/components/ui/Container";

const showDemoHint = process.env.NEXT_PUBLIC_USE_API !== "true";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const data = new FormData(e.currentTarget);
    try {
      await loginAdmin(
        String(data.get("email") ?? "").trim(),
        String(data.get("password") ?? ""),
      );
      const next = searchParams.get("next");
      router.replace(next && next.startsWith("/admin") ? next : "/admin");
      router.refresh();
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-muted py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,#2e3192_0%,#22246c_55%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2e3192 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <Container className="admin-fade-in relative flex justify-center">
        <div className="w-full max-w-[420px]">
          <div className="mb-6 text-center text-white">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt=""
                width={40}
                height={44}
                className="object-contain"
              />
            </div>
            <h1 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
              Consulate Admin
            </h1>
            <p className="mt-1 text-sm text-white/75">
              Sign in to manage news and inboxes
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
            {showDemoHint ? (
              <div className="mb-5 rounded-lg border border-primary-100 bg-primary-50 px-3.5 py-3 text-sm">
                <p className="font-medium text-primary">Demo login (offline)</p>
                <p className="mt-1 font-mono text-[13px] text-ink-soft">
                  {MOCK_ADMIN_CREDENTIALS.email}
                  <span className="mx-1.5 text-ink-muted">/</span>
                  {MOCK_ADMIN_CREDENTIALS.password}
                </p>
              </div>
            ) : null}

            {error ? (
              <div
                role="alert"
                className="mb-4 rounded-lg border border-notice-border bg-notice-bg px-3.5 py-2.5 text-sm text-notice-ink"
              >
                {error}
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className={adminLabelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="username"
                  defaultValue={showDemoHint ? MOCK_ADMIN_CREDENTIALS.email : undefined}
                  className={adminFieldClass}
                  placeholder="admin@consulate.local"
                />
              </div>
              <div>
                <label htmlFor="password" className={adminLabelClass}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  defaultValue={showDemoHint ? MOCK_ADMIN_CREDENTIALS.password : undefined}
                  className={adminFieldClass}
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="mt-1 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
              >
                {pending ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </div>

          <p className="mt-5 text-center text-xs text-ink-muted">
            Consulate General of the Philippines · Kathmandu
          </p>
        </div>
      </Container>
    </div>
  );
}
