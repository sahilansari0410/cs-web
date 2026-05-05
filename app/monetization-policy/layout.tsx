import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monetization Policy | 100X",
};

export default function MonetizationPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
