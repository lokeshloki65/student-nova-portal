export interface Student {
  id: string;
  name: string;
  email: string;
  regNo: string;
  department: string;
  year: number;
  classes: string[];
}

export interface Marks {
  studentId: string;
  subjects: {
    [subjectName: string]: {
      internal1: number;
      internal2: number;
      grade: string;
    };
  };
}

export interface AttendanceRecord {
  date: Date;
  status: 'present' | 'absent' | 'holiday';
  period?: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: Date;
  for_department: string; // Used for simple filtering on student dashboard
}

export interface PrioritizationResult {
    studentId: string;
    isRelevant: boolean;
    reason: string;
}

export interface TimetableEntry {
  period: number;
  subject: string;
  time: string;
  teacher: string;
}

export interface Timetable {
    [day: string]: TimetableEntry[];
}
