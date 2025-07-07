import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = Object.values(skills);

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.name} className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
               <category.icon className="h-8 w-8 text-accent" />
               <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
