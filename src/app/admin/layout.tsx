import { DashboardLayout } from "@/components/dashboard-layout";
import { ADMIN_USER } from "@/lib/mock-data";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout user={ADMIN_USER}>{children}</DashboardLayout>;
}
