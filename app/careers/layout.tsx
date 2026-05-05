import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | 100X",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
