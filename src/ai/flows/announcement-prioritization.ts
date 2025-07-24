// A flow that uses AI to determine which announcements are most relevant to which users.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @fileOverview A flow that uses AI to determine which announcements are most relevant to which users.
 *
 * - aiPoweredAnnouncementPrioritization - A function that prioritizes announcements for users.
 * - AnnouncementPrioritizationInput - The input type for the aiPoweredAnnouncementPrioritization function.
 * - AnnouncementPrioritizationOutput - The return type for the aiPoweredAnnouncementPrioritization function.
 */

const AnnouncementPrioritizationInputSchema = z.object({
  announcement: z.string().describe('The announcement text.'),
  studentData: z.array(
    z.object({
      studentId: z.string().describe('The unique identifier for the student.'),
      name: z.string().describe('The name of the student.'),
      department: z.string().describe('The department of the student.'),
      year: z.number().describe('The year of study for the student.'),
      classes: z.array(z.string()).describe('The classes the student is taking.'),
    })
  ).describe('An array of student objects with their details.'),
});
export type AnnouncementPrioritizationInput = z.infer<typeof AnnouncementPrioritizationInputSchema>;

const AnnouncementPrioritizationOutputSchema = z.array(
  z.object({
    studentId: z.string().describe('The unique identifier for the student.'),
    isRelevant: z.boolean().describe('Whether the announcement is relevant to the student.'),
    reason: z.string().describe('The reason for the relevance or irrelevance of the announcement.'),
  })
);
export type AnnouncementPrioritizationOutput = z.infer<typeof AnnouncementPrioritizationOutputSchema>;

export async function aiPoweredAnnouncementPrioritization(
  input: AnnouncementPrioritizationInput
): Promise<AnnouncementPrioritizationOutput> {
  return announcementPrioritizationFlow(input);
}

const announcementPrioritizationPrompt = ai.definePrompt({
  name: 'announcementPrioritizationPrompt',
  input: {schema: AnnouncementPrioritizationInputSchema},
  output: {schema: AnnouncementPrioritizationOutputSchema},
  prompt: `You are an AI assistant that determines whether an announcement is relevant to a student, given the student's data.

Announcement: {{{announcement}}}

For each student in the studentData array, determine if the announcement is relevant to them.
Return an array of objects, where each object contains the studentId, a boolean indicating whether the announcement is relevant (isRelevant), and a brief reason for the relevance or irrelevance.

Consider the student's department, year, and classes when determining relevance.

Ensure that the output is a valid JSON array of objects conforming to the specified output schema.

Here is the student data:
{{#each studentData}}
  Student ID: {{{studentId}}}
  Name: {{{name}}}
  Department: {{{department}}}
  Year: {{{year}}}
  Classes: {{#each classes}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}`,
});

const announcementPrioritizationFlow = ai.defineFlow(
  {
    name: 'announcementPrioritizationFlow',
    inputSchema: AnnouncementPrioritizationInputSchema,
    outputSchema: AnnouncementPrioritizationOutputSchema,
  },
  async input => {
    const {output} = await announcementPrioritizationPrompt(input);
    return output!;
  }
);
