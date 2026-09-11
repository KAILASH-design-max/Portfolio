import { education } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          Education
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Academic foundation in Computer Applications and Software Development
        </p>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-foreground leading-snug">{edu.degree}</h4>
                <p className="text-sm font-medium text-accent">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground pt-0.5">
                  <span className="font-medium text-foreground/80">{edu.period}</span>
                  <span>&bull;</span>
                  <span className="font-semibold text-primary">{edu.details}</span>
                </div>
                {edu.highlight && (
                  <p className="text-xs text-muted-foreground pt-1 italic">
                    {edu.highlight}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
