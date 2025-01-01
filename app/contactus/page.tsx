import React from 'react'
import Contactus from "@/components/contactus"
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";


import Hero from "@/components/hero";
export default function page(){
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