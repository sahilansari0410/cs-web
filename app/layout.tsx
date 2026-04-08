import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Base URL for the site - used for canonical URLs and OG images
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: "BLVCK - Unlimited Private Cloud Storage | Zero-Knowledge Encryption",
    template: "%s | BLVCK",
  },
  description:
    "BLVCK offers truly unlimited photo and video cloud storage with zero-knowledge encryption. No storage limits, no compression, no surveillance. Your files stay private - even we can't see them. Start free with 1TB storage.",

  // Extended Keywords for SEO
  keywords: [
    "cloud storage",
    "unlimited cloud storage",
    "private cloud storage",
    "encrypted cloud storage",
    "zero-knowledge encryption",
    "photo backup",
    "video backup",
    "secure file storage",
    "end-to-end encryption",
    "privacy-first cloud",
    "online storage",
    "file backup service",
    "cloud backup",
    "secure cloud storage",
    "best cloud storage 2026",
    "unlimited photo storage",
    "unlimited video storage",
    "cloud storage for creators",
    "encrypted file sharing",
    "private file hosting",
  ],

  // Author and Creator Information
  authors: [
    { name: "BLVCK", url: siteUrl },
    { name: "AXSA INNOVATIONS LLP" },
  ],
  creator: "AXSA INNOVATIONS LLP",
  publisher: "BLVCK",

  // Generator
  generator: "Next.js",

  // Application Name
  applicationName: "BLVCK",

  // Referrer Policy
  referrer: "origin-when-cross-origin",

  // Category
  category: "Technology",

  // Classification
  classification: "Cloud Storage Service",

  // Icons Configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#007BFF",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Open Graph Configuration
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    url: siteUrl,
    siteName: "BLVCK",
    title: "BLVCK - Unlimited Private Cloud Storage with Zero-Knowledge Encryption",
    description:
      "Truly unlimited photo and video storage with military-grade encryption. No storage caps, no compression, complete privacy. Your files, truly yours.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BLVCK - Unlimited Private Cloud Storage",
        type: "image/png",
      },
    ],
  },

  // Twitter Card Configuration
  twitter: {
    card: "summary_large_image",
    site: "@cloudsaveapp",
    creator: "@cloudsaveapp",
    title: "BLVCK - Unlimited Private Cloud Storage",
    description:
      "Truly unlimited photo & video storage with zero-knowledge encryption. No limits. No compression. Complete privacy.",
    images: [`${siteUrl}/og-image.png`],
  },

  // Robots Configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification Tags
  verification: {
    google: "nx4tROnzxWtPjf3NUwKYuvewnlVX0nJmylvLn6TS1j0",
  },

  // Alternate Languages
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en-US`,
      "en-GB": `${siteUrl}/en-GB`,
      "en-IN": `${siteUrl}/en-IN`,
      "x-default": siteUrl,
    },
  },

  // App Links
  appLinks: {
    ios: {
      url: "cloudsave://",
      app_store_id: "6757381326",
      app_name: "BLVCK",
    },
    android: {
      package: "org.cloudsave.app",
      app_name: "BLVCK",
      url: "cloudsave://",
    },
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },

  // Archives - remove if no blog exists
  // archives: [`${siteUrl}/blog`],

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Other Meta Tags
  other: {
    "apple-itunes-app": "app-id=6757381326",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "BLVCK",
    "msapplication-TileColor": "#007BFF",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#007BFF",
    "color-scheme": "light dark",

    // Additional SEO Tags
    "og:email": "support@blvck.in",

    // DC Tags (Dublin Core)
    "DC.title": "BLVCK - Unlimited Private Cloud Storage",
    "DC.creator": "AXSA INNOVATIONS LLP",
    "DC.subject": "Cloud Storage, Privacy, Encryption, File Backup",
    "DC.description": "Unlimited private cloud storage with zero-knowledge encryption",
    "DC.publisher": "BLVCK",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.language": "en",

    // Geo Tags
    "geo.region": "IN-MH",
    "geo.placename": "Navi Mumbai",
    "geo.position": "19.0330;73.0297",
    "ICBM": "19.0330, 73.0297",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data - JSON-LD */}
        <JsonLd />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
