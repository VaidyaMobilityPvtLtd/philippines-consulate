import { AdminShell } from "@/components/admin/AdminShell";
import { fetchAdminMe } from "@/lib/admin-api";
import { cookies } from "next/headers";


export default async function AdminConsoleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const adminToken = cookieStore.get("admin_token")?.value;

  const { user } = await fetchAdminMe(adminToken);
  return <AdminShell user={user}>{children}</AdminShell>;
}
