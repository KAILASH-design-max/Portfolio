'use server';

/**
 * @fileOverview AI-powered project insight generator.
 *
 * - generateProjectInsight - A function that generates a concise AI-generated summary of a project.
 * - ProjectInsightInput - The input type for the generateProjectInsight function.
 * - ProjectInsightOutput - The return type for the generateProjectInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectInsightInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project.'),
  technologiesUsed: z.string().describe('A list of technologies used in the project.'),
});
export type ProjectInsightInput = z.infer<typeof ProjectInsightInputSchema>;

const ProjectInsightOutputSchema = z.object({
  insight: z.string().describe('A concise AI-generated summary of the project.'),
});
export type ProjectInsightOutput = z.infer<typeof ProjectInsightOutputSchema>;

export async function generateProjectInsight(input: ProjectInsightInput): Promise<ProjectInsightOutput> {
  return generateProjectInsightFlow(input);
}

const projectInsightPrompt = ai.definePrompt({
  name: 'projectInsightPrompt',
  input: {schema: ProjectInsightInputSchema},
  output: {schema: ProjectInsightOutputSchema},
  prompt: `You are an AI expert at summarizing software development projects.

  Given the following project details, generate a concise summary highlighting the key technologies and achievements.

  Project Name: {{{projectName}}}
  Description: {{{projectDescription}}}
  Technologies Used: {{{technologiesUsed}}}

  Concise Summary: `,
});

const generateProjectInsightFlow = ai.defineFlow(
  {
    name: 'generateProjectInsightFlow',
    inputSchema: ProjectInsightInputSchema,
    outputSchema: ProjectInsightOutputSchema,
  },
  async input => {
    const {output} = await projectInsightPrompt(input);
    return output!;
  }
);
