"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import type { Student } from '@/lib/types';
import { PlusCircle } from "lucide-react";

interface StudentManagerProps {
    students: Student[];
}

export function StudentManager({ students: initialStudents }: StudentManagerProps) {
    const [students, setStudents] = useState<Student[]>(initialStudents);
    const [newStudent, setNewStudent] = useState({ name: '', email: '', regNo: '', department: '', year: '', classes: '' });
    const { toast } = useToast();

    const handleAddStudent = () => {
        if (Object.values(newStudent).some(field => field === '')) {
            toast({ title: "Error", description: "Please fill all fields.", variant: "destructive" });
            return;
        }
        const studentToAdd: Student = {
            id: `student-${students.length + 1}`,
            name: newStudent.name,
            email: newStudent.email,
            regNo: newStudent.regNo,
            department: newStudent.department,
            year: parseInt(newStudent.year, 10),
            classes: newStudent.classes.split(',').map(s => s.trim()),
        };
        setStudents([...students, studentToAdd]);
        toast({ title: "Success", description: "Student added successfully." });
        setNewStudent({ name: '', email: '', regNo: '', department: '', year: '', classes: '' });
    };


    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Student Roster</CardTitle>
                    <CardDescription>View all registered students in the system.</CardDescription>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2" /> Add Student
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Student</DialogTitle>
                            <DialogDescription>Enter the details for the new student.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input id="name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input id="email" type="email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} className="col-span-3" />
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="regNo" className="text-right">Reg. No</Label>
                                <Input id="regNo" value={newStudent.regNo} onChange={(e) => setNewStudent({ ...newStudent, regNo: e.target.value })} className="col-span-3" />
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="department" className="text-right">Department</Label>
                                <Input id="department" value={newStudent.department} onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })} className="col-span-3" />
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="year" className="text-right">Year</Label>
                                <Input id="year" type="number" value={newStudent.year} onChange={(e) => setNewStudent({ ...newStudent, year: e.target.value })} className="col-span-3" />
                            </div>
                             <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="classes" className="text-right">Classes</Label>
                                <Input id="classes" placeholder="comma, separated" value={newStudent.classes} onChange={(e) => setNewStudent({ ...newStudent, classes: e.target.value })} className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button onClick={handleAddStudent}>Add Student</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
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
