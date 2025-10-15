"use server";

import { aiPoweredAnnouncementPrioritization } from "@/ai/flows/announcement-prioritization";
import { Student, PrioritizationResult } from "@/lib/types";

export async function prioritizeAnnouncementAction(
  announcement: string,
  students: Student[]
): Promise<PrioritizationResult[]> {   
  try {
    const studentData = students.map(({ id, name, department, year, classes }) => ({
      studentId: id,
      name,
      department,
      year,
      classes,
    }));

    const results = await aiPoweredAnnouncementPrioritization({
      announcement,
      studentData,
    });
    return results;
  } catch (error) {
    console.error("Error in AI prioritization:", error);
    throw new Error("Failed to prioritize announcement.");
  }
}
