// SEO Components and Utilities
export {
  JsonLd,
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  serviceSchema,
  breadcrumbSchema,
  brandSchema,
  createFAQSchema,
  createArticleSchema,
  createHowToSchema,
  createBreadcrumbSchema,
} from "./JsonLd";

export { Breadcrumbs } from "./Breadcrumbs";

// Re-export types for convenience
export type FAQItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type ArticleData = {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
};

export type HowToStep = {
  name: string;
  text: string;
  image?: string;
};

export type HowToData = {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
};
