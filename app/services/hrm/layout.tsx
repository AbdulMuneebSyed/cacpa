import { ReactNode } from "react";

export const metadata = {
  title: "Human Resource Management | Capco",
  description:
    "Capco's HRM solutions empower organizations with efficient talent, performance, and development management.",
  keywords: [
    "Human Resource Management",
    "HRM",
    "Capco",
    "Talent Management",
    "Performance",
    "Recruitment",
  ],
  openGraph: {
    title: "Human Resource Management | Capco",
    description:
      "Capco's HRM solutions empower organizations with efficient talent, performance, and development management.",
    url: "https://capco-cs.com/services/hrm",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco HRM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Resource Management | Capco",
    description:
      "Capco's HRM solutions empower organizations with efficient talent, performance, and development management.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
