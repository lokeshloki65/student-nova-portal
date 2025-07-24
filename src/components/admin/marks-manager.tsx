"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from '@/hooks/use-toast';
import type { Student } from '@/lib/types';
import { MARKS_DATA } from '@/lib/mock-data';

interface MarksManagerProps {
    students: Student[];
}

export function MarksManager({ students }: MarksManagerProps) {
    const [selectedStudentId, setSelectedStudentId] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [internal1, setInternal1] = useState('');
    const [internal2, setInternal2] = useState('');

    const handleStudentChange = (studentId: string) => {
        setSelectedStudentId(studentId);
        setSelectedSubject('');
        setInternal1('');
        setInternal2('');
    }
    
    const handleSubjectChange = (subject: string) => {
        setSelectedSubject(subject);
        const studentMarks = MARKS_DATA.find(m => m.studentId === selectedStudentId);
        if(studentMarks && studentMarks.subjects[subject]) {
            setInternal1(String(studentMarks.subjects[subject].internal1));
            setInternal2(String(studentMarks.subjects[subject].internal2));
        } else {
            setInternal1('');
            setInternal2('');
        }
    }

    const handleSubmit = () => {
        if (!selectedStudentId || !selectedSubject) {
             toast({
                title: 'Error',
                description: 'Please select a student and a subject.',
                variant: 'destructive'
            });
            return;
        }
         toast({
            title: 'Success!',
            description: `Marks for ${students.find(s=>s.id === selectedStudentId)?.name} in ${selectedSubject} updated.`,
        });
    }

    const studentSubjects = students.find(s => s.id === selectedStudentId)?.classes || [];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage Internal Marks</CardTitle>
                <CardDescription>Add or update internal assessment marks for students.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Select Student</Label>
                            <Select onValueChange={handleStudentChange} value={selectedStudentId}>
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
                            <Select onValueChange={handleSubjectChange} value={selectedSubject} disabled={!selectedStudentId}>
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
                    </div>
                     <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                                <Label htmlFor="internal1">Internal 1 Marks</Label>
                                <Input id="internal1" type="number" placeholder="Enter marks" value={internal1} onChange={e => setInternal1(e.target.value)} disabled={!selectedSubject} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="internal2">Internal 2 Marks</Label>
                                <Input id="internal2" type="number" placeholder="Enter marks" value={internal2} onChange={e => setInternal2(e.target.value)} disabled={!selectedSubject} />
                            </div>
                        </div>
                        <Button onClick={handleSubmit} className="w-full" disabled={!selectedSubject}>Update Marks</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
