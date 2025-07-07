import { education } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                    <GraduationCap className="h-5 w-5 text-accent"/>
                </span>
            </div>
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-muted-foreground text-sm">{edu.period} &bull; {edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
