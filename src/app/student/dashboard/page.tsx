import { AttendanceCard } from "@/components/student/attendance-card";
import { MarksCard } from "@/components/student/marks-card";
import { AnnouncementsCard } from "@/components/student/announcements-card";
import { STUDENTS, ATTENDANCE_DATA, MARKS_DATA, ANNOUNCEMENTS } from "@/lib/mock-data";

export default function StudentDashboard() {
  const student = STUDENTS[0];
  const attendance = ATTENDANCE_DATA[student.id];
  const marks = MARKS_DATA.find(m => m.studentId === student.id);
  const announcements = ANNOUNCEMENTS.filter(a => a.for_department === 'All' || a.for_department === student.department);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome, {student.name}!</h1>
        <p className="text-muted-foreground">Here's your academic summary.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
            <AttendanceCard attendanceRecords={attendance} />
        </div>
        <MarksCard marks={marks} />
        <div className="lg:col-span-2 xl:col-span-3">
            <AnnouncementsCard announcements={announcements} />
        </div>
      </div>
    </>
  );
}
