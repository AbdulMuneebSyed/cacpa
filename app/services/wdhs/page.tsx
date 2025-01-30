"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Server, Globe, Cloud, Shield, Database, Code } from "lucide-react";
import { TerminalAnimation } from "@/components/services/wdhs/terminal-animation";
import { ServerStatus } from "@/components/services/wdhs/server-status";
import { DomainVisualizer } from "@/components/services/wdhs/domain-visualizer";
import Navbar2 from "@/components/navbar2"
import Footer from "@/components/Footer"
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-with-collision";

const terminalCommands = [
  "npm create next-app my-website",
  "cd my-website",
  "npm install",
  "npm run dev",
  "deploying to production...",
  "deployment successful! ✨",
];

const serverStatus = {
  uptime: "99.99%",
  load: 65,
  memory: 45,
  security: 98,
};

export default function WebServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-white">
      {/* Hero Section with 3D Perspective */}
      <div className="fixed z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>
      <BackgroundBeamsWithCollision className="md:block hidden">
        <section className="relative mt-16 min-h-screen h-screen overflow-hidden perspective-1000">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #38bdf833 0%, transparent 70%)",
              y,
              opacity,
            }}
          />

          <div className="container relative mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-12 md:grid-cols-2"
            >
              <div className="space-y-6">
                <motion.h1
                  className="text-4xl font-bold text-gray-800 md:text-6xl"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Web Development
                  <br />
                  <span className="text-[#38bdf8]">&</span> Hosting Services
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Secure, scalable, and reliable hosting solutions for your
                  digital presence
                </motion.p>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <ServerStatus status={serverStatus} />
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <TerminalAnimation commands={terminalCommands} />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
      <section className="relative mt-16 min-h-screen h-screen overflow-hidden perspective-1000 md:hidden block">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #38bdf833 0%, transparent 70%)",
            y,
            opacity,
          }}
        />

        <div className="container relative mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl font-bold text-gray-800 md:text-6xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Web Development
                <br />
                <span className="text-[#38bdf8]">&</span> Hosting Services
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Secure, scalable, and reliable hosting solutions for your
                digital presence
              </motion.p>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <ServerStatus status={serverStatus} />
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <TerminalAnimation commands={terminalCommands} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid with Parallax */}
      <section ref={containerRef} className="relative py-24">
        <motion.div
          className="absolute inset-0 -z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            y,
          }}
        />

        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive web solutions for your business
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Domain Services",
                description: "Register and manage your domains with ease",
              },
              {
                icon: Cloud,
                title: "Cloud Hosting",
                description: "Scalable hosting with enhanced performance",
              },
              {
                icon: Shield,
                title: "Security Solutions",
                description: "Protect your website from threats",
              },
              {
                icon: Database,
                title: "Managed Servers",
                description: "Fully managed dedicated server solutions",
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Custom website and application development",
              },
              {
                icon: Server,
                title: "VPS Hosting",
                description: "Virtual private servers with full control",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-lg bg-white/50 p-6 backdrop-blur-sm shadow-lg"
              >
                <div className="absolute inset-0 z-[-10] bg-gradient-to-r from-[#38bdf8]/10 to-[#f0f9ff]/30 opacity-0 transition-opacity group-hover:opacity-100" />
                <service.icon className="mb-4 h-8 w-8 text-[#38bdf8]" />
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Visualization Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                Domain Management
                <br />
                Made Simple
              </h2>
              <p className="text-gray-600">
                Register, transfer, and manage your domains with our intuitive
                interface. Protect your digital assets with advanced security
                features.
              </p>
              <Link href="/contactus" className="z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#38bdf8] px-8 py-3 font-semibold text-white transition-colors hover:cursor-pointer hover:bg-[#38bdf8]/80"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <DomainVisualizer />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
