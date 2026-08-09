import { ContactInbox } from "@/components/admin/ContactInbox";
import { AdminPageHeader } from "@/components/admin/ui";
import { cookies } from "next/headers";
import { ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import type { ContactSubmission } from "@/lib/api-types";

export default async function AdminContactPage() {
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  let items: ContactSubmission[] = [];
  if (token) {
    try {
      const res = await fetch(`${baseUrl}/api/admin/contact`, {
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
