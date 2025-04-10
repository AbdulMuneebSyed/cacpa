"use client"
import HeroSection from "@/components/services/bmc/hero-section";
import AnimatedServices from "@/components/services/bmc/animated-services";
import ContactSection from "@/components/services/bmc/contact-section";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer"
export default function Page() {
  return (
    <main className="max-w-screen relative overflow-x-clip">
      <div className="sticky z-50 top-0 max-w-screen">
              <Navbar2 />
            </div>
      <HeroSection />
      <AnimatedServices />
      <ContactSection />
      <Footer/>
    </main>
  );
}
