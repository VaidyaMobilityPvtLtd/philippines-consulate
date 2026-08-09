import Link from "next/link";
import { NewsEditor } from "@/components/admin/NewsEditor";
import { AdminPageHeader } from "@/components/admin/ui";

export default function AdminNewsCreatePage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Create news"
        description="Publish a new notice to the public site."
        actions={
          <Link
            href="/admin/news"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Back to news
          </Link>
        }
      />
      <NewsEditor />
    </div>
  );
}
