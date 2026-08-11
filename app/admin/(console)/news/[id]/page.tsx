import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsEditor } from "@/components/admin/NewsEditor";
import { AdminPageHeader } from "@/components/admin/ui";
import { cookies } from "next/headers";
import { getAdminNewsById } from "@/lib/admin-api";

type Props = { params: Promise<{ id: string }> };

export default async function AdminNewsEditPage({ params }: Props) {
  const { id } = await params;
  const cookieStore = await cookies();
  const adminToken = cookieStore.get("admin_token")?.value;
  const item = await getAdminNewsById(id, adminToken);

  if (!item) notFound();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Edit news"
        description={item.title}
        actions={
          <Link
            href="/admin/news"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Back to news
          </Link>
        }
      />
      <NewsEditor item={item} />
    </div>
  );
}
