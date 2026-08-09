import Link from "next/link";
import { NewsTable } from "@/components/admin/NewsTable";
import { AdminPageHeader } from "@/components/admin/ui";
import { loadAdminNews } from "@/lib/admin-data-server";

export default async function AdminNewsPage() {
  const items = await loadAdminNews();

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
      <NewsTable items={items} />
    </div>
  );
}
