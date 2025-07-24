"use client";

import { CalendarCheck, Percent } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { AttendanceRecord } from "@/lib/types";

interface AttendanceCardProps {
  attendanceRecords: AttendanceRecord[];
}

export function AttendanceCard({ attendanceRecords }: AttendanceCardProps) {
  const presentDays = attendanceRecords.filter(r => r.status === 'present').map(r => r.date);
  const absentDays = attendanceRecords.filter(r => r.status === 'absent').map(r => r.date);
  const holidays = attendanceRecords.filter(r => r.status === 'holiday').map(r => r.date);

  const workingDays = presentDays.length + absentDays.length;
  const attendancePercentage = workingDays > 0 ? Math.round((presentDays.length / workingDays) * 100) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarCheck />
          Attendance Status
        </CardTitle>
        <CardDescription>Your attendance for the current month.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <Calendar
          mode="multiple"
          selected={[...presentDays, ...absentDays, ...holidays]}
          defaultMonth={new Date(2024, 6, 1)}
          modifiers={{
            present: presentDays,
            absent: absentDays,
            holiday: holidays,
          }}
          modifiersClassNames={{
            present: 'bg-accent text-accent-foreground',
            absent: 'bg-destructive text-destructive-foreground',
            holiday: 'bg-secondary text-secondary-foreground',
          }}
          className="rounded-md border"
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-4">
        <div className="flex w-full items-center">
            <div className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                <span className="font-medium">Total Attendance:</span>
            </div>
            <span className="ml-auto font-bold text-lg text-primary">{attendancePercentage}%</span>
        </div>
        <Progress value={attendancePercentage} aria-label={`${attendancePercentage}% attendance`} />
        <div className="mt-2 flex w-full justify-around text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent"></span>Present</div>
            <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-destructive"></span>Absent</div>
            <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-secondary"></span>Holiday</div>
        </div>
      </CardFooter>
    </Card>
  );
}
