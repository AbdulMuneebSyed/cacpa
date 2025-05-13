import { ReactNode } from "react";

export const metadata = {
  title: "Business Management Consulting | Capco",
  description: "Capco's business management consulting services help organizations optimize operations and achieve growth.",
  keywords: [
    "Business Management", "Consulting", "Capco", "Business Consulting", "Strategy", "Operations"
  ],
  openGraph: {
    title: "Business Management Consulting | Capco",
    description: "Capco's business management consulting services help organizations optimize operations and achieve growth.",
    url: "https://your-domain.com/services/bmc",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco Business Management Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Management Consulting | Capco",
    description: "Capco's business management consulting services help organizations optimize operations and achieve growth.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
