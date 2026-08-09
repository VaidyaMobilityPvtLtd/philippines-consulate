"use client";

import { InboxTable } from "@/components/admin/InboxTable";
import { updateFeedbackStatus } from "@/lib/admin-api";
import type { FeedbackSubmission, SubmissionStatus } from "@/lib/api-types";

export function FeedbackInbox({ items }: { items: FeedbackSubmission[] }) {
  return (
    <InboxTable
      emptyLabel="No feedback submissions yet"
      emptyDescription="Suggestions and comments from the public feedback form will appear here."
      rows={items.map((item) => {
        const name = [item.firstName, item.lastName].filter(Boolean).join(" ");
        return {
          id: item.id,
          status: item.status,
          createdAt: item.createdAt,
          title: item.subject || item.type || "Feedback",
          subtitle: `${name} · ${item.email}`,
          meta: [item.type, item.city, item.country, item.phone]
            .filter(Boolean)
            .join(" · "),
          body: item.message,
        };
      })}
      onStatusChange={(id: string, status: SubmissionStatus) =>
        updateFeedbackStatus(id, status).then(() => undefined)
      }
    />
  );
}
