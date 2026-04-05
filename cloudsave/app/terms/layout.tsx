import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cloudsave.org";

export const metadata: Metadata = {
  title: "Terms of Service - CloudSave",
  description:
    "CloudSave Terms of Service: Read the terms and conditions for using CloudSave cloud storage service. Includes information about account usage, billing, acceptable use policy, and more.",
  keywords: [
    "CloudSave terms of service",
    "CloudSave terms",
    "cloud storage terms",
    "user agreement",
    "acceptable use policy",
    "CloudSave billing terms",
    "CloudSave refund policy",
    "CloudSave legal",
  ],
  openGraph: {
    title: "Terms of Service - CloudSave",
    description:
      "Please read these terms carefully before using CloudSave. By using our service, you agree to these terms.",
    url: `${siteUrl}/terms`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-terms.png`,
        width: 1200,
        height: 630,
        alt: "CloudSave Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - CloudSave",
    description:
      "CloudSave terms and conditions for cloud storage service usage.",
    images: [`${siteUrl}/og-terms.png`],
  },
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  other: {
    "article:published_time": "2025-01-01T00:00:00Z",
    "article:modified_time": "2026-02-01T00:00:00Z",
    "article:section": "Legal",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
