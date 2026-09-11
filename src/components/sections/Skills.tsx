import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
          <Wrench className="w-3.5 h-3.5" /> Technical Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Technical Skills
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Proficiencies spanning frontend, backend APIs, relational databases, security protocols, and development tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card
            key={category.name}
            className="shadow-md hover:shadow-lg transition-all duration-300 border hover:border-primary/40 flex flex-col justify-between"
          >
            <div>
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill) => {
                    const isAcademic = skill.includes("(Academic)");
                    const isCoursework = skill.includes("(Coursework/Certification)");

                    return (
                      <Badge
                        key={skill}
                        variant={isAcademic || isCoursework ? "outline" : "secondary"}
                        className={`text-xs py-1 px-2.5 font-normal ${
                          isAcademic
                            ? "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                            : isCoursework
                            ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
                            : ""
                        }`}
                      >
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
