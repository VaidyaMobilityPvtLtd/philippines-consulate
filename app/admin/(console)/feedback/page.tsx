import { FeedbackInbox } from "@/components/admin/FeedbackInbox";
import { AdminPageHeader } from "@/components/admin/ui";
import { cookies } from "next/headers";
import { ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import type { FeedbackSubmission } from "@/lib/api-types";

export default async function AdminFeedbackPage() {
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  let items: FeedbackSubmission[] = [];
  if (token) {
    try {
      const res = await fetch(`${baseUrl}/api/admin/feedback`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        items = data.items || [];
      }
    } catch {}
  }

  const newCount = items.filter((i) => i.status === "new").length;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Feedback inbox"
        description={
          newCount > 0
            ? `${newCount} new item${newCount === 1 ? "" : "s"} waiting for review.`
            : "Suggestions and comments from the public feedback form."
        }
      />
      <FeedbackInbox items={items} />
    </div>
  );
}
