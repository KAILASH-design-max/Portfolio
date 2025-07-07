import { certifications } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-4 flex items-center gap-4">
              <Award className="h-6 w-6 text-accent" />
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
