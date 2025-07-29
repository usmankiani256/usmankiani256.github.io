import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Skills from "./skills";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Lead Frontend Engineer",
      company: "Aleh",
      companyUrl: "https://aleh.tech",
      period: "September 2023 - Present",
      location: "Remote",
      achievements: [
        "Led Blockchain and AI development, mentored 8+ developers and accelerated milestone delivery via Agile workflows and CI/CD Deployment pipelines",
        "Architected Multi-Chain DApps, enabling 50K+ transactions and reducing transaction fees by 63% via Subgraph and Ethereum to Arbitrum Nova migrations",
        "Built Offline AI/LLM Browser Engine, achieving <100ms inference latency using WebGPU acceleration and 8-bit Quantization",
        "Designed AI Personas with real-time translation (100+ languages) and compliance analysis for finance/healthcare sectors via IPFS-hosted immutable models",
        "Developed white-label SaaS solutions for 4 enterprise clients, enabling cross-chain NFTs and digital asset management",
        "Improved application performance using caching, stale data management, and throttled batch requests",
      ],
    },
    {
      title: "Lead React Native Developer",
      company: "Kelp Finance",
      companyUrl: "https://kelp.org",
      period: "February 2023 - September 2023",
      location: "Remote",
      achievements: [
        "Scaled Kelp to 2M+ Wallets and 1.7M+ Downloads by migrating from Expo to Bare React Native, reducing dependency bloat and enabling modular architecture",
        "Integrated BEP-20 Contracts and Gasless transactions, enabling cross-chain swaps, fiat purchases (Transak), and wallet interoperability using Ethers.js and BIP39 mnemonics",
        "Supported $200K Presale Fundraising by developing investor-ready MVPs with audited smart contracts (SolidProof.io) and DeFi compliant transaction workflows",
        "Collaborated on Tokenomics and Referral Systems with Sales/Marketing Teams to drive user engagement post-launch",
        "Enhanced Wallet Security via AES-256 encryption and Biometric authentication to safeguard sensitive user data",
        "Engineered seamless server-side rendering and improved mobile web performance with Next.js",
      ],
    },
    {
      title: "Senior React Native Developer",
      company: "KryptoMind",
      companyUrl: "https://kryptomind.com",
      period: "January 2022 - February 2023",
      location: "Lahore, Pakistan",
      achievements: [
        "Developed DEX/CEX Exchange Features using PancakeSwap SDK, enabling orderbook trading, token swaps, and liquidity pools",
        "Collaborated on CryptoKara Wallet with BIP39/44 mnemonics for 15+ native cryptocurrencies and BEP-20/ERC-20 token support",
        "Engineered FitScrypt dApp, integrating BEP-20 token rewards and Radar.io geo-fencing to gamify fitness tracking",
        "Built Reusable Internal Library, standardizing unit tests (Jest), integration tests (Enzyme), and E2E testing (Detox) across 5+ projects",
        "Reduced time to troubleshoot issues and overall QA cycles by 25% through improved testing infrastructure",
      ],
    },
    {
      title: "React Native Developer",
      company: "XIOTS",
      period: "November 2019 - December 2021",
      location: "Remote",
      achievements: [
        "Developed 3 Mobile Apps from concept to launch as a solo developer, ensuring timely delivery and client requirements adherence",
        "Onboarded and Trained 3 developers, optimizing workflows through JIRA and structured PR processes for enhanced collaboration",
        "Built CRM-Integrated Invoicing Solution, incorporating IoT hardware to improve app functionality and cross-device compatibility",
        "Established development best practices and code review processes for the growing team",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience
            </h2>
            <p className="mx-auto max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="backdrop-blur-sm bg-white/5 border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">
                          {experience.title}
                        </h3>
                        {experience.companyUrl ? (
                          <Link
                            href={experience.companyUrl}
                            className="text-muted-foreground flex items-center gap-2 hover:underline"
                            target="_blank"
                          >
                            {experience.company}
                            <ExternalLink className="w-4 h-4 mb-[3px]" />
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">
                            {experience.company}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground mr-1">
                          {experience.location}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
