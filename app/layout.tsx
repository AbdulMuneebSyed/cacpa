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
  title: "CAPCO – Driving Your Success",
  description:
    "CAPCO empowers businesses across Qatar, India, and Canada with tailored consulting, HR, IT, and digital solutions to drive sustainable growth.",
  keywords:
    "CAPCO, business consulting, HR solutions, digital marketing, IT services, asset management, Qatar, India, Canada, enterprise solutions, growth strategy",
  authors: [{ name: "CAPCO" }],
  creator: "CAPCO",
  metadataBase: new URL("https://www.capco-cs.com"),
  openGraph: {
    title: "CAPCO – Empowering Business Growth",
    description:
      "Delivering strategic consulting, IT solutions, HR services, and more to help your business thrive.",
    url: "https://www.capco-cs.com",
    siteName: "CAPCO",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "CAPCO - Business Empowerment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAPCO – Driving Business Forward",
    description:
      "Strategic consulting, HR, IT, and digital services to transform your business.",
    images: [`/logo/logo.png`],
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
