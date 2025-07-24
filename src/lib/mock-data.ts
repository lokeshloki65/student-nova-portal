import type { Student, Marks, AttendanceRecord, Announcement } from './types';

export const STUDENTS: Student[] = [
  {
    id: 'student-1',
    name: 'Lokesh Kumar',
    email: 'lokesh.kumar@university.edu',
    regNo: 'S2021001',
    department: 'Computer Science',
    year: 3,
    classes: ['Data Structures', 'Algorithms', 'Database Management'],
  },
  {
    id: 'student-2',
    name: 'Priya Sharma',
    email: 'priya.sharma@university.edu',
    regNo: 'S2021002',
    department: 'Mechanical Engineering',
    year: 3,
    classes: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design'],
  },
];

export const ADMIN_USER = {
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
