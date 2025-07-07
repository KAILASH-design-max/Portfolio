"use client";

import { useState } from "react";
import type { ProjectInsightInput } from "@/ai/flows/project-insight-generator";
import { getProjectInsightAction } from "@/app/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

type ProjectCardProps = {
  project: ProjectInsightInput & { image: string; dataAiHint: string; link?: string };
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateInsight = async () => {
    setIsLoading(true);
    setInsight(null);
    const result = await getProjectInsightAction({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      technologiesUsed: project.technologiesUsed,
    });
    setIsLoading(false);

    if ("error" in result) {
      toast({
        title: "Error Generating Insight",
        description: result.error,
        variant: "destructive",
      });
    } else {
      setInsight(result.insight);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-primary/20">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          className="object-cover"
          data-ai-hint={project.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          {project.projectName}
          {project.link && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardTitle>
        <div className="flex flex-wrap gap-1 pt-2">
          {project.technologiesUsed.split(", ").map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.projectDescription}</p>
        {isLoading && (
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        )}
        {insight && (
          <blockquote className="mt-4 border-l-2 border-accent bg-accent/10 p-3 rounded-r-md">
            <p className="text-sm italic text-accent-foreground/90">{insight}</p>
          </blockquote>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleGenerateInsight} disabled={isLoading} className="w-full">
          <Lightbulb className="mr-2 h-4 w-4" />
          {isLoading ? "Generating..." : "Generate AI Insight"}
        </Button>
      </CardFooter>
    </Card>
  );
}
