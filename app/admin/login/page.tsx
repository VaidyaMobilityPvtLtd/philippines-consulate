import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-surface-muted">
          <p className="rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-ink-muted">
            Loading sign-in…
          </p>
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
