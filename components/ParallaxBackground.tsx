"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      style={{
        y,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "120%",
        zIndex: -1,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default ParallaxBackground;
