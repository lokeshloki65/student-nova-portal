"use client";
import { CalendarClock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Timetable } from "@/lib/types";

interface TimetableCardProps {
    timetable: Timetable | undefined;
}

export function TimetableCard({ timetable }: TimetableCardProps) {
    if (!timetable) {
        return (
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><CalendarClock />Class Timetable</CardTitle>
                    <CardDescription>Your weekly class schedule.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>No timetable data available for your department and year.</p>
                </CardContent>
            </Card>
        )
    }
    
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const days = Object.keys(timetable);
    const defaultTab = days.includes(today) ? today : days[0];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><CalendarClock />Class Timetable</CardTitle>
                <CardDescription>Your weekly class schedule.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={defaultTab} className="w-full">
                    <TabsList>
                        {days.map(day => (
                            <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.entries(timetable).map(([day, entries]) => (
                        <TabsContent key={day} value={day}>
                             <div className="border rounded-md">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[80px]">Period</TableHead>
                                            <TableHead className="w-[150px]">Time</TableHead>
                                            <TableHead>Subject</TableHead>
                                            <TableHead>Teacher</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {entries.map(entry => (
                                            <TableRow key={entry.period}>
                                                <TableCell className="font-medium">{entry.period}</TableCell>
                                                <TableCell>{entry.time}</TableCell>
                                                <TableCell>{entry.subject}</TableCell>
                                                <TableCell>{entry.teacher}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>
    )
}
