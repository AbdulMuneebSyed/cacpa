"use client"
import About from "@/components/about";
import Footer from "@/components/Footer";
import LandServices from "@/components/LandServices";
import Navbar2 from "@/components/navbar2";
import ServiceSlider from "@/components/hero1";
import AnimatedContent from "@/components/new";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ChatBot from "@/components/chatbot";

export const metadata = {
  title: "Home",
  description: "Welcome to Capco. Discover our AI assistant and digital solutions for your business.",
  keywords: [
    "Capco", "AI Assistant", "Digital Solutions", "Home", "Business", "Chatbot"
  ],
  openGraph: {
    title: "Capco Home",
    description: "Welcome to Capco. Discover our AI assistant and digital solutions for your business.",
    url: "https://your-domain.com",
    images: [
      {
        url: "/capco-og-image.png",
        width: 1200,
        height: 630,
        alt: "Capco AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capco Home",
    description: "Welcome to Capco. Discover our AI assistant and digital solutions for your business.",
    images: ["/capco-og-image.png"],
  },
};

export default function Home() {
   useEffect(() => {
     const lenis = new Lenis({
       duration: 1, // Scroll speed (higher value = slower scroll)
       smoothWheel: true, // Enable smooth scrolling on wheel
      //  smoothTouch: true, // Enable smooth scrolling on touch devices
     });

     function raf(time: number) {
       lenis.raf(time);
       requestAnimationFrame(raf);
     }

     requestAnimationFrame(raf);

     return () => {
       lenis.destroy();
     };
   }, []);
  return (
    <div className="min-h-screen max-w-screen overflow-hidden">
      {/* <Navbar/> */}
      <div className="fixed z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>
      <ServiceSlider />
      {/* <LandingPageBanner /> */}
      <AnimatedContent />
      <About />
      <LandServices />
      <ChatBot />
      <Footer />
    </div>
  );
}
