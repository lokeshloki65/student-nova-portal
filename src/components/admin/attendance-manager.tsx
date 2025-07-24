"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from '@/hooks/use-toast';
import type { Student } from '@/lib/types';

interface AttendanceManagerProps {
    students: Student[];
}

export function AttendanceManager({ students }: AttendanceManagerProps) {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [period, setPeriod] = useState('1');
    const [status, setStatus] = useState('present');

    const handleStudentChange = (studentId: string) => {
        setSelectedStudent(studentId);
        setSelectedSubject('');
    };

    const studentSubjects = students.find(s => s.id === selectedStudent)?.classes || [];

    const handleSubmit = () => {
        if (!selectedStudent || !selectedSubject || !date) {
            toast({
                title: 'Error',
                description: 'Please select a student, subject, and a date.',
                variant: 'destructive'
            });
            return;
        }
        toast({
            title: 'Success!',
            description: `Marked ${students.find(s=>s.id === selectedStudent)?.name} as ${status} for ${selectedSubject} (Period ${period}) on ${date.toLocaleDateString()}`,
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Mark Student Attendance</CardTitle>
                <CardDescription>Select a student, subject, and date to mark attendance.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Select Student</Label>
                        <Select onValueChange={handleStudentChange} value={selectedStudent}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a student" />
                            </SelectTrigger>
                            <SelectContent>
                                {students.map(student => (
                                    <SelectItem key={student.id} value={student.id}>{student.name} ({student.regNo})</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Select Subject</Label>
                        <Select onValueChange={setSelectedSubject} value={selectedSubject} disabled={!selectedStudent}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                                {studentSubjects.map(subject => (
                                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Select Period</Label>
                        <RadioGroup defaultValue="1" value={period} onValueChange={setPeriod} className="flex gap-4">
                            {[1, 2, 3, 4, 5, 6].map(p => (
                                <div key={p} className="flex items-center space-x-2">
                                    <RadioGroupItem value={String(p)} id={`p${p}`} />
                                    <Label htmlFor={`p${p}`}>{p}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="space-y-2">
                        <Label>Mark Status</Label>
                         <RadioGroup defaultValue="present" value={status} onValueChange={setStatus} className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="present" id="present" />
                                <Label htmlFor="present">Present</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="absent" id="absent" />
                                <Label htmlFor="absent">Absent</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button onClick={handleSubmit} className="w-full md:w-auto" disabled={!selectedSubject}>Mark Attendance</Button>
                </div>
                 <div className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
            </CardContent>
        </Card>
    )
}
