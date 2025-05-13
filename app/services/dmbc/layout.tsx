import { ReactNode } from "react";

export const metadata = {
  title: "Digital Marketing & Business Consulting | Capco",
  description: "Capco offers digital marketing and business consulting to elevate your brand and drive results.",
  keywords: [
    "Digital Marketing", "Business Consulting", "Capco", "SEO", "Branding", "Marketing"
  ],
  openGraph: {
    title: "Digital Marketing & Business Consulting | Capco",
    description: "Capco offers digital marketing and business consulting to elevate your brand and drive results.",
    url: "https://your-domain.com/services/dmbc",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Business Consulting | Capco",
    description: "Capco offers digital marketing and business consulting to elevate your brand and drive results.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
