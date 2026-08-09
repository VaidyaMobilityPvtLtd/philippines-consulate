import Link from "next/link";
import { cookies } from "next/headers";
import { NewsTable } from "@/components/admin/NewsTable";
import { AdminPageHeader } from "@/components/admin/ui";
import { NewsItem } from "@/lib/api-types";
import { listAdminNews } from "@/lib/admin-api";

export default async function AdminNewsPage() {
  const cookieStore = await cookies();
  const adminToken = cookieStore.get("admin_token")?.value;

  const { items } = await listAdminNews(adminToken);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="News"
        description="Create, edit, publish, and remove public announcements."
        actions={
          <Link
            href="/admin/news/new"
            className="inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            New item
          </Link>
        }
      />
      <NewsTable token={adminToken} initialItems={items} />
    </div>
  );
}