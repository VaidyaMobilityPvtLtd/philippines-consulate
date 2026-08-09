"use client";

import { InboxTable } from "@/components/admin/InboxTable";
import { updateContactStatus } from "@/lib/admin-api";
import type { ContactSubmission, SubmissionStatus } from "@/lib/api-types";

export function ContactInbox({ items }: { items: ContactSubmission[] }) {
  return (
    <InboxTable
      emptyLabel="No contact submissions yet"
      emptyDescription="Messages from the public contact form will appear here for review."
      rows={items.map((item) => ({
        id: item.id,
        status: item.status,
        createdAt: item.createdAt,
        title: item.subject,
        subtitle: `${item.name} · ${item.email}`,
        meta: `Topic: ${item.topic}${item.phone ? ` · ${item.phone}` : ""}`,
        body: item.message,
      }))}
      onStatusChange={(id: string, status: SubmissionStatus) =>
        updateContactStatus(id, status).then(() => undefined)
      }
    />
  );
}
