"use client";

import { motion } from "framer-motion";
import Footer from "./Footer";

interface StatsGridProps {
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="group relative overflow-hidden rounded-xl bg-[#3f5964]/30 p-6 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#19b2b0]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-2 text-3xl font-bold text-[#19b2b0]"
          >
            {stat.value}
          </motion.div>

          <h3 className="mb-2 text-lg font-semibold text-white">
            {stat.label}
          </h3>
          <p className="text-sm text-gray-300">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
