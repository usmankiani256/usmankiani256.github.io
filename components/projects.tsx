import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chrome, FileText, Github, Globe, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import GooglePlay from "@/components/ui/playstore";
import AppStore from "@/components/ui/appstore";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  caseStudy: string;
  codeLink?: string;
  homePageLink?: string;
  webLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  nda?: boolean;
}

export default function FeaturedWork() {
  const router = useRouter();
  const projects: Project[] = [
    {
      title: "Kelp",
      description:
        "Scaled to 2M+ wallets and 1.7M+ downloads with cross-chain swaps, gasless transactions, and BEP-20 contract integration.",
      tags: ["React Native", "Expo", "BEP-20", "Ethers.js", "DeFi"],
      caseStudy: "/case-studies/kelp",
      homePageLink: "https://kelp.org",
      appStoreLink: "https://apps.apple.com/us/app/kelp/id1632857274",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.app.kelpa",
    },
    {
      title: "SocialFi Platform",
      description:
        "Architected a multi-chain dApp enabling 50K+ transactions with 63% reduced fees through Ethereum to Arbitrum migrations.",
      tags: ["React Native", "Next.js", "Solidity", "The Graph", "Arbitrum"],
      caseStudy: "/case-studies/social-fi",
      homePageLink: "#",
      webLink: "#",
      appStoreLink: "#",
      playStoreLink: "#",
      nda: true,
    },
    {
      title: "Medical Translation App",
      description:
        "Developed an offline AI translation app with 119+ supported clinical languages using MLC SDKs for Mobile, Apple Silicon and Web.",
      tags: ["React Native", "Next.js", "MLC-LLM", "WebLLM", "TypeScript"],
      caseStudy: "/case-studies/medical-translation",
      homePageLink: "#",
      webLink: "#",
      appStoreLink: "#",
      nda: true,
    },
    {
      title: "Solidity Analysis Agent",
      description:
        "Offline AI assistant to analyze Solidity smart contracts and identify vulnerabilities, and suggest code improvements.",
      tags: ["React", "Solidity", "AI", "TypeScript", "WebGPU"],
      codeLink: "https://github.com/usmankiani256/solidity-analysis-agent",
      webLink: "https://usmankiani256.github.io/solidity-analysis-agent",
      caseStudy: "/case-studies/solidity-agent",
    },
  ];

  const handleButtonClick = (url: string, isExternal: boolean = false) => {
    if (isExternal) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      router.push(url);
    }
  };

  return (
    <section id="featured-work" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
            <p className="mx-auto max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {projects.map((project, index) => {
              const cardContent = (
                <Card
                  className={`overflow-hidden h-full flex flex-col backdrop-blur-sm bg-white/5 border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer`}
                  onClick={() => handleButtonClick(project.caseStudy)}
                >
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">
                      {project.title}
                      {"  "}
                      {project.nda && (
                        <Badge
                          variant="outline"
                          className="border-purple-500/50"
                        >
                          <span className="text-purple-500/50 pt-0.5 text-xs font-extralight">
                            NDA Protected
                          </span>
                          <LockKeyhole className="h-3 w-3 ml-1 text-purple-500/50" />
                        </Badge>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">
                      {project.description}
                    </p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="project-links mt-4 flex flex-wrap gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.codeLink && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-xs px-2 py-1 h-auto"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleButtonClick(project.codeLink!, true);
                          }}
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                      )}
                      {project.homePageLink && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`text-xs px-2 py-1 h-auto ${
                            project.nda ? "text-muted-foreground" : ""
                          }`}
                          disabled={project.nda}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleButtonClick(project.homePageLink!, true);
                          }}
                        >
                          <Globe className="h-3 w-3" />
                        </Button>
                      )}
                      {project.webLink && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`text-xs px-2 py-1 h-auto ${
                            project.nda ? "text-muted-foreground" : ""
                          }`}
                          disabled={project.nda}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleButtonClick(project.webLink!, true);
                          }}
                        >
                          <Chrome className="h-3 w-3" />
                        </Button>
                      )}
                      {project.appStoreLink && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`text-xs px-2 py-1 h-auto ${
                            project.nda ? "text-muted-foreground" : ""
                          }`}
                          disabled={project.nda}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleButtonClick(project.appStoreLink!, true);
                          }}
                        >
                          <AppStore className="h-3 w-3" />
                        </Button>
                      )}
                      {project.playStoreLink && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`text-xs px-2 py-1 h-auto ${
                            project.nda ? "text-muted-foreground" : ""
                          }`}
                          disabled={project.nda}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleButtonClick(project.playStoreLink!, true);
                          }}
                        >
                          <GooglePlay className="h-3 w-3" />
                        </Button>
                      )}
                      {project.caseStudy && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs px-2 py-1 h-auto bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleButtonClick(project.caseStudy);
                          }}
                        >
                          <FileText className="h-3 w-3 text-white" />
                          <span className="mt-0.5 text-white hidden sm:inline">
                            Case Study
                          </span>
                          <span className="text-white mt-0.5 sm:hidden">
                            Study
                          </span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );

              return (
                <div key={index} className="project-card">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
