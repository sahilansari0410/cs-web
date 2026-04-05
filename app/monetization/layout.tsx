import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

// HowTo Schema for monetization
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Start Earning with BLVCK Creator Program",
  description:
    "Learn how to monetize your content on BLVCK and earn 100% of your revenue through Cloud Channels.",
  totalTime: "P30D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create Your Channel",
      text: "Sign up for BLVCK and create your own Cloud Channel. Add a name, description, and profile picture.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload Quality Content",
      text: "Upload photos, videos, and files to share with your subscribers. Build a library of valuable content.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build Your Audience",
      text: "Grow your subscriber base to 1,000 (Premium) or 10,000 (Free) subscribers to qualify for monetization.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Apply for Monetization",
      text: "Once eligible, apply for the Creator Program. Premium users are automatically notified when eligible.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Start Earning",
      text: "Earn revenue based on Active Subscribers who unlock your channel 15+ times per month. Keep 100% of your earnings.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Creator Monetization Program - Earn 100% Revenue | BLVCK",
  description:
    "Turn your content into income with BLVCK's creator-first monetization program. Keep 100% of your earnings with Cloud Channels. No platform fees. Multiple payout options including UPI, bank transfer, and crypto.",
  keywords: [
    "BLVCK monetization",
    "creator program",
    "earn money cloud storage",
    "content monetization",
    "100% revenue share",
    "Cloud Channels",
    "creator earnings",
    "monetize content online",
    "passive income cloud storage",
    "creator economy",
    "digital creator platform",
  ],
  openGraph: {
    title: "Earn 100% Revenue with BLVCK Creator Program",
    description:
      "Turn your content into income. Create a Channel, build your audience, and keep every penny you earn.",
    url: `${siteUrl}/monetization`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-monetization.png`,
        width: 1200,
        height: 630,
        alt: "BLVCK Creator Monetization - 100% Revenue Share",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLVCK Creator Program - 100% Revenue Share",
    description:
      "Keep every penny you earn. Unlike other platforms, BLVCK lets creators keep 100% of monetization revenue.",
    images: [`${siteUrl}/og-monetization.png`],
  },
  alternates: {
    canonical: `${siteUrl}/monetization`,
  },
};

export default function MonetizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
