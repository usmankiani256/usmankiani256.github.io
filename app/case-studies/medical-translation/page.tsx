import CaseStudyTemplate from "@/components/case-study-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://usmankiani256.github.io/case-studies/medical-translation"
  ),
  title: "Medical Translation App - Case Study | Usman Kiani",
};

export default function MedicalTranslationCaseStudy() {
  return (
    <CaseStudyTemplate
      nda={true}
      title="<span class='gradient-text'>Medical Translation App</span>"
      subtitle="Your offline medical interpreter"
      description="A medical translation app that delivers instant offline translation with smart clinical context."
      tags={[
        "React Native",
        "iOS",
        "React",
        "MLC-LLM",
        "TypeScript",
        "Speech-To-Text",
        "Text-To-Speech",
        "HIPAA",
        "Offline",
      ]}
      timeline="4 months (2025)"
      role="Lead Frontend Engineer"
      overview={`
An always available medical interpreter that works completely offline ensuring data privacy. Key features include: <br><br> 

• <strong>Offline and Secure:</strong> On-device processing, no data leaves your phone. <br>
• <strong>Medical Context:</strong> Models are post-trained with extensive medical data. <br>
• <strong>Accessibility:</strong> Voice input/output support and text for hearing impaired. <br>
• <strong>Free to use:</strong> Cut other interpretation costs and pull out your device. <br>
`}
      challenges={[
        "Meeting HIPAA compliance standards while preserving translation accuracy",
        "Ensuring model privacy and security for user transparency and compliance",
        "Enabling sub-100ms latency for real-time medical conversations",
        "Fine-tuning the MLC-LLM models for medical use cases and context",
        "Building consistent AI Engine for Web and Mobile",
        "Supporting multiple languages with offline speech recognition and text-to-speech",
        "Implementing an audit report feature for Compliance and Risk department",
      ]}
      solutions={[
        "Implemented offline inference, STT, TTS, caching, and data processing",
        "Hosted models on IPFS providing SHA-256 hash for model integrity",
        "Utilized quantization for Qwen3 models to ensure low-latency for edge devices",
        "Trained models on medical data and vocabulary to improve accuracy and context awareness",
        "Implemented WebLLM with WebGPU acceleration for Web, MLC-LLM for iOS using Native Modules",
        "Utilized WebSpeech + SpeechSynthesis APIs for Web, and SFSpeechRecognizer + AVSpeechSynthesizer for iOS",
        "Implemented Hybrid Reasoning model with Compliance and Risk auditorial insights",
      ]}
      outcomes={[
        "Built a secure and private AI Engine for Web and Mobile",
        "Maintained user trust and transparency with IPFS hosted models",
        "Achieved consistent low-latency across all platforms and devices",
        "Maintained 95%+ translation accuracy for medical terminology",
        "Uniform translation experience across Web and Mobile",
        "Supported 100+ language pairs with medical specialization",
        "Successfully deployed in emergency scenarios, assisting first responders in critical communication situations",
      ]}
      techStack={[
        "React Native",
        "React",
        "iOS",
        "TypeScript",
        "MLC-LLM",
        "WebLLM",
        "WebGPU",
        "IPFS",
        "IndexedDB",
        "WebSpeech",
        "SpeechSynthesis",
        "SFSpeechRecognizer",
        "AVSpeechSynthesizer",
        "Hybrid Reasoning",
        "Qwen3",
        "Model Quantization",
      ]}
      liveLinkLabel="App Website"
      liveLink="#"
      webLink="#"
      appStoreLink="#"
    />
  );
}
