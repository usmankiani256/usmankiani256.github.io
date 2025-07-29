import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
            <p className="mx-auto max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="mx-auto">
            <Card className="overflow-hidden backdrop-blur-sm bg-white/5 border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="p-6 flex items-center gap-4 border-b border-white/5">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-muted-foreground">
                      HITEC University, Punjab, Pakistan (2020)
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Completed a comprehensive computer science program with a
                    focus on software engineering, algorithms, data structures,
                    and system design. Built a strong foundation in programming
                    principles that enabled specialization in frontend
                    development, blockchain technology, and AI/ML integrations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
