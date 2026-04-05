import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cloudsave.org";

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is CloudSave really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! CloudSave offers a generous free tier with 1 TB of cloud storage. The free plan is ad-supported, meaning you'll see occasional ads, but you get full access to core features including zero-knowledge encryption, cross-device sync, and Cloud Channels. Premium plans are available for those who want an ad-free experience and additional features.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is my data on CloudSave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your data is protected with military-grade AES-256 encryption. We use zero-knowledge encryption, meaning your files are encrypted on your device before they ever leave it. Only you have the decryption keys - not even CloudSave can access your encrypted files. This ensures your privacy even in the event of a data breach.",
      },
    },
    {
      "@type": "Question",
      name: "Can I access my files offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can mark files and folders for offline access. These files will be downloaded and stored locally on your device, allowing you to view and edit them without an internet connection. Changes will automatically sync when you're back online.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cancel my subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can cancel your subscription anytime through your device settings. On iOS, go to Settings > [Your Name] > Subscriptions > CloudSave. On Android, open Google Play Store > Menu > Subscriptions > CloudSave. Your premium features remain active until the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I lose my password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reset your password using the 'Forgot Password' option on the login screen. However, due to our zero-knowledge encryption, if you lose both your password AND your recovery options, we cannot recover your encrypted files. We strongly recommend setting up account recovery options and keeping your password safe.",
      },
    },
    {
      "@type": "Question",
      name: "How much storage do I get with CloudSave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free users get 1 TB of storage, which is enough for thousands of photos and hundreds of hours of video. Premium users get access to extended storage options. Our 'unlimited' storage is subject to fair use - it's designed for personal use like photos, videos, documents, and backups.",
      },
    },
    {
      "@type": "Question",
      name: "What file types can I upload to CloudSave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CloudSave supports virtually all file types including photos (JPG, PNG, HEIC, RAW), videos (MP4, MOV, AVI), documents (PDF, DOC, XLS), and more. There are no restrictions on file types, but content must comply with our Terms of Service and Acceptable Use Policy.",
      },
    },
    {
      "@type": "Question",
      name: "How does the CloudSave Creator Program work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Creator Program allows you to monetize your content through Cloud Channels. Create a channel, build your subscriber base, and earn money when subscribers unlock your content. Premium users need 1,000+ subscribers, while free users need 10,000+ subscribers to qualify. Creators keep 100% of their earnings.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share files with others on CloudSave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can share files and folders with others by generating a secure share link. Recipients don't need a CloudSave account to view shared content. You can also share through Cloud Channels for a subscriber-based model. Note that shared content is not end-to-end encrypted.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Premium and Free plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free users get 1 TB storage, zero-knowledge encryption, and full app access with ads. Premium users enjoy an ad-free experience, extended storage, priority support, and easier access to the Creator Program (1,000 vs 10,000 subscriber requirement). Both plans include all core security features.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Help Center & Support - CloudSave",
  description:
    "Get help with CloudSave. Find answers to common questions about cloud storage, zero-knowledge encryption, billing, subscriptions, Cloud Coins, Channels, creator monetization, and troubleshooting.",
  keywords: [
    "CloudSave help",
    "CloudSave support",
    "cloud storage help",
    "CloudSave FAQ",
    "how to use CloudSave",
    "CloudSave troubleshooting",
    "cancel CloudSave subscription",
    "CloudSave pricing",
    "Cloud Coins help",
    "CloudSave contact",
    "zero-knowledge encryption help",
  ],
  openGraph: {
    title: "CloudSave Help Center - Get Support & Answers",
    description:
      "Find answers to common questions, browse help articles, or get in touch with our support team.",
    url: `${siteUrl}/support`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-support.png`,
        width: 1200,
        height: 630,
        alt: "CloudSave Help Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudSave Help Center & Support",
    description:
      "Get help with CloudSave - find answers to FAQs, troubleshooting guides, and contact support.",
    images: [`${siteUrl}/og-support.png`],
  },
  alternates: {
    canonical: `${siteUrl}/support`,
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
