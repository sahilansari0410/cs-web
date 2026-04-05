import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

export const metadata: Metadata = {
  title: "Privacy Policy - BLVCK",
  description:
    "BLVCK Privacy Policy: Learn how we protect your data with zero-knowledge encryption. Your files are encrypted on your device - we cannot see, read, or access your private files. Your privacy is our priority.",
  keywords: [
    "BLVCK privacy policy",
    "cloud storage privacy",
    "zero-knowledge encryption policy",
    "data protection policy",
    "GDPR compliance",
    "privacy rights",
    "data collection policy",
    "BLVCK data security",
  ],
  openGraph: {
    title: "Privacy Policy - BLVCK",
    description:
      "Your privacy is fundamental to everything we do. Learn how BLVCK protects your data with zero-knowledge encryption.",
    url: `${siteUrl}/privacy-policy`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-privacy.png`,
        width: 1200,
        height: 630,
        alt: "BLVCK Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - BLVCK",
    description:
      "Your files are encrypted on your device. We cannot see, read, or access your private files.",
    images: [`${siteUrl}/og-privacy.png`],
  },
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  other: {
    "article:published_time": "2025-01-01T00:00:00Z",
    "article:modified_time": "2026-02-01T00:00:00Z",
    "article:section": "Legal",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
