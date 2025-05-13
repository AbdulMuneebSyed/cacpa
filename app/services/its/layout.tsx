import { ReactNode } from "react";

export const metadata = {
  title: "IT Solutions & Support | Capco",
  description:
    "Capco provides IT support, managed services, cybersecurity, cloud, and business applications for your business.",
  keywords: [
    "IT Solutions",
    "IT Support",
    "Managed Services",
    "Cybersecurity",
    "Cloud",
    "Capco",
    "Business Applications",
  ],
  openGraph: {
    title: "IT Solutions & Support | Capco",
    description:
      "Capco provides IT support, managed services, cybersecurity, cloud, and business applications for your business.",
    url: "https://capco-cs.com/services/its",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions & Support | Capco",
    description:
      "Capco provides IT support, managed services, cybersecurity, cloud, and business applications for your business.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
