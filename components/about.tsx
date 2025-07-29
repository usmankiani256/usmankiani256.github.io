import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Server, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Frontend & Mobile Development",
      description:
        "Expertise in React, React Native, Next.js, and TypeScript for scalable applications",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Web3 & Blockchain",
      description:
        "Multi-chain DApps, Smart Contracts (EVM, BSC), Solidity, and DeFi solutions",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "AI/LLM Integration",
      description:
        "WebLLM, MLC-LLM, Transformers.js, Vercel AI SDK, OpenAI, and offline AI systems",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Team Leadership",
      description:
        "Led teams of 8+ developers, mentoring, and delivering enterprise solutions",
    },
  ];

  return (
    <div className="w-full">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mx-auto max-w-5xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lead Frontend Engineer with 5+ years of experience building
                Blockchain-powered applications and AI/LLM integrations.
                Currently working as a Lead Frontend Engineer for a US-based
                firm specializing in Web3 and AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full backdrop-blur-sm bg-white/5 border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
