"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the viewport (100vh)
      behavior: "smooth", // Smooth scroll animation
    });
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#3f5964] to-[#19b2b0]"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 10,
              height: Math.random() * 100 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: textY, opacity: fadeIn }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transform Your Business
            </motion.span>
            <motion.span
              className="block text-[#19b2b0]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With Innovative Solutions
            </motion.span>
          </h1>
          <motion.p
            className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Navigate the future of industry with our cutting-edge business
            management and consultancy services.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-md shadow">
              <Link
                href="/contactus"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-[#3f5964] bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
              >
                Get started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button
                onClick={handleScroll} // Trigger the scroll function
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-[#19b2b0] border border-transparent rounded-md hover:bg-[#158e8c] md:py-4 md:text-lg md:px-10 transition-colors duration-300"
              >
                Learn more
                <Zap className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: fadeIn }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
