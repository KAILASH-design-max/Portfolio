import type { ProjectItem } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: ProjectItem;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  // Featured flagship layout
  if (project.featured) {
    return (
      <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Image & Visual Showcase */}
          <div className="relative h-64 sm:h-80 lg:h-full lg:col-span-5 bg-muted overflow-hidden group">
            <Image
              src={project.image}
              alt={project.projectName}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.dataAiHint}
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
              <Badge className="bg-primary text-primary-foreground font-semibold shadow-sm">
                Featured Flagship
              </Badge>
            </div>
          </div>

          {/* Details & Architecture */}
          <div className="p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.keyFocus}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {project.projectName}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {project.tagline}
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1.5 my-4">
                {project.technologiesUsed.split(", ").map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs font-medium px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Factual Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.projectDescription}
              </p>

              {/* Resume Fact Bullets */}
              <div className="space-y-2 mb-6 bg-muted/40 p-4 rounded-lg border border-border/50">
                <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wide mb-1">
                  Architectural Implementation
                </p>
                {project.highlights.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <Button size="sm" variant="default" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub Repository
                  </a>
                </Button>
              )}
              {project.liveDemoUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Secondary project card layout
  return (
    <Card className="flex flex-col h-full overflow-hidden border bg-card shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/40">
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          className="object-cover"
          data-ai-hint={project.dataAiHint}
        />
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/90 text-xs backdrop-blur-sm">
            {project.keyFocus}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold">{project.projectName}</CardTitle>
        <p className="text-xs text-muted-foreground font-medium">{project.tagline}</p>
        <div className="flex flex-wrap gap-1 pt-2">
          {project.technologiesUsed.split(", ").map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-3">
        <p className="text-muted-foreground text-sm">{project.projectDescription}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="text-xs text-muted-foreground space-y-1 pl-1">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-accent">&bull;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="pt-3 border-t flex items-center gap-2">
        {project.githubUrl && (
          <Button size="sm" variant="outline" className="w-full text-xs" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
            </a>
          </Button>
        )}
        {project.link && (
          <Button size="sm" variant="outline" className="w-full text-xs" asChild>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
