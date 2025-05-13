import { ReactNode } from "react";

export const metadata = {
  title: "Web Development & Hosting Services | Capco",
  description:
    "Capco delivers secure, scalable web development and hosting solutions for your digital presence.",
  keywords: [
    "Web Development",
    "Hosting",
    "Cloud Hosting",
    "Domain Services",
    "Capco",
    "Security",
    "VPS",
  ],
  openGraph: {
    title: "Web Development & Hosting Services | Capco",
    description:
      "Capco delivers secure, scalable web development and hosting solutions for your digital presence.",
    url: "https://capco-cs.com/services/wdhs",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Hosting Services | Capco",
    description:
      "Capco delivers secure, scalable web development and hosting solutions for your digital presence.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
