import React from 'react'
import Contactus from "@/components/contactus"
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import OrbitingCirclesDemo from "@/app/new/page";
import About from "@/components/about";
import LandServices from "@/components/LandServices";
import Navbar from "@/components/navbar";

import Hero from "@/components/hero";
const page = () => {
  return (
    <div className="min-h-screen max-w-screen overflow-hidden ">
      <div className="fixed z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>
      <Contactus />
      <Footer />
    </div>
  );
}

export default page