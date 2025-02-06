"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/services/dmbc/animated-text";
import { ServiceList } from "@/components/services/dmbc/service-list";
import dm from "@/public/dm.jpg";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import { Meteors } from "@/components/ui/meteors";

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
    <div
      className="relative min-h-screen min-w-screen overflow-clip bg-white"
      ref={containerRef}
    >
      {/* <ParticleCanvas /> */}
      <div className="sticky z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>
      {/* Hero Section */}

      <section className="relative min-h-screen max-w-screen  bg-white">
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
        <Meteors number={30} />
        <div className="container mx-auto px-4 py-6">
          <div className="mt-24 grid items-start gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <AnimatedText
                text="Digital Marketing & Business Consultant"
                className="text-balance text-4xl font-bold text-gray-600 md:text-5xl lg:text-6xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-teal max-w-none"
              >
                <ServiceList />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="sticky top-48 z-10"
            >
              <Image
                src={dm || "/placeholder.svg"}
                alt="Digital Marketing"
                width={600}
                height={400}
                className="rounded-xl sticky top-48"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="relative py-24 bg-white">
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
                className="mb-6 text-3xl font-bold text-teal-600 md:text-4xl"
              />
              {/* <Meteors number={30} /> */}
              <motion.p
                className="mb-8 text-lg text-teal-700"
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
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
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
