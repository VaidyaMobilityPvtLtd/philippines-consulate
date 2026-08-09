import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminUser } from "@/lib/auth-server";

export default async function AdminConsoleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await requireAdminUser();
  return <AdminShell user={user}>{children}</AdminShell>;
}
