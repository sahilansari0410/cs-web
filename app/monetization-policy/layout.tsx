import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

export const metadata: Metadata = {
  title: "Monetization Policy - BLVCK Creator Program",
  description:
    "BLVCK Creator Monetization Policy: Learn about eligibility requirements, the 15-unlock rule, revenue calculation, payout methods, and tax obligations for BLVCK creators.",
  keywords: [
    "BLVCK monetization policy",
    "creator program terms",
    "BLVCK payout policy",
    "creator revenue rules",
    "15-unlock rule",
    "BLVCK creator eligibility",
    "creator tax obligations",
    "monetization requirements",
  ],
  openGraph: {
    title: "Monetization Policy - BLVCK Creator Program",
    description:
      "Everything you need to know about earning money as a BLVCK creator. Eligibility, revenue calculation, and payouts.",
    url: `${siteUrl}/monetization-policy`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-monetization-policy.png`,
        width: 1200,
        height: 630,
        alt: "BLVCK Monetization Policy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BLVCK Monetization Policy",
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
