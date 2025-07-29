import CaseStudyTemplate from "@/components/case-study-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://usmankiani256.github.io/case-studies/social-fi"
  ),
  title: "SocialFi Platform - Case Study | Usman Kiani",
};

export default function SocialFiCaseStudy() {
  return (
    <CaseStudyTemplate
      nda={true}
      title="<span class='gradient-text'>SocialFi Platform</span>"
      subtitle="Decentralized Social Finance Ecosystem"
      description="A revolutionary SocialFi platform that combines social networking with decentralized finance. Users can create and trade NFTs, host livestreams, and participate in competitions, all with zero transaction costs."
      tags={[
        "React Native",
        "Next.js",
        "Solidity",
        "The Graph",
        "Ethereum",
        "Arbitrum",
        "IPFS",
        "Tenderly",
        "Gasless",
      ]}
      timeline="18 months (2023-2024)"
      role="Lead Frontend Engineer"
      overview="A decentralized SocialFi platform that combines social networking with decentralized finance. Users can create and trade NFTs, host livestreams, competitions, and participate in various activities, all with zero transaction costs.<br><br>100% decentralized, Web3 Authentication, IPFS storage, The Graph indexing, and more."
      challenges={[
        "Migrating from Ethereum mainnet to Arbitrum Nova and migrating user data and infrastructure",
        "Building efficient NFT marketplace with cross-chain compatibility",
        "Creating scalable social features on-chain without compromising decentralization",
        "Implementing complex royalty distribution mechanisms and gasless transactions",
        "Building a scalable solution to handle high volume RPC requests",
        "Validating broadcasted transactions and reflecting them for users instantly",
      ]}
      solutions={[
        "An 18 hour migration from Ethereum mainnet to Arbitrum Nova, 38 smart contracts migrated, Token bridging, complete user data and infrastructure migrated",
        "Created a robust system for NFT creation, minting, and trading, supporting Ethereum Mainnet, Arbitrum Nova, Arbitrum One and Polygon",
        "Implemented Web3Auth for on-chain user and wallet management",
        "Royalty Management contracts and relayer solutions for meta transactions",
        "Smart data caching, throttling, batching, and rate limiting",
        "Implement The Graph for instant data indexing and event fetching",
      ]}
      outcomes={[
        "Processed 50K+ transactions on the Arbitrum Nova chain",
        "Seamless user experience with 100% of users migrated to Arbitrum Nova",
        "Reduced RPC load by 65% by implementing optimizations and caching",
        "Royalty based revenue model with 100% of users using the platform",
        "Reduced transaction costs by 63% using Layer 2 scaling solutions",
        "Reduced Block sync times to <10s using the Graph enabling instant updates",
      ]}
      techStack={[
        "React Native",
        "React",
        "TypeScript",
        "Solidity",
        "Hardhat",
        "Ethereum",
        "Arbitrum",
        "IPFS",
        "Tenderly",
        "Web3Auth",
        "The Graph",
        "TypeChain",
      ]}
      liveLinkLabel="Platform Website"
      liveLink="#"
      webLink="#"
      appStoreLink="#"
      googlePlayLink="#"
    />
  );
}
