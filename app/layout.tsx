import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import ClientLayout from "./client";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://usmankiani256.github.io"),
  title: "M. Usman Kiani | Lead Frontend Engineer",
  description:
    "Portfolio of Muhammad Usman Kiani, a Lead Frontend Engineer specializing in React Native, React, Web3, and AI/LLM integrations.",
  keywords: [
    "Muhammad Usman Kiani",
    "Usman Kiani",
    "Lead Frontend Engineer",
    "React Native",
    "React",
    "Web3",
    "AI",
    "Blockchain",
    "TypeScript",
  ],
  authors: [{ name: "Muhammad Usman Kiani" }],
  creator: "Muhammad Usman Kiani",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usmankiani256.github.io",
    title: "Muhammad Usman Kiani | Lead Frontend Engineer",
    description:
      "Portfolio of Muhammad Usman Kiani, a Lead Frontend Engineer specializing in React Native, React, Web3, and AI/LLM integrations.",
    siteName: "Muhammad Usman Kiani Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Muhammad Usman Kiani Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usman Kiani | Lead Frontend Engineer",
    description:
      "Portfolio of Muhammad Usman Kiani, a Lead Frontend Engineer specializing in React Native, React, Web3, and AI/LLM integrations.",
    creator: "@usmankiani256",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  );
}
