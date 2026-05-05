import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monetization | 100X",
};

export default function MonetizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
