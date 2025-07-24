import { Megaphone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Announcement } from "@/lib/types";
import { format } from "date-fns";

interface AnnouncementsCardProps {
  announcements: Announcement[];
}

export function AnnouncementsCard({ announcements }: AnnouncementsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Megaphone />Announcements</CardTitle>
        <CardDescription>Latest news and updates from the college.</CardDescription>
      </CardHeader>
      <CardContent>
        {announcements.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {announcements.map((ann) => (
              <AccordionItem value={ann.id} key={ann.id}>
                <AccordionTrigger>
                    <div className="flex flex-col items-start text-left">
                        <span className="font-semibold">{ann.title}</span>
                        <span className="text-xs text-muted-foreground">{format(ann.date, 'PPP')}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                  {ann.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
            <p className="text-center text-muted-foreground">No new announcements.</p>
        )}
      </CardContent>
    </Card>
  );
}
