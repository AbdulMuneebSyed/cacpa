"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card1";
// import { AnimatedBackground } from "@/components/aimated-bg";
import {
  Cloud,
  Shield,
  Server,
  Code,
  HeadphonesIcon as HeadphoneIcon,
  Network,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/navbar2";

// Terminal Component
function Terminal() {
  const [displayedText, setDisplayedText] = useState("");
  // Multi-line text for the terminal. Use \n for newlines.
  const fullText = `Welcome to Capco IT solutions Terminal
> Initializing system...
> Loading modules...
> System ready.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-lg shadow-2xl whitespace-pre-wrap relative">
      {displayedText}
      <span className="blink absolute bottom-4 right-4 text-2xl">|</span>
      <style jsx>{`
        .blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

const SERVICES = [
  {
    icon: HeadphoneIcon,
    title: "IT Support & Managed Services",
    description:
      "End-to-end IT support and managed services ensuring seamless business operations.",
  },
  {
    icon: Network,
    title: "Network & Infrastructure",
    description:
      "Expert network design, implementation, and optimization services.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Comprehensive cybersecurity solutions to protect your business from threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud solutions for optimized business efficiency.",
  },
  {
    icon: Code,
    title: "Business Applications",
    description: "Custom software solutions tailored to your industry needs.",
  },
  {
    icon: Server,
    title: "Hardware & Software",
    description:
      "End-to-end hardware and software solutions for your business.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background */}
      {/* <AnimatedBackground /> */}

      {/* Navbar */}
      <div className="fixed z-50 top-0 w-full">
        <Navbar2 />
      </div>

      {/* Hero Section with Terminal */}
      <section className="relative flex flex-col md:flex-row min-h-screen items-center justify-center px-4 space-x-12">
        {/* Text Content */}
        <div className="flex-1 z-10 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Transform Your Business
            With Modern IT Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-xl text-gray-600"
          >
            Empowering businesses with cutting-edge technology solutions for a
            digital future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contactus">
              <Button size="lg" className="rounded-full px-10 py-4">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Terminal Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex-1 max-w-3xl z-10"
        >
          <Terminal />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-center text-4xl font-extrabold text-gray-900">
            Our Services
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="container mx-auto px-4 bg-gray-200 p-32 rounded-3xl"
        >
          <div className="text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-xl text-gray-600"
            >
              Contact us today to learn how we can help transform your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/contactus">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-200 "
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
