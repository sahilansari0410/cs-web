import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cloudsave.org";

export const metadata: Metadata = {
  title: "Monetization Policy - CloudSave Creator Program",
  description:
    "CloudSave Creator Monetization Policy: Learn about eligibility requirements, the 15-unlock rule, revenue calculation, payout methods, and tax obligations for CloudSave creators.",
  keywords: [
    "CloudSave monetization policy",
    "creator program terms",
    "CloudSave payout policy",
    "creator revenue rules",
    "15-unlock rule",
    "CloudSave creator eligibility",
    "creator tax obligations",
    "monetization requirements",
  ],
  openGraph: {
    title: "Monetization Policy - CloudSave Creator Program",
    description:
      "Everything you need to know about earning money as a CloudSave creator. Eligibility, revenue calculation, and payouts.",
    url: `${siteUrl}/monetization-policy`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-monetization-policy.png`,
        width: 1200,
        height: 630,
        alt: "CloudSave Monetization Policy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CloudSave Monetization Policy",
    description:
      "Creator program terms, eligibility requirements, and payout information.",
    images: [`${siteUrl}/og-monetization-policy.png`],
  },
  alternates: {
    canonical: `${siteUrl}/monetization-policy`,
  },
  other: {
    "article:published_time": "2025-01-01T00:00:00Z",
    "article:modified_time": "2026-02-01T00:00:00Z",
    "article:section": "Legal",
  },
};

export default function MonetizationPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
