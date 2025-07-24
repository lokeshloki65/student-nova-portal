import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AttendanceManager } from "@/components/admin/attendance-manager";
import { MarksManager } from "@/components/admin/marks-manager";
import { AnnouncementPrioritizer } from "@/components/admin/announcement-prioritizer";
import { StudentManager } from "@/components/admin/student-manager";
import { TimetableManager } from "@/components/admin/timetable-manager";
import { STUDENTS, ADMIN_USER, TIMETABLE_DATA } from "@/lib/mock-data";
import { CalendarCheck, ClipboardList, Megaphone, Users, CalendarClock } from "lucide-react";

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome, {ADMIN_USER.name}.</p>
      </div>
      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-5">
          <TabsTrigger value="students"><Users className="mr-2" />Manage Students</TabsTrigger>
          <TabsTrigger value="attendance"><CalendarCheck className="mr-2" />Manage Attendance</TabsTrigger>
          <TabsTrigger value="marks"><ClipboardList className="mr-2" />Manage Marks</TabsTrigger>
          <TabsTrigger value="announcements"><Megaphone className="mr-2" />Announcements</TabsTrigger>
          <TabsTrigger value="timetable"><CalendarClock className="mr-2" />Manage Timetable</TabsTrigger>
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
         <TabsContent value="timetable">
          <TimetableManager timetable={TIMETABLE_DATA['Computer Science']['3']} />
        </TabsContent>
      </Tabs>
    </>
  );
}
