import { ContactInbox } from "@/components/admin/ContactInbox";
import { AdminPageHeader } from "@/components/admin/ui";
import { loadAdminContacts } from "@/lib/admin-data-server";

export default async function AdminContactPage() {
  const items = await loadAdminContacts();
  const newCount = items.filter((i) => i.status === "new").length;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Contact inbox"
        description={
          newCount > 0
            ? `${newCount} new ${newCount === 1 ? "inquiry" : "inquiries"} waiting for review.`
            : "Inquiries submitted through the public contact form."
        }
      />
      <ContactInbox items={items} />
    </div>
  );
}
