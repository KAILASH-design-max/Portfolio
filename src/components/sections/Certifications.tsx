import { certifications, languages } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Languages } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20">
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Award className="h-6 w-6 text-accent" />
          Certifications & Languages
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Technical credentials and communication competencies
        </p>
      </div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent mt-0.5">
                <Award className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-foreground leading-snug">{cert.name}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-accent">{cert.issuer}</span>
                  {cert.date && (
                    <>
                      <span>&bull;</span>
                      <span>{cert.date}</span>
                    </>
                  )}
                </div>
                {cert.skills && (
                  <p className="text-xs text-muted-foreground pt-1">
                    <span className="font-medium text-foreground/80">Covered:</span> {cert.skills}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Languages Card */}
        <Card className="border shadow-sm bg-muted/30">
          <CardContent className="p-5 flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
              <Languages className="h-5 w-5" />
            </span>
            <div className="space-y-2">
              <h4 className="font-bold text-base text-foreground leading-snug">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <Badge key={lang.name} variant="secondary" className="text-xs py-1 px-3">
                    <span className="font-semibold mr-1">{lang.name}:</span> {lang.proficiency}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
