import type { Student, Marks, AttendanceRecord, Announcement, Timetable, AdminUser } from './types';

export const STUDENTS: Student[] = [
  {
    id: 'student-1',
    name: 'Lokesh Kumar',
    email: 'lokesh.kumar@university.edu',
    regNo: 'S2021001',
    department: 'Computer Science',
    year: 3,
    classes: ['Data Structures', 'Algorithms', 'Database Management', 'Operating Systems', 'Networks'],
  },
  {
    id: 'student-2',
    name: 'Priya Sharma',
    email: 'priya.sharma@university.edu',
    regNo: 'S2021002',
    department: 'Mechanical Engineering',
    year: 3,
    classes: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Material Science', 'Heat Transfer'],
  },
];

export const ADMIN_USER: AdminUser = {
  id: 'admin-1',
  name: 'Dr. Evelyn Reed',
  email: 'e.reed@university.edu',
  role: 'Admin',
};


export const MARKS_DATA: Marks[] = [
  {
    studentId: 'student-1',
    subjects: {
      'Data Structures': { internal1: 85, internal2: 90, grade: 'A' },
      'Algorithms': { internal1: 88, internal2: 92, grade: 'A+' },
      'Database Management': { internal1: 78, internal2: 82, grade: 'B+' },
      'Operating Systems': { internal1: 81, internal2: 85, grade: 'A' },
      'Networks': { internal1: 75, internal2: 79, grade: 'B' },
    },
  },
   {
    studentId: 'student-2',
    subjects: {
      'Thermodynamics': { internal1: 90, internal2: 91, grade: 'A+' },
      'Fluid Mechanics': { internal1: 82, internal2: 88, grade: 'A' },
      'Machine Design': { internal1: 76, internal2: 81, grade: 'B+' },
      'Material Science': { internal1: 85, internal2: 89, grade: 'A' },
      'Heat Transfer': { internal1: 78, internal2: 80, grade: 'B' },
    },
  },
];

export const ATTENDANCE_DATA: { [studentId: string]: AttendanceRecord[] } = {
  'student-1': [
    { date: new Date(2024, 6, 1), status: 'present' },
    { date: new Date(2024, 6, 2), status: 'present' },
    { date: new Date(2024, 6, 3), status: 'absent' },
    { date: new Date(2024, 6, 4), status: 'present' },
    { date: new Date(2024, 6, 5), status: 'holiday' },
    { date: new Date(2024, 6, 8), status: 'present' },
    { date: new Date(2024, 6, 9), status: 'present' },
    { date: new Date(2024, 6, 10), status: 'present' },
    { date: new Date(2024, 6, 11), status: 'present' },
    { date: new Date(2024, 6, 12), status: 'absent' },
    { date: new Date(2024, 6, 15), status: 'present' },
    { date: new Date(2024, 6, 16), status: 'present' },
  ],
};

export const ANNOUNCEMENTS: Announcement[] = [
    {
        id: 'ann-1',
        title: 'Mid-term Exam Schedule',
        content: 'The mid-term examinations for 3rd year students will commence from August 5th. Detailed schedule is available on the notice board.',
        date: new Date('2024-07-15'),
        for_department: 'All'
    },
    {
        id: 'ann-2',
        title: 'Guest Lecture on AI',
        content: 'A guest lecture on "The Future of Artificial Intelligence" is scheduled for July 25th for all Computer Science students.',
        date: new Date('2024-07-18'),
        for_department: 'Computer Science'
    },
];

export const TIMETABLE_DATA: { [department: string]: { [year: string]: Timetable } } = {
    "Computer Science": {
        "3": {
            "Monday": [
                { period: 1, subject: "Operating Systems", time: "9:00 - 10:00", teacher: "Dr. Alan Grant" },
                { period: 2, subject: "Networks", time: "10:00 - 11:00", teacher: "Dr. Ellie Sattler" },
                { period: 3, subject: "Database Management", time: "11:00 - 12:00", teacher: "Dr. Ian Malcolm" },
            ],
            "Tuesday": [
                { period: 1, subject: "Data Structures", time: "9:00 - 10:00", teacher: "Dr. John Hammond" },
                { period: 2, subject: "Algorithms", time: "10:00 - 11:00", teacher: "Mr. Dennis Nedry" },
                { period: 3, subject: "Operating Systems", time: "11:00 - 12:00", teacher: "Dr. Alan Grant" },
            ]
        }
    }
}
