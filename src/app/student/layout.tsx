import { DashboardLayout } from "@/components/dashboard-layout";
import { STUDENTS } from "@/lib/mock-data";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const student = STUDENTS[0];
  return <DashboardLayout user={student}>{children}</DashboardLayout>;
}
