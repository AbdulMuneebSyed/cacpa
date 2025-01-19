"use client"
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Vision = () => {
    const [Bgvisible,setBgVisible]= useState(false);
    useEffect(() => {
      ScrollTrigger.create({
        trigger: ".AboutusKaBGWalaImage1",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => setBgVisible(true),
        onLeave: () => setBgVisible(false),
        onEnterBack: () => setBgVisible(true),
        onLeaveBack: () => setBgVisible(false),
      });
      //   return () => {
      //     scrollTriggerInstance.kill();
      //   };
    }, []);
  return (
    <div className="min-h-screen relative">
      {/* Parallax background image */}

      <div className="min-h-screen flex justify-center items-center ">
        <div className="text-center p-8  rounded-lg shadow-lg max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            We Capco are on a mission
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our objective is to empower organizations across Qatar, India, and
            Canada by delivering tailor-made business solutions and cutting-edge
            strategies that drive sustainable growth, optimize operational
            efficiency, and ensure long-term success. CAPCO is committed to
            being a trusted strategic partner, helping clients realize their
            vision through unparalleled expertise in consulting, human resource
            management, and technology services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision
//checked