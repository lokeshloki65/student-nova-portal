import { AttendanceCard } from "@/components/student/attendance-card";
import { MarksCard } from "@/components/student/marks-card";
import { AnnouncementsCard } from "@/components/student/announcements-card";
import { TimetableCard } from "@/components/student/timetable-card";
import { STUDENTS, ATTENDANCE_DATA, MARKS_DATA, ANNOUNCEMENTS, TIMETABLE_DATA } from "@/lib/mock-data";

export default function StudentDashboard() {
  const student = STUDENTS[0];
  const attendance = ATTENDANCE_DATA[student.id];
  const marks = MARKS_DATA.find(m => m.studentId === student.id);
  const announcements = ANNOUNCEMENTS.filter(a => a.for_department === 'All' || a.for_department === student.department);
  const timetable = TIMETABLE_DATA[student.department]?.[student.year];

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome, {student.name}!</h1>
        <p className="text-muted-foreground">Here's your academic summary.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <TimetableCard timetable={timetable} />
        </div>
        <MarksCard marks={marks} />
        <AttendanceCard attendanceRecords={attendance} />
        <div className="lg:col-span-2">
            <AnnouncementsCard announcements={announcements} />
        </div>
      </div>
    </>
  );
}
