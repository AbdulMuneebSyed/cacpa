"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AnimatedContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const values = [
    "Quality",
    "Client Satisfaction",
    "Excellence",
    "Safety",
    "Out of the box solutions",
    "Integrity, Loyalty and Confidentiality",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16"
    >
      <motion.div variants={itemVariants} className="text-center space-y-3">
        <h2 className="text-red-600 text-sm font-semibold tracking-wider uppercase">
          COMPLETE HONESTY AND TRANSPARENCY
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Vision and Values
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-start lg:space-x-16 space-y-12 lg:space-y-0">
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/home.webp"
              alt="Mission Vision Values"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:w-1/2 space-y-10">
          <div className="prose prose-lg">
            <p className="text-gray-600 leading-relaxed">
              ACES as an International Neutral Digital Infrastructure Company
              with the vision to diversify its portfolio and continue evolving
              as a Champion Neutral Host Operator, Managed Service provider, and
              a Full Turnkey System Integrator undertaking EPC contracts while
              enhancing its technical capabilities by partnering and investing
              in R&D and patents to promote localization and local
              manufacturing.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Core Values
            </h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 },
                    },
                  }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
