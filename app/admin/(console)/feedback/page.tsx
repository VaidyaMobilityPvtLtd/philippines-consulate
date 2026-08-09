import { FeedbackInbox } from "@/components/admin/FeedbackInbox";
import { AdminPageHeader } from "@/components/admin/ui";
import { loadAdminFeedback } from "@/lib/admin-data-server";

export default async function AdminFeedbackPage() {
  const items = await loadAdminFeedback();
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
