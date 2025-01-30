"use client"
import About from "@/components/about";
import Footer from "@/components/Footer";
import LandServices from "@/components/LandServices";
import Navbar2 from "@/components/navbar2";
import ServiceSlider from "@/components/hero1";
import AnimatedContent from "@/components/new";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
   useEffect(() => {
     const lenis = new Lenis({
       duration: 1.2, // Scroll speed (higher value = slower scroll)
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

      <ServiceSlider/>
      {/* <LandingPageBanner /> */}
      <AnimatedContent/>
      <About />
      <LandServices />
      
      <Footer />
    </div>
  );
}
