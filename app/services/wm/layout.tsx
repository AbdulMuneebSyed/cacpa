import { ReactNode } from "react";

export const metadata = {
  title: "Warehouse Management Solutions | Capco",
  description: "Capco's warehouse management solutions streamline inventory, optimize space, and boost operational efficiency.",
  keywords: [
    "Warehouse Management", "Inventory", "ERP", "Logistics", "Capco", "Warehouse Solutions", "Automation"
  ],
  openGraph: {
    title: "Warehouse Management Solutions | Capco",
    description: "Capco's warehouse management solutions streamline inventory, optimize space, and boost operational efficiency.",
    url: "https://your-domain.com/services/wm",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco Warehouse Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse Management Solutions | Capco",
    description: "Capco's warehouse management solutions streamline inventory, optimize space, and boost operational efficiency.",
    images: ["/capco-og-image.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
