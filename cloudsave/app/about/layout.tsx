import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

export const metadata: Metadata = {
  title: "About BLVCK - Our Mission to Democratize Cloud Storage",
  description:
    "Learn about BLVCK's mission to provide unlimited, secure, and private cloud storage for everyone. Founded in 2025, we believe digital storage is a fundamental need.",
  keywords: [
    "about BLVCK",
    "BLVCK company",
    "AXSA Technologies",
    "cloud storage company",
    "privacy-first cloud storage",
    "BLVCK mission",
    "BLVCK team",
    "secure cloud storage company",
  ],
  openGraph: {
    title: "About BLVCK - Building the Future of Cloud Storage",
    description:
      "We're on a mission to give everyone access to truly unlimited, private cloud storage without compromises.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-about.png`,
        width: 1200,
        height: 630,
        alt: "About BLVCK - Our Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BLVCK - Our Mission & Story",
    description:
      "Discover how BLVCK is revolutionizing cloud storage with privacy-first principles.",
    images: [`${siteUrl}/og-about.png`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
