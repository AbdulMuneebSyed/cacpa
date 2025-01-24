import React from 'react'
import Contactus from "@/components/contactus"
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";


import Hero from "@/components/hero";
import { Meteors } from '@/components/ui/meteors';
import { FlickeringGrid } from '@/components/ui/flickering';
export default function page(){
  return (
    <div className="min-h-screen max-w-screen overflow-hidden ">
      <div className="fixed z-50 top-0 max-w-screen overflow-hidden">
        <Navbar2 />
      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0 min-w-screen max-w-screen overflow-hidden min-h-screen h-[200vh]"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      {/* <Meteors number={40} /> */}
      <Contactus />
      <Footer />
    </div>
  );
}