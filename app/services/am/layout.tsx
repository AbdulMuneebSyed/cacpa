import { ReactNode } from "react";

export const metadata = {
  title: "Asset Management Services | Capco",
  description: "Discover Capco's advanced asset management solutions: verification, tagging, lifecycle, IT asset management, and more.",
  keywords: [
    "Asset Management", "RFID", "Barcode", "Lifecycle", "IT Asset Management", "Capco", "Asset Tagging", "Verification"
  ],
  openGraph: {
    title: "Asset Management Services | Capco",
    description: "Discover Capco's advanced asset management solutions: verification, tagging, lifecycle, IT asset management, and more.",
    url: "https://your-domain.com/services/am",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco Asset Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Management Services | Capco",
    description: "Discover Capco's advanced asset management solutions: verification, tagging, lifecycle, IT asset management, and more.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
