"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  BarChart2,
  Settings,
  Database,
  Shield,
  RefreshCcw,
} from "lucide-react";
import Link from "next/link";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";

/**
 * HeroBackground Component
 * Creates a dynamic, animated background for the hero section
 */
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0  " />

      {/* Floating animated circles */}
      <motion.div
        className="absolute bg-gray-500 rounded-full opacity-20"
        style={{ width: 250, height: 250, top: "5%", left: "10%" }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-red-500 rounded-full opacity-20"
        style={{ width: 150, height: 150, bottom: "10%", right: "25%" }}
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-gray-500 rounded-full opacity-20"
        style={{ width: 200, height: 200, top: "40%", right: "5%" }}
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-yellow-800 rounded-full opacity-15"
        style={{ width: 220, height: 220, top: "30%", left: "50%" }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bg-teal-500 rounded-full opacity-20"
        style={{ width: 180, height: 180, bottom: "10%", right: "60%" }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </div>
);

export default function Page() {
  const services = [
    {
      title: "Asset Verification",
      description:
        "Ensure physical assets are correctly recorded with our advanced verification system",
      icon: CheckCircle,
    },
    {
      title: "Asset Tagging",
      description:
        "Implement cutting-edge RFID and barcode solutions for precise asset tracking",
      icon: BarChart2,
    },
    {
      title: "Condition Assessment",
      description:
        "Evaluate asset health and performance with predictive analytics",
      icon: Settings,
    },
    {
      title: "Lifecycle Management",
      description: "Optimize asset utilization throughout its entire journey",
      icon: RefreshCcw,
    },
    {
      title: "Data Management",
      description:
        "Ensure data accuracy and compliance with industry standards",
      icon: Database,
    },
    {
      title: "IT Asset Management",
      description:
        "Comprehensive management of hardware, software, and network components",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-screen overflow-clip ">
      <div className="sticky z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32 min-h-screen flex items-center justify-center">
        <HeroBackground />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 via-black to-cyan-700 mb-6">
              Asset Management
              <br /> Reimagined
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Transform your asset management with our cutting-edge solutions.
              Streamline operations, reduce costs, and maximize efficiency.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 flex justify-center items-center flex-col bg-gray-200 relative overflow-hidden">
        <div className="container relative z-10 flex justify-center items-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your asset management needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-2xl transition-shadow duration-300 transform min-h-60 hover:-translate-y-1">
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-white relative overflow-hidden flex justify-center items-center flex-col">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Asset Management?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our experts and discover how we can help
              optimize your asset management strategy
            </p>
            <Link href="/contactus">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 shadow-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
