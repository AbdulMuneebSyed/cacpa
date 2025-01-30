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
import { ProcessFlow } from "@/components/services/grmc/process-flow";
import { StatsGrid } from "@/components/services/grmc/stats-grid";
import { AnimatedIcon } from "@/components/services/grmc/animmated-icon";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar2";
import { Button } from "@/components/ui/button";
import { Tiles } from "@/components/ui/tiles";

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
   const handleScroll = () => {
     window.scrollBy({
       top: window.innerHeight, // scrolls by 100vh
       behavior: "smooth", // smooth scrolling
     });
   };
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-gray-50 max-w-screen overflow-x-hidden">
       <div className="fixed z-50 top-0 max-w-screen w-full">
              <Navbar />
            </div>
      {/* Hero Section */}
      <AnimatedGridBackgroundSection>
        <section className="relative py-20 overflow-hidden">
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #e0f2fe 0%, transparent 70%)",
              y: backgroundY,
            }}
          />

          <div className="container mx-auto px-4">
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
                className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Governance, Risk Management &
                <span className="text-blue-600"> Compliance</span>
              </motion.h1>

              <motion.p
                className="mb-8 text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive solutions for organizational governance, risk
                management, and compliance requirements. Ensure your business
                operates within regulatory frameworks while maximizing
                efficiency.
              </motion.p>

              <motion.button
                onClick={handleScroll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-blue-300 bg-transparent px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-100"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </section>
      </AnimatedGridBackgroundSection>
      {/* Process Section */}
      <section className="py-20 bg-white" ref={containerRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Governance Framework
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              A comprehensive approach to ensuring organizational excellence
              through structured governance, risk management, and compliance
              processes.
            </p>
          </motion.div>

          <ProcessFlow steps={governanceSteps} />
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gray-50 relative">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #e0f2fe 0%, transparent 70%)",
            rotate: 180,
            y: backgroundY,
          }}
        />

        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
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
                  className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4 rounded-full bg-blue-100 p-3 inline-block">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const AnimatedGridBackgroundSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={
        "w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-center"
      }
    >
      <div className={"w-fit h-fit relative z-[2]"}>{children}</div>
      <div className={"absolute top-0 left-0 h-full w-full"}>
        <Tiles rows={30} cols={20} />
      </div>
    </div>
  );
};