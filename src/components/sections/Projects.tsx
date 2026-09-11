import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Layers } from "lucide-react";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Full-Stack Engineering Showcase
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Featured Projects
        </h2>
        <p className="mt-3 text-muted-foreground text-base sm:text-lg">
          Production-grade platforms featuring scalable REST APIs, secure role-based access control, relational database modeling with PostgreSQL & Prisma, and responsive multi-role workflows.
        </p>
      </div>

      {/* Featured Flagships Showcase (DevFlow & SpeedyShop) */}
      <div className="space-y-12 mb-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.projectName} project={project} priority={index === 0} />
        ))}
      </div>

      {/* Other Notable Projects */}
      {otherProjects.length > 0 && (
        <div className="pt-8 border-t border-border/70">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Additional Web & Mobile Projects
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                E-commerce modules, native Android application, and dynamic client-side analytics
              </p>
            </div>
            <Badge variant="outline" className="hidden sm:inline-flex text-xs">
              {otherProjects.length} Projects
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.projectName} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
