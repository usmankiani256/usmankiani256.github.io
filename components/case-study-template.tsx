import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Book, ExternalLink, Github, FileText } from "lucide-react";
import Link from "next/link";
import GooglePlay from "./ui/playstore";
import AppStore from "./ui/appstore";
import ImageGallery from "./ui/carousel";

interface CaseStudyTemplateProps {
  nda?: boolean;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  timeline: string;
  role: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  techStack: string[];
  liveLink?: string;
  codeLink?: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  imageStyle?: string;
  liveLinkLabel?: string;
  webLink?: string;
  whitePaperLink?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
}

export default function CaseStudyTemplate({
  nda,
  title,
  subtitle,
  description,
  tags,
  timeline,
  role,
  overview,
  challenges,
  solutions,
  outcomes,
  techStack,
  liveLink,
  codeLink,
  images = [],
  imageStyle,
  liveLinkLabel,
  webLink,
  whitePaperLink,
  appStoreLink,
  googlePlayLink,
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/#featured-work"
          className="inline-flex items-center mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Featured Work
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="text-xl text-muted-foreground mb-6"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <p className="text-lg leading-relaxed mb-6">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="pt-1">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-muted-foreground">{timeline}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-muted-foreground">{role}</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {liveLink && (
              <Button asChild={!nda} disabled={nda}>
                <Link
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${nda ? "flex items-center" : ""}`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {liveLinkLabel || "Live"}
                </Link>
              </Button>
            )}
            {webLink && (
              <Button variant="outline" asChild={!nda} disabled={nda}>
                <Link
                  href={webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${nda ? "flex items-center gap-2" : ""}`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Web App
                </Link>
              </Button>
            )}
            {codeLink && (
              <Button variant="outline" asChild={!nda} disabled={nda}>
                <Link
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${nda ? "flex items-center gap-2" : ""}`}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
            {whitePaperLink && (
              <Button variant="outline" asChild={!nda} disabled={nda}>
                <Link
                  href={whitePaperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${nda ? "flex items-center gap-2" : ""}`}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Whitepaper
                </Link>
              </Button>
            )}
            {appStoreLink && (
              <Button variant="outline" asChild={!nda} disabled={nda}>
                <Link
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${nda ? "flex items-center gap-2" : ""}`}
                >
                  <AppStore />
                  App Store
                </Link>
              </Button>
            )}
            {googlePlayLink && (
              <Button variant="outline" asChild={!nda} disabled={nda}>
                <Link
                  href={googlePlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${nda ? "flex items-center gap-2" : ""}`}
                >
                  <GooglePlay />
                  Google Play
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview */}

          {nda && (
            <section className="border-l-4 border-r-4 items-center border-purple-500/50 p-3">
              <p className="text-md text-purple-500/80 text-center">
                Due to an active NDA, specific assets, code, and identifiers
                have been excluded.
              </p>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p
              className="text-lg leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: overview }}
            />
          </section>

          {/* Images */}
          {images.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Images</h2>
              <ImageGallery images={images} imageStyle={imageStyle} />
            </section>
          )}

          {/* Challenges */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Solutions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          {outcomes.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Outcomes & Impact</h2>
              <ul className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span
                      className="text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: outcome }}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {techStack.map((tech, index) => (
                <Card key={index}>
                  <CardContent className="p-3 text-center text-ellipsis overflow-hidden">
                    <span className="text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                      {tech}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t">
          <Link
            href="/#featured-work"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Featured Work
          </Link>
        </div>
      </div>
    </div>
  );
}
