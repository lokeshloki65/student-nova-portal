"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Timetable } from '@/lib/types';
import { Pencil } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TimetableManagerProps {
    timetable: Timetable;
}

export function TimetableManager({ timetable }: TimetableManagerProps) {

    const handleEdit = (day: string, period: number) => {
        toast({
            title: "Editing Timetable",
            description: `This would open a dialog to edit ${day} - Period ${period}.`
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage Class Timetable</CardTitle>
                <CardDescription>View and edit the timetable for Computer Science, Year 3.</CardDescription>
            </CardHeader>
            <CardContent>
                {Object.entries(timetable).map(([day, entries]) => (
                <div key={day} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{day}</h3>
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Period</TableHead>
                                    <TableHead>Time</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Teacher</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {entries.map(entry => (
                                    <TableRow key={entry.period}>
                                        <TableCell>{entry.period}</TableCell>
                                        <TableCell>{entry.time}</TableCell>
                                        <TableCell>{entry.subject}</TableCell>
                                        <TableCell>{entry.teacher}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(day, entry.period)}>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                ))}
            </CardContent>
        </Card>
    );
}
