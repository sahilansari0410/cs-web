import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cloudsave.org";

export const metadata: Metadata = {
  title: "About CloudSave - Our Mission to Democratize Cloud Storage",
  description:
    "Learn about CloudSave's mission to provide unlimited, secure, and private cloud storage for everyone. Founded in 2025, we believe digital storage is a fundamental need.",
  keywords: [
    "about CloudSave",
    "CloudSave company",
    "AXSA Technologies",
    "cloud storage company",
    "privacy-first cloud storage",
    "CloudSave mission",
    "CloudSave team",
    "secure cloud storage company",
  ],
  openGraph: {
    title: "About CloudSave - Building the Future of Cloud Storage",
    description:
      "We're on a mission to give everyone access to truly unlimited, private cloud storage without compromises.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-about.png`,
        width: 1200,
        height: 630,
        alt: "About CloudSave - Our Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CloudSave - Our Mission & Story",
    description:
      "Discover how CloudSave is revolutionizing cloud storage with privacy-first principles.",
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
