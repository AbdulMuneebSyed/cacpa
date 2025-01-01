"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import oip from "@/public/parallax/OIP.jpg"
import { motion } from "framer-motion";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const [Bgvisible,setBgVisible]= useState(false);
  useEffect(() => {
    setTimeout(() => {
      gsap.from(".aboutCapCO", {
        y: -150,
        scale: 1.6,
        markers: true,
        scrollTrigger: {
          trigger: ".aboutCapCO",
          start: "top 80%",
          end: "top center",
          scrub: true,
        },
      });
    }, 50);
     ScrollTrigger.create({
       trigger: ".AboutusKaBGWalaImage",
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
    <div className="min-h-screen AboutusKaBGWalaImage relative">
      {/* Parallax background image */}
      <div
        className={`${
          Bgvisible ? "" : "opacity-0 invisible"
        }fixed bgwalaImage inset-0 bg-contain bg-center z-[-1]`}
        style={{
          backgroundImage:
            "url('https://inacomp.net/wp-content/uploads/2015/06/IT-Engineering.jpg')", // Using the provided image URL
          backgroundAttachment: "fixed", // This is key for the parallax effect
        }}
      ></div>

      <div className="min-h-screen flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 1 }}
          className="text-center p-8 md:aboutCapCO bg-white rounded-lg shadow-lg max-w-4xl"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About CAPCO</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            At CAPCO, we specialize in empowering businesses across Qatar,
            India, and Canada with innovative solutions and strategies. We are
            committed to transforming organizations by fostering resilience,
            optimizing operational efficiency, and driving sustainable growth.
            Through collaborative partnerships, we address complex challenges
            and deliver lasting value to our clients, employees, and
            communities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
