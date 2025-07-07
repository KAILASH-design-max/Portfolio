import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.projectName} project={project} />
        ))}
      </div>
    </section>
  );
}
