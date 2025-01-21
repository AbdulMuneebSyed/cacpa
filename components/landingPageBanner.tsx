"use client"
import React from 'react'
import { motion } from "framer-motion";
import mr from "@/public/4.png"
import iep from "@/public/5.png"
import ei from "@/public/3.png";
import oe from "@/public/1.png";
import me from "@/public/2.png";
import Image from 'next/image';
const LandingPageBanner = () => {
  return (
    <section className="h-auto flex flex-col items-center justify-center text-center bg-white py-8 px-4 sm:py-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1 }}
        className="text-base sm:text-xl font-bold text-blue-800"
      >
        Unleash Your Business Potential With Capco
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base text-gray-600 mt-2"
      >
        We assist you expand your business regardless of whether you are a
        start-up, SME, or huge corporation.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-10 sm:gap-8 mt-6">
        {[
          { icon: iep, title: "Improved Efficiency and Productivity" },
          { icon: me, title: "Market Expansion" },
          { icon: ei, title: "Enhanced Innovation" },
          { icon: mr, title: "Measurable Results" },
          { icon: oe, title: "Operational Excellence" },
        ].map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center cursor-pointer w-28 sm:w-32"
          >
            <Image src={icon} alt="icon" className="text-3xl w-16 sm:text-4xl"/>
            <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center">
              {title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


export default LandingPageBanner;
//checked