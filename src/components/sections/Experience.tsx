import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Internship Experience</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2"></div>
        {experience.map((exp, index) => (
          <div key={index} className="relative flex items-center mb-12">
            <div className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2"></div>
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                  <CardTitle>{exp.role}</CardTitle>
                  <p className="text-accent font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
