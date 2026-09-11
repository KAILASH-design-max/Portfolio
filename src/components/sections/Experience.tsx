import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3">
          <Briefcase className="w-3.5 h-3.5" /> Professional Industry Experience
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Internship Experience
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Hands-on software development experience across the complete software development lifecycle (SDLC).
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <Card key={index} className="shadow-lg border-2 border-primary/15 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <CardTitle className="text-xl sm:text-2xl font-bold">{exp.role}</CardTitle>
                      <p className="text-accent font-semibold text-base sm:text-lg mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs sm:text-sm text-muted-foreground gap-1 pl-11 sm:pl-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-foreground/90 font-medium">
                {exp.description}
              </p>

              <div className="space-y-2.5 pt-1">
                {exp.bullets.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground mr-1">
                  Technologies & Competencies:
                </span>
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
