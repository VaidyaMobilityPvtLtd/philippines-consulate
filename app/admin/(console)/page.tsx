import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/ui";
import {
  loadAdminContacts,
  loadAdminFeedback,
  loadAdminNews,
} from "@/lib/admin-data-server";
import { isApiEnabled } from "@/lib/config";

function formatRelative(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function AdminDashboardPage() {
  const [newsItems, contactItems, feedbackItems] = await Promise.all([
    loadAdminNews(),
    loadAdminContacts(),
    loadAdminFeedback(),
  ]);

  const newsCount = newsItems.length;
  const publishedCount = newsItems.filter((n) => n.published).length;
  const draftCount = newsCount - publishedCount;
  const contactNew = contactItems.filter((c) => c.status === "new").length;
  const feedbackNew = feedbackItems.filter((f) => f.status === "new").length;

  const recentNews = [...newsItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  const recentInbox = [
    ...contactItems.map((c) => ({
      id: `c-${c.id}`,
      kind: "Contact" as const,
      title: c.subject,
      meta: c.name,
      at: c.createdAt,
      status: c.status,
      href: "/admin/contact",
    })),
    ...feedbackItems.map((f) => ({
      id: `f-${f.id}`,
      kind: "Feedback" as const,
      title: f.subject || f.type || "Feedback",
      meta: [f.firstName, f.lastName].filter(Boolean).join(" ") || f.email,
      at: f.createdAt,
      status: f.status,
      href: "/admin/feedback",
    })),
  ]
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, 5);

  const cards = [
    {
      label: "News items",
      value: String(newsCount),
      hint: `${publishedCount} published · ${draftCount} draft`,
      href: "/admin/news",
    },
    {
      label: "Contact — new",
      value: String(contactNew),
      hint: `${contactItems.length} total submissions`,
      href: "/admin/contact",
      emphasis: contactNew > 0,
    },
    {
      label: "Feedback — new",
      value: String(feedbackNew),
      hint: `${feedbackItems.length} total submissions`,
      href: "/admin/feedback",
      emphasis: feedbackNew > 0,
    },
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Overview"
        description="Manage public news and review consular inquiries from one place."
        actions={
          <Link
            href="/admin/news/new"
            className="inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Create news
          </Link>
        }
      />

      {!isApiEnabled() ? (
        <p className="rounded-lg border border-primary-100 bg-primary-50 px-4 py-3 text-sm text-primary">
          Demo mode — data is local to this server process and resets when the app restarts.
        </p>
      ) : null}

      <section aria-label="Summary">
        <div className="grid gap-3 sm:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-primary-200 hover:bg-primary-50/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                {card.label}
              </p>
              <p
                className={`mt-2 font-heading text-3xl font-semibold tracking-tight ${
                  card.emphasis ? "text-primary" : "text-ink"
                }`}
              >
                {card.value}
              </p>
              <p className="mt-1 text-sm text-ink-soft group-hover:text-ink">
                {card.hint}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section aria-labelledby="recent-news-heading">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2
              id="recent-news-heading"
              className="font-heading text-lg font-semibold text-ink"
            >
              Recent news
            </h2>
            <Link
              href="/admin/news"
              className="text-xs font-semibold text-primary hover:text-primary-dark"
            >
              View all
            </Link>
          </div>
          {recentNews.length === 0 ? (
            <p className="rounded-xl border border-dashed border-line-strong bg-surface px-4 py-6 text-sm text-ink-muted">
              No news items yet.{" "}
              <Link href="/admin/news/new" className="font-semibold text-primary hover:underline">
                Create one
              </Link>
              .
            </p>
          ) : (
            <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
              {recentNews.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/admin/news/${item.id}`}
                    className="flex items-start justify-between gap-3 px-4 py-3 transition-colors hover:bg-surface-muted/80"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink">{item.title}</p>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        {formatRelative(item.date)} · {item.category}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                        item.published
                          ? "bg-primary-50 text-primary ring-1 ring-inset ring-primary-100"
                          : "bg-surface-sunken text-ink-muted ring-1 ring-inset ring-line"
                      }`}
                    >
                      {item.published ? "Live" : "Draft"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="recent-inbox-heading">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2
              id="recent-inbox-heading"
              className="font-heading text-lg font-semibold text-ink"
            >
              Latest inbox
            </h2>
            <div className="flex gap-3 text-xs font-semibold">
              <Link href="/admin/contact" className="text-primary hover:text-primary-dark">
                Contact
              </Link>
              <Link href="/admin/feedback" className="text-primary hover:text-primary-dark">
                Feedback
              </Link>
            </div>
          </div>
          {recentInbox.length === 0 ? (
            <p className="rounded-xl border border-dashed border-line-strong bg-surface px-4 py-6 text-sm text-ink-muted">
              No inbox messages yet.
            </p>
          ) : (
            <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
              {recentInbox.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-start justify-between gap-3 px-4 py-3 transition-colors hover:bg-surface-muted/80"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                        {item.kind}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-ink">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        {item.meta} · {formatRelative(item.at)}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                        item.status === "new"
                          ? "bg-primary-50 text-primary ring-1 ring-inset ring-primary-100"
                          : item.status === "read"
                            ? "bg-surface-sunken text-ink-soft ring-1 ring-inset ring-line"
                            : "bg-surface-muted text-ink-muted ring-1 ring-inset ring-line"
                      }`}
                    >
                      {item.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
