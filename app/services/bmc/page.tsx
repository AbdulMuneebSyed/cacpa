import HeroSection from "@/components/hero-section";
import AnimatedServices from "@/components/animated-services";
import ContactSection from "@/components/contact-section";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer"
export default function Page() {
  return (
    <main>
      <div className="fixed z-50 top-0 max-w-screen">
              <Navbar2 />
            </div>
      <HeroSection />
      <AnimatedServices />
      <ContactSection />
      <Footer/>
    </main>
  );
}
