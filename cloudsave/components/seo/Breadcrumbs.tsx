"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cloudsave.org";

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Generate JSON-LD schema
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
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Visual Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
      >
        <ol
          className="flex items-center space-x-1"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {/* Home Link */}
          <li
            className="flex items-center"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <Link
              href="/"
              className="flex items-center hover:text-primary transition-colors"
              itemProp="item"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only" itemProp="name">
                Home
              </span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {/* Dynamic Items */}
          {items.map((item, index) => (
            <li
              key={item.url}
              className="flex items-center"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground/50" />
              {index === items.length - 1 ? (
                // Current page (not a link)
                <span
                  className="font-medium text-foreground"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                // Intermediate pages (links)
                <Link
                  href={item.url}
                  className="hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
