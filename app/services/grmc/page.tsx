"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Settings,
  Shield,
  FileText,
  Users,
  CheckCircle,
  AlertTriangle,
  BarChart,
  Lock,
} from "lucide-react";
import { ProcessFlow } from "@/components/process-flow";
import { StatsGrid } from "@/components/stats-grid";
import { AnimatedIcon } from "@/components/animmated-icon";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/navbar2";

const governanceSteps = [
  {
    icon: Settings,
    title: "Framework Development & Implementation",
    description:
      "Establishment of clear roles, responsibilities, and accountability structures. Design and implementation of governance frameworks aligned with organizational objectives.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description:
      "Assessing and ensuring compliance with relevant laws, regulations, and industry standards. Implementation of compliance monitoring systems and processes.",
  },
  {
    icon: Users,
    title: "Policy & Procedure Management",
    description:
      "Development of comprehensive policies and procedures aligned with best practices. Continuous improvement and updates to reflect changes in laws and regulations.",
  },
  {
    icon: FileText,
    title: "Internal Controls & Auditing",
    description:
      "Designing and implementing internal control systems to safeguard assets and ensure accuracy in reporting. Conducting regular audits to assess effectiveness.",
  },
];

const riskStats = [
  {
    label: "Risk Assessment",
    value: "100%",
    description:
      "Risk assessment and identification across operations and departments.",
  },
  {
    label: "Risk Management",
    value: "24/7",
    description:
      "Regular monitoring and reporting of risk indicators to ensure proactive management.",
  },
  {
    label: "Crisis Management",
    value: "98%",
    description:
      "Crisis management and business continuity planning effectiveness rate.",
  },
  {
    label: "Compliance Rate",
    value: "99.9%",
    description: "Overall compliance rate across all organizational processes.",
  },
];

export default function GovernancePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-[#3f5964] w-max-screen overflow-hidden">
      {/* Hero Section */}
<div className="fixed z-50 top-0 max-w-screen">
        <Navbar2 />
      </div>
      <section className="relative min-h-screen">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #19b2b033 0%, transparent 70%)",
            y: backgroundY,
          }}
        />

        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              className="mb-8 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[Settings, Shield, Lock, BarChart].map((icon, index) => (
                <AnimatedIcon key={index} icon={icon} delay={index * 0.2} />
              ))}
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold text-white md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Governance, Risk Management &
              <span className="text-[#19b2b0]"> Compliance</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive solutions for organizational governance, risk
              management, and compliance requirements. Ensure your business
              operates within regulatory frameworks while maximizing efficiency.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="rounded-full border-2 border-[#19b2b0] p-2">
            <div className="h-2 w-2 rounded-full bg-[#19b2b0]" />
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24" ref={containerRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Our Governance Framework
            </h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              A comprehensive approach to ensuring organizational excellence
              through structured governance, risk management, and compliance
              processes.
            </p>
          </motion.div>

          <ProcessFlow steps={governanceSteps} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
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
          <motion.h2
            className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Risk Management Metrics
          </motion.h2>

          <StatsGrid stats={riskStats} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-[#19b2b0]/20 to-[#3f5964]/20 p-12 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Key Benefits
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: CheckCircle,
                  title: "Enhanced Transparency",
                  description:
                    "Improved organizational transparency and accountability",
                },
                {
                  icon: Shield,
                  title: "Risk Mitigation",
                  description:
                    "Reduced financial and operational losses through effective strategies",
                },
                {
                  icon: AlertTriangle,
                  title: "Streamlined Processes",
                  description:
                    "Optimized compliance processes reducing risk of penalties",
                },
                {
                  icon: BarChart,
                  title: "Operational Efficiency",
                  description:
                    "Improved efficiency through integrated GRC solutions",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-xl bg-[#3f5964]/30 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#19b2b0]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <benefit.icon className="mb-4 h-8 w-8 text-[#19b2b0]" />
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
