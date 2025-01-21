"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import about from "@/public/parallax/OIP.jpg"
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    // const contentAnimation = gsap.from(".aboutCapCO", {
    //   y: -150,
    //   scale: 1.6,
    //   scrollTrigger: {
    //     trigger: ".aboutCapCO",
    //     start: "top 80%",
    //     end: "top center",
    //     scrub: true,
    //   },
    // });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".AboutusKaBGWalaImage",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => setBgVisible(true),
      onLeave: () => setBgVisible(false),
      onEnterBack: () => setBgVisible(true),
      onLeaveBack: () => setBgVisible(false),
    });

    return () => {
      // contentAnimation.kill();
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <div className="min-h-screen AboutusKaBGWalaImage relative">
      <BackgroundImage visible={bgVisible} />
      <ContentSection />
    </div>
  );
};

const BackgroundImage = ({ visible }: { visible: boolean }) => (
  <div
    className={`fixed inset-0 bg-contain bg-center z-[-1] transition-opacity duration-300 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{
      backgroundImage:
        `url('${about.src}')`,
      backgroundAttachment: "fixed",
    }}
  />
);

const ContentSection = () => (
  <div className="min-h-screen flex justify-center items-center relative">
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 1 }}
      className="text-center p-8 aboutCapCO bg-white rounded-lg shadow-lg max-w-4xl relative z-10"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About CAPCO</h1>
      <p className="text-gray-700 leading-relaxed text-lg">
        At CAPCO, we specialize in empowering businesses across Qatar, India,
        and Canada with innovative solutions and strategies. We are committed to
        transforming organizations by fostering resilience, optimizing
        operational efficiency, and driving sustainable growth. Through
        collaborative partnerships, we address complex challenges and deliver
        lasting value to our clients, employees, and communities.
      </p>
    </motion.div>
  </div>
);

export default About;
