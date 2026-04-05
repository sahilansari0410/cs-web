import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

// JobPosting Schema
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Multiple Positions at BLVCK",
  description:
    "Join BLVCK and help build the future of private cloud storage. We're looking for talented engineers, designers, and more.",
  datePosted: "2026-01-01",
  validThrough: "2026-12-31",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "BLVCK",
    sameAs: siteUrl,
    logo: `${siteUrl}/logo.svg`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Remote",
      addressCountry: "Worldwide",
    },
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Worldwide",
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      minValue: 50000,
      maxValue: 200000,
      unitText: "YEAR",
    },
  },
  benefits:
    "Remote-first, Flexible hours, Competitive salary, Health benefits, Learning budget, Unlimited PTO",
};

export const metadata: Metadata = {
  title: "Careers at BLVCK - Join Our Remote-First Team",
  description:
    "Join BLVCK and help build the future of private cloud storage. We're a remote-first company looking for passionate engineers, designers, and privacy advocates. Competitive salary, flexible hours, and unlimited PTO.",
  keywords: [
    "BLVCK careers",
    "BLVCK jobs",
    "cloud storage jobs",
    "remote developer jobs",
    "privacy tech jobs",
    "AXSA Technologies careers",
    "tech jobs",
    "remote-first company",
    "startup jobs",
    "software engineer jobs",
  ],
  openGraph: {
    title: "Join BLVCK - Build the Future of Private Cloud Storage",
    description:
      "We're looking for talented individuals who share our passion for privacy and innovation. Remote-first, flexible hours, competitive benefits.",
    url: `${siteUrl}/careers`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-careers.png`,
        width: 1200,
        height: 630,
        alt: "Careers at BLVCK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at BLVCK - Join Our Team",
    description:
      "Build the future of cloud storage with us. Remote-first, competitive salary, and a mission you can believe in.",
    images: [`${siteUrl}/og-careers.png`],
  },
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="job-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
