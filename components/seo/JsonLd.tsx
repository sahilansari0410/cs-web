import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blvck.in";

// Correct App Store URLs
const APP_STORE_IOS = "https://apps.apple.com/app/cloudsave/id6757381326";
const APP_STORE_ANDROID = "https://play.google.com/store/apps/details?id=org.cloudsave.app";

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "BLVCK",
  alternateName: ["BLVCK App", "AXSA Technologies"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.svg`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png`,
  description:
    "BLVCK provides unlimited private cloud storage with zero-knowledge encryption. Your files stay completely private - even we can't see them.",
  foundingDate: "2025",
  founder: {
    "@type": "Organization",
    name: "AXSA Technologies Private Limited",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@blvck.in",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/cloudsaveapp",
    "https://x.com/cloudsaveapp",
    "https://www.instagram.com/cloudsaveorg",
  ],
  parentOrganization: {
    "@type": "Corporation",
    name: "AXSA Technologies Private Limited",
    legalName: "AXSA Technologies Private Limited",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  },
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "BLVCK",
  alternateName: "BLVCK - Unlimited Private Cloud Storage",
  description:
    "Truly unlimited photo and video cloud storage with zero-knowledge encryption.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-US",
};

// Software Application Schema (for the app)
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${siteUrl}/#application`,
  name: "BLVCK",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: ["iOS 15.0 or later", "Android 8.0 and up"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    description: "Free download with optional in-app purchases",
  },
  featureList: [
    "Unlimited cloud storage",
    "Zero-knowledge encryption",
    "End-to-end encryption",
    "Cross-device sync",
    "Photo backup",
    "Video backup",
    "File sharing",
    "Creator monetization",
    "Cloud Channels",
  ],
  downloadUrl: [APP_STORE_IOS, APP_STORE_ANDROID],
  installUrl: [APP_STORE_IOS, APP_STORE_ANDROID],
  author: {
    "@id": `${siteUrl}/#organization`,
  },
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/#service`,
  serviceType: "Cloud Storage Service",
  name: "BLVCK Cloud Storage",
  description:
    "Unlimited private cloud storage with zero-knowledge encryption. Store photos, videos, and files securely.",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BLVCK Plans",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Plan",
          description: "Cloud storage with zero-knowledge encryption and ad-supported access",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium Plan",
          description: "Unlimited storage, ad-free experience, priority support",
        },
      },
    ],
  },
  termsOfService: `${siteUrl}/terms`,
};

// BreadcrumbList Schema (for homepage)
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

// Brand Schema
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": `${siteUrl}/#brand`,
  name: "BLVCK",
  logo: `${siteUrl}/logo.svg`,
  slogan: "Your files, truly yours",
  description:
    "BLVCK is a privacy-first cloud storage platform with zero-knowledge encryption.",
  url: siteUrl,
};

export function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    serviceSchema,
    breadcrumbSchema,
    brandSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
          strategy="beforeInteractive"
        />
      ))}
    </>
  );
}

// Export individual schemas for page-specific use
export {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  serviceSchema,
  breadcrumbSchema,
  brandSchema,
};

// Helper function to create FAQ Schema
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Helper function to create Article Schema
export function createArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteUrl,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

// Helper function to create HowTo Schema
export function createHowToSchema(howTo: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

// Helper function to create Breadcrumb Schema
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
