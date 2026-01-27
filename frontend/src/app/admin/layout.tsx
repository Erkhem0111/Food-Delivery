import type { PropsWithChildren } from "react";
import { AdminSidebar } from "./_components/AdminSidebar";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      {children}
    </div>
  );
}
