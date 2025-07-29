import CaseStudyTemplate from "@/components/case-study-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://usmankiani256.github.io/case-studies/solidity-agent"
  ),
  title: "Solidity Analysis Agent - Case Study | Usman Kiani",
};

export default function SolidityAgentCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Solidity Analysis Agent"
      subtitle="AI-Powered Smart Contract Security Analyzer"
      description="A local-first AI assistant that runs entirely in your browser, capable of understanding Solidity smart contracts, identifying potential vulnerabilities, and suggesting code improvements. No server-side processing means your code stays private."
      tags={[
        "React",
        "Solidity",
        "AI",
        "TypeScript",
        "WebGPU",
        "WebLLM",
        "Service Workers",
      ]}
      timeline="1 week (2025)"
      role="Developer"
      overview={`
<strong class='text-xl'>Features</strong> <br><br>
<ul>
• <strong>Local-First Processing:</strong> All analysis happens in your browser using WebLLM - no data is sent to external servers, ensuring complete privacy. <br>
• <strong>Deep Code Comprehension:</strong> Understands the intricacies of your Solidity smart contracts. <br>
• <strong>Automated Vulnerability Detection:</strong> Proactively identifies common security vulnerabilities. <br>
• <strong>Actionable Improvement Suggestions:</strong> Offers concrete recommendations for optimizing gas usage, enhancing security, and improving code clarity. <br>
• <strong>Smart Contract Analysis:</strong> Upload or paste Solidity code for automated security analysis. <br>
• <strong>Interactive Chat:</strong> Ask natural language questions about your smart contract. <br>
• <strong>Code Highlighting:</strong> Syntax highlighting for better code readability.
</ul>
<br><br>

<strong class='text-xl'>Use Cases</strong> <br><br>
• <strong>Security Audits:</strong> Get a preliminary security review of your smart contracts, identifying potential vulnerabilities like reentrancy, integer overflows, and access control issues. <br>
• <strong>Code Optimization:</strong> Discover opportunities to reduce gas costs and improve the efficiency of your contract functions. <br>
• <strong>Best Practice Adherence:</strong> Learn if your contract follows established Solidity best practices and receive suggestions for alignment. <br>
• <strong>Complex Logic Explanation:</strong> Ask questions like What does this complex function do?, Explain the inheritance structure, or Is this contract upgradeable? <br>
• <strong>Targeted Queries:</strong> Get insights on specific parts of your code, for example, <span class='bg-gray-800 p-0.5 rounded-md italic'>What are the potential risks in the transferFrom function?</span> or <span class='bg-gray-800 p-0.5 rounded-md italic'>How can I make the _mint function safer?</span> <br><br>
`}
      challenges={[
        "Selecting the right AI models to understand complex Solidity syntax and semantics",
        "Creating offline inference capability for sensitive smart contract code",
        "Ensuring real-time analysis performance for large contract files",
        "Hybrid reasoning to combine static analysis with AI insights",
        "Categorize LLM responses to severity levels",
      ]}
      solutions={[
        "Utilized Qwen3 models with 1.7B parameters for Hybrid Reasoning and Contextual Understanding",
        "Developed WebLLM-based inference engine with WebGPU-accelerated inference for client-side processing",
        "Leveraged Service Workers for offline support, background processing, and streaming responses",
        "Implemented Thinking mode with curated system prompts and user prompts for deeper analysis",
        "Leveraged JSON response formats from WebLLM with injected TypeScript interfaces for better type safe AI responses",
      ]}
      outcomes={[]}
      images={[
        {
          src: "/saa/ss1.png",
          alt: "Solidity Analysis Agent Screenshot 1",
        },
        {
          src: "/saa/ss2.png",
          alt: "Solidity Analysis Agent Screenshot 2",
        },
      ]}
      imageStyle="w-[500px]"
      techStack={[
        "React",
        "TypeScript",
        "Solidity",
        "Syntax Highlighter",
        "WebGPU",
        "WebLLM",
        "IndexedDB",
        "Service Workers",
        "Vite",
        "TailwindCSS",
        "GitHub Pages",
        "React Editor",
      ]}
      liveLinkLabel="Solidity Analysis Agent"
      liveLink="https://usmankiani256.github.io/solidity-analysis-agent"
      codeLink="https://github.com/usmankiani256/solidity-analysis-agent"
    />
  );
}
