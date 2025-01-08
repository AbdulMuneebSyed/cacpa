"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import { ParticleCanvas } from "@/components/particle-canvas";
import { ServiceList } from "@/components/service-list";
import dm from "@/public/dm.jpg";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="relative min-h-screen bg-[#30444d]" ref={containerRef}>
      <div className="fixed z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>
      <ParticleCanvas />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#3f5964]">
        {" "}
        {/* Set background color to bg-[#19b2b0] */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 70%)",
            opacity,
            scale,
            y,
          }}
        />
        <div className="container mx-auto px-4 py-16">
          <div className="mt-24 grid items-start gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <AnimatedText
                text="Digital  Marketing & Business Consultant"
                className="text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-invert max-w-none"
              >
                <ServiceList />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="sticky top-48 z-10" // Ensure z-index is set and top is adjusted
            >
              <Image
                src={dm}
                alt="Digital Marketing"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="relative py-24 bg-gray-900">
        {" "}
        {/* Set background color to bg-[#19b2b0] */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 70%)",
            rotate: 180,
          }}
        />
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 p-12 backdrop-blur-lg">
            <div className="mx-auto max-w-2xl text-center">
              <AnimatedText
                text="Ready to Transform Your Digital Presence?"
                className="mb-6 text-3xl font-bold text-white md:text-4xl"
              />

              <motion.p
                className="mb-8 text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's discuss how we can help elevate your brand and drive
                meaningful results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contactus">
                  <motion.button
                    className="group inline-flex items-center gap-2 rounded-lg bg-teal-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-teal-600"
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
