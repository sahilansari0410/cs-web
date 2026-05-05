import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 100X",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
