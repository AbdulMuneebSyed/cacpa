"use client";

import { motion } from "framer-motion";
import {
  BarChart4,
  Calculator,
  Users,
  Search,
  LineChart,
  Settings2,
  TrendingUp,
  ClipboardList,
  Calendar,
  Target,
  FileCode,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType;
  direction: "left" | "right" | "down";
  delay: number;
}

const services: Service[] = [
  {
    title: "Business Planning",
    description:
      "A strategic roadmap for success, outlining objectives, market analysis, operations, and financial projections.",
    icon: BarChart4,
    direction: "left",
    delay: 0.2,
  },
  {
    title: "Business Valuation",
    description:
      "Assessment of company's economic value for transactions and strategic decisions.",
    icon: Calculator,
    direction: "right",
    delay: 0.4,
  },
  {
    title: "Compliance Outsourcing",
    description:
      "Comparative analysis evaluating financial data across periods for strategic planning.",
    icon: Users,
    direction: "down",
    delay: 0.6,
  },
  {
    title: "Due Diligence",
    description:
      "Meticulous pre-transaction investigation ensuring accuracy in legal, financial, and operational aspects.",
    icon: Search,
    direction: "left",
    delay: 0.8,
  },
  {
    title: "Feasibility Assessment",
    description:
      "Evaluates project viability by analyzing market conditions and financial implications.",
    icon: LineChart,
    direction: "right",
    delay: 1.0,
  },
  {
    title: "Strategic Planning",
    description:
      "Meticulous process of defining organizational goals and developing success roadmaps.",
    icon: Settings2,
    direction: "left",
    delay: 1.2,
  },
  {
    title: "Organization Assessment",
    description:
      "Evaluates organizational health by probing into culture, communication, and efficiency.",
    icon: TrendingUp,
    direction: "right",
    delay: 1.2,
  },
  {
    title: "SOP Development",
    description:
      "Creating precise, tailored protocols to streamline workflows and ensure consistency.",
    icon: ClipboardList,
    direction: "down",
    delay: 1.2,
  },
  {
    title: "Strategic Consulting",
    description:
      "Tailored insights to optimize business processes and capitalize on opportunities.",
    icon: Target,
    direction: "left",
    delay: 1.2,
  },
  {
    title: "Policy and Procedure",
    description:
      "Comprehensive analysis for knowledgeable lending decisions and credit appraisal.",
    icon: FileCode,
    direction: "right",
    delay: 1.2,
  },
];

export default function AnimatedServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d1e3f8] p-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#355a65] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Business Management & Consultancy
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-6 hover:bg-white/90 transition-colors shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x:
                    service.direction === "left"
                      ? 0
                      : service.direction === "right"
                      ? 0
                      : undefined,
                  y: service.direction === "down" ? 0 : undefined,
                  transition: {
                    delay: service.delay,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-[#355a65] flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.8 },
                  }}
                >
                  {
                    <div className="text-white">
                      <service.icon />
                    </div>
                  }
                </motion.div>
                <h2 className="text-xl font-semibold text-[#355a65] mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
