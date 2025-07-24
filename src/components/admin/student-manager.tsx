"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Student } from '@/lib/types';

interface StudentManagerProps {
    students: Student[];
}

export function StudentManager({ students }: StudentManagerProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Student Roster</CardTitle>
                <CardDescription>View all registered students in the system.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Reg. No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead className="text-center">Year</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.map(student => (
                                <TableRow key={student.id}>
                                    <TableCell>{student.regNo}</TableCell>
                                    <TableCell className="font-medium">{student.name}</TableCell>
                                    <TableCell>{student.department}</TableCell>
                                    <TableCell className="text-center">{student.year}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
