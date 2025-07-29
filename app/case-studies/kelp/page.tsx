import CaseStudyTemplate from "@/components/case-study-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://usmankiani256.github.io/case-studies/kelp"),
  title: "Kelp - Case Study | Usman Kiani",
};

export default function KelpCaseStudy() {
  return (
    <CaseStudyTemplate
      title="<span class='gradient-text'>Kelp</span>"
      subtitle="Stable. Money For All."
      description="A currency designed to #GROWLIKEKELP through autonomous decentralized mechanisms, ultimately becoming the foundation for a new global financial ecosystem."
      tags={[
        "React Native",
        "Expo",
        "Binance Smart Chain",
        "BEP-20",
        "Ethers.js",
        "DeFi",
      ]}
      timeline="8 months (2023)"
      role="Lead React Native Developer"
      overview="The premise for Kelp is to integrate core central banking philosophy with blockchain technology to create a currency that encompasses the best of both systems. An assembly of smart contracts and server-side algorithms create an ecosystem that can dynamically adjust key variables in order to persuade market behavior in order to achieve a particular result for price stability."
      challenges={[
        "Implementing secure key management and wallet recovery",
        "Execution of Pre-sale fundraising and Smart Contract Audits",
        "Optimizing app performance for low-end devices and high-end devices",
        "Building gasless transaction mechanisms for better user experience",
        "Building a viral marketing engine to help grow Kelp's user base for our public launch once we hit critical mass of users",
      ]}
      solutions={[
        "Implemented hierarchical deterministic (HD) wallet architecture with secure storage and mnemonic ",
        "Built investor-ready MVPs with audited smart contracts (SolidProof.io) and DeFi compliant workflows",
        "Optimized React Native performance with custom native modules",
        "Developed meta-transaction relay service for gasless operations",
        "Collaborated with Marketing and Sales to build a comprehensive Referral Reward system to assist user acquisition post-launch",
      ]}
      outcomes={[
        "Achieved 2M+ wallet creations",
        "Reached 1.7M+ app downloads across iOS and Android",
        "Raised $200K+ during initial pre-sale round",
        "450K followers on Twitter",
        "480K subscribers on YouTube",
        "350K members on Telegram",
      ]}
      techStack={[
        "React Native",
        "Expo",
        "TypeScript",
        "Ethers.js",
        "Redux Toolkit",
        "Realm Database",
        "QuickNode",
        "Firebase",
        "BEP-20 Token",
        "Transak",
        "Uniswap",
        "WalletConnect",
      ]}
      images={[
        { src: "/kelp/kelp1.webp", alt: "Kelp App Screenshot 1" },
        { src: "/kelp/kelp2.webp", alt: "Kelp App Screenshot 2" },
        { src: "/kelp/kelp3.webp", alt: "Kelp App Screenshot 3" },
        { src: "/kelp/kelp4.webp", alt: "Kelp App Screenshot 4" },
      ]}
      liveLinkLabel="Kelp Website"
      liveLink="https://kelp.org"
      whitePaperLink="https://learn.kelp.org"
      appStoreLink="https://apps.apple.com/us/app/kelp/id1632857274"
      googlePlayLink="https://play.google.com/store/apps/details?id=com.app.kelpa"
    />
  );
}
