"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ProcessFlowProps {
  steps: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

export function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="relative space-y-12">
      {/* Connecting Line */}
      <div className="absolute left-[27px] top-0 h-full w-[2px] bg-gradient-to-b from-[#19b2b0] to-transparent" />

      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          className="relative flex gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <motion.div
            className="relative z-10 rounded-full bg-[#3f5964] p-4"
            whileHover={{ scale: 1.2, backgroundColor: "#19b2b0" }}
          >
            <step.icon className="h-6 w-6 text-white" />
          </motion.div>

          <div className="flex-1 space-y-2">
            <motion.h3
              className="text-xl font-semibold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
            >
              {step.title}
            </motion.h3>
            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.4 }}
            >
              {step.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
if (!ctx || !canvas) return;