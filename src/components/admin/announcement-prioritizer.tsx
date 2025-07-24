"use client";

import { useState, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { prioritizeAnnouncementAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import type { Student, PrioritizationResult } from "@/lib/types";
import { Sparkles, AlertCircle } from "lucide-react";

interface AnnouncementPrioritizerProps {
    students: Student[];
}

export function AnnouncementPrioritizer({ students }: AnnouncementPrioritizerProps) {
    const [announcement, setAnnouncement] = useState("");
    const [results, setResults] = useState<PrioritizationResult[] | null>(null);
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const handleSubmit = () => {
        if (!announcement.trim()) {
            toast({ title: "Error", description: "Announcement text cannot be empty.", variant: "destructive" });
            return;
        }

        startTransition(async () => {
            try {
                const res = await prioritizeAnnouncementAction(announcement, students);
                setResults(res);
                toast({ title: "Success", description: "Announcement prioritized for students." });
            } catch (error) {
                toast({ title: "AI Error", description: "Could not prioritize the announcement.", variant: "destructive" });
                setResults(null);
            }
        });
    };

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary"/>AI-Powered Announcements</CardTitle>
                    <CardDescription>
                        Craft an announcement and our AI will determine its relevance for each student.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="announcement-text">Announcement</Label>
                        <Textarea
                            id="announcement-text"
                            placeholder="e.g., The final year Computer Science project submission deadline is extended..."
                            value={announcement}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            rows={5}
                        />
                    </div>
                    <Button onClick={handleSubmit} disabled={isPending}>
                        {isPending ? "Prioritizing..." : "Prioritize & Send"}
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Prioritization Results</CardTitle>
                    <CardDescription>
                        Based on the announcement, here's the relevance for students.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student</TableHead>
                                    <TableHead>Relevance</TableHead>
                                    <TableHead>Reason</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isPending ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                            <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : results ? (
                                    results.map(result => {
                                        const student = students.find(s => s.id === result.studentId);
                                        return (
                                            <TableRow key={result.studentId}>
                                                <TableCell className="font-medium">{student?.name || result.studentId}</TableCell>
                                                <TableCell>
                                                    <Badge variant={result.isRelevant ? "default" : "destructive"} className={result.isRelevant ? 'bg-accent text-accent-foreground' : ''}>
                                                        {result.isRelevant ? "Relevant" : "Irrelevant"}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{result.reason}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={3} className="h-24 text-center">
                                            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                                <AlertCircle className="h-8 w-8" />
                                                <span>No results to display. Send an announcement to see results.</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
