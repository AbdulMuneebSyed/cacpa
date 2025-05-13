import { ReactNode } from "react";

export const metadata = {
  title: "Governance, Risk Management & Compliance | Capco",
  description:
    "Capco's GRC services ensure compliance, manage risk, and optimize governance for your organization.",
  keywords: [
    "Governance",
    "Risk Management",
    "Compliance",
    "GRC",
    "Capco",
    "Audit",
    "Policy",
  ],
  openGraph: {
    title: "Governance, Risk Management & Compliance | Capco",
    description:
      "Capco's GRC services ensure compliance, manage risk, and optimize governance for your organization.",
    url: "https://capco-cs.com/services/grmc",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco GRC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governance, Risk Management & Compliance | Capco",
    description:
      "Capco's GRC services ensure compliance, manage risk, and optimize governance for your organization.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
