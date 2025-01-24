import  {OrbitingCirclesMobile , OrbitingCirclesDemo} from "@/components/ui/orbiting";
import About from "@/components/about";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import LandingPageBanner from "@/components/landingPageBanner";
import LandServices from "@/components/LandServices";
import Navbar from "@/components/navbar";
import Navbar2 from "@/components/navbar2";
import Vision from "@/components/Vision";
import ServiceSlider from "@/components/hero1";
import AnimatedContent from "@/components/new";

export default function Home() {
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
