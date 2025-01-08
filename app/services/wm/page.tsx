"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  Truck,
  Box,
  Barcode,
  Wifi,
  Smartphone,
  Speaker,
  Database,
  WarehouseIcon,
  ArrowRight,
} from "lucide-react";
import { AnimatedWarehouse } from "@/components/animated-warehouse";
import { FeatureCard } from "@/components/feature-card";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";

const features = [
  {
    icon: WarehouseIcon,
    title: "Warehouse Governance Solution",
    description:
      "Implementing robust governance frameworks to ensure compliance, visibility, and control over all warehousing activities.",
  },
  {
    icon: Database,
    title: "Modern ERP Integration",
    description:
      "Advanced Enterprise Resource Planning software tailored to the warehousing and logistics industry for enhanced efficiency.",
  },
  {
    icon: Box,
    title: "Inventory Management",
    description:
      "Precise stock counting through systematic methods and automated solutions to ensure accurate inventory management.",
  },
  {
    icon: Barcode,
    title: "Physical Verification",
    description:
      "Verifying stock with photographic evidence to ensure accuracy and reduce risk of errors during stock-taking processes.",
  },
  {
    icon: Truck,
    title: "WDC Solutions",
    description:
      "Efficient solutions for receiving goods, picking, packing, and performing stock-taking operations to streamline processes.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Handheld devices equipped with barcode scanning and real-time data entry for mobile inventory management.",
  },
  {
    icon: Wifi,
    title: "Wireless Infrastructure",
    description:
      "Reliable wireless network setup to support mobile devices and real-time data exchange across warehouse operations.",
  },
  {
    icon: Speaker,
    title: "Voice Solutions",
    description:
      "Voice-guided picking and communication solutions to enhance accuracy and reduce human error during inventory operations.",
  },
];

export default function WarehousePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,  // scrolls by 100vh
      behavior: 'smooth', // smooth scrolling
    });
  };
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-[#3f5964] max-w-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <div className="fixed z-50 top-0 max-w-screen">
              <Navbar2 />
            </div>
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #19b2b033 0%, transparent 70%)",
            y: backgroundY,
          }}
        />

        {/* Animated Background Patterns */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-20"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #19b2b0 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-[#19b2b0]/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-[#19b2b0]">
                  Smart Warehouse Solutions
                </span>
              </motion.div>

              <motion.h1
                className="text-balance text-4xl font-bold text-white md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Next-Gen
                <br />
                <span className="text-[#19b2b0]">Warehouse</span>
                <br />
                Management
              </motion.h1>

              <motion.p
                className="max-w-lg text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your warehouse operations with cutting-edge technology
                and smart automation. Streamline inventory management, optimize
                space utilization, and boost operational efficiency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href={"contactus"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg bg-[#19b2b0] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#19b2b0]/80"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <motion.button
                  onClick={handleScroll}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border border-[#19b2b0]/50 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-[#19b2b0]/10"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <AnimatedWarehouse />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#19b2b0] to-transparent" />
            <span className="text-sm text-gray-400">Scroll to explore</span>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24" ref={containerRef}>
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="relative py-24">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #19b2b033 0%, transparent 70%)",
            rotate: 180,
            y: backgroundY,
          }}
        />

        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-[#19b2b0]/20 to-[#3f5964]/20 p-12 backdrop-blur-lg">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h2
                className="mb-6 text-3xl font-bold text-white md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Warehouse Operations?
              </motion.h2>

              <motion.p
                className="mb-8 text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Get in touch with our experts to discuss how we can help
                optimize your warehouse management.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contactus">
                  <motion.button
                    className="group inline-flex items-center gap-2 rounded-lg bg-[#19b2b0] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#19b2b0]/80"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
