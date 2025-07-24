import { ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Marks } from "@/lib/types";

interface MarksCardProps {
  marks: Marks | undefined;
}

export function MarksCard({ marks }: MarksCardProps) {
  if (!marks) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><ClipboardList />Internal Marks</CardTitle>
          <CardDescription>No marks data available.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your marks have not been updated yet. Please check back later.</p>
        </CardContent>
      </Card>
    );
  }

  const subjects = Object.entries(marks.subjects);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><ClipboardList />Internal Marks</CardTitle>
        <CardDescription>Your performance in internal assessments.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center">Internal 1</TableHead>
              <TableHead className="text-center">Internal 2</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center">Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map(([subject, data]) => {
              const total = data.internal1 + data.internal2;
              return (
                <TableRow key={subject}>
                  <TableCell className="font-medium">{subject}</TableCell>
                  <TableCell className="text-center">{data.internal1}</TableCell>
                  <TableCell className="text-center">{data.internal2}</TableCell>
                  <TableCell className="text-center font-semibold">{total}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={data.grade.startsWith('A') ? 'default' : 'secondary'} className="bg-accent text-accent-foreground">{data.grade}</Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
