import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AttendanceManager } from "@/components/admin/attendance-manager";
import { MarksManager } from "@/components/admin/marks-manager";
import { AnnouncementPrioritizer } from "@/components/admin/announcement-prioritizer";
import { StudentManager } from "@/components/admin/student-manager";
import { STUDENTS, ADMIN_USER } from "@/lib/mock-data";
import { CalendarCheck, ClipboardList, Megaphone, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome, {ADMIN_USER.name}.</p>
      </div>
      <Tabs defaultValue="attendance" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="students"><Users className="mr-2" />Manage Students</TabsTrigger>
          <TabsTrigger value="attendance"><CalendarCheck className="mr-2" />Manage Attendance</TabsTrigger>
          <TabsTrigger value="marks"><ClipboardList className="mr-2" />Manage Marks</TabsTrigger>
          <TabsTrigger value="announcements"><Megaphone className="mr-2" />Announcements</TabsTrigger>
        </TabsList>
        <TabsContent value="students">
            <StudentManager students={STUDENTS} />
        </TabsContent>
        <TabsContent value="attendance">
          <AttendanceManager students={STUDENTS} />
        </TabsContent>
        <TabsContent value="marks">
          <MarksManager students={STUDENTS} />
        </TabsContent>
        <TabsContent value="announcements">
          <AnnouncementPrioritizer students={STUDENTS} />
        </TabsContent>
      </Tabs>
    </>
  );
}
