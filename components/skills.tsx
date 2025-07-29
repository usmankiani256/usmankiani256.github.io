import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend & Mobile",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Android",
        "iOS",
      ],
    },
    {
      category: "Web3 & Blockchain",
      skills: [
        "Solidity",
        "EVM",
        "ERC-20",
        "BEP-20",
        "The Graph",
        "Ethers.js",
        "IPFS",
        "Tenderly",
        "QuickNode",
      ],
    },
    {
      category: "AI/LLM Integration",
      skills: [
        "WebLLM (mlc-ai)",
        "MLC-LLM",
        "Llama.cpp",
        "Transformers.js",
        "Vercel AI",
        "OpenAI",
        "ONNX Runtime",
        "WebGPU",
        "Quantization",
      ],
    },
    {
      category: "APIs & Development",
      skills: [
        "REST",
        "GraphQL",
        "WebSocket",
        "CI/CD",
        "Supabase",
        "Firebase",
        "Git",
        "AWS Lambda",
        "JIRA",
        "Figma",
        "Notion",
      ],
    },
    {
      category: "Testing & Debugging",
      skills: [
        "Jest",
        "Enzyme",
        "Cypress",
        "Playwright",
        "React Testing Library",
        "Manual Testing",
        "Detox",
      ],
    },
    {
      category: "Leadership & Soft Skills",
      skills: [
        "Team Leadership",
        "Code Reviews",
        "Agile",
        "Remote Collaboration",
        "Communication",
        "Adaptability",
      ],
    },
  ];

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
          Skills
        </h3>
        <p className="mx-auto max-w-4xl text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          My expertise and technical proficiencies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full backdrop-blur-sm bg-white/5 border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm font-extralight tracking-wide"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
