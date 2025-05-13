import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import logo from "@/public/logo/logo.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Capco | AI Assistant & Digital Solutions",
    template: "%s | Capco",
  },
  description: "Capco offers innovative digital solutions and an AI assistant to help you succeed. Discover our services and get instant support.",
  keywords: [
    "Capco", "AI Assistant", "Digital Solutions", "Consulting", "Technology", "Innovation", "Business", "Chatbot"
  ],
  openGraph: {
    title: "Capco | AI Assistant & Digital Solutions",
    description: "Capco offers innovative digital solutions and an AI assistant to help you succeed.",
    url: "https://your-domain.com",
    siteName: "Capco",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco AI Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capco | AI Assistant & Digital Solutions",
    description: "Capco offers innovative digital solutions and an AI assistant to help you succeed.",
    images: ["/capco-og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Chatbase Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, t, j, a, r) {
                w.Chatbase = w.Chatbase || {};
                w.Chatbase.apiKey = 'amh647norp38lvqaxf1tpg9x3r8wqmtu';
                j = d.createElement(s);
                a = d.getElementsByTagName(s)[0];
                j.async = true;
                j.src = t;
                a.parentNode.insertBefore(j, a);
              })(window, document, 'script', 'https://www.chatbase.co/embed/chatbase.js');
            `,
          }}
        ></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
