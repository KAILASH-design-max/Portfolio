"use server";

import { generateProjectInsight, type ProjectInsightInput } from "@/ai/flows/project-insight-generator";
import { z } from "zod";

const ProjectInsightActionSchema = z.object({
  projectName: z.string(),
  projectDescription: z.string(),
  technologiesUsed: z.string(),
});

export async function getProjectInsightAction(
  input: ProjectInsightInput
): Promise<{ insight: string } | { error: string }> {
  try {
    // Validate input with Zod
    const validatedInput = ProjectInsightActionSchema.parse(input);
    const result = await generateProjectInsight(validatedInput);
    if (!result || !result.insight) {
      throw new Error("AI failed to generate an insight.");
    }
    return { insight: result.insight };
  } catch (e: any) {
    console.error("Error generating project insight:", e);
    // Handle Zod validation errors
    if (e instanceof z.ZodError) {
      return { error: `Invalid input: ${e.errors.map(err => err.message).join(', ')}` };
    }
    return { error: e.message || "An unknown error occurred while generating insight." };
  }
}
