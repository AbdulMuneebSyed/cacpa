"use client";

import { motion } from "framer-motion";

interface StatsGridProps {
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-2 text-3xl font-bold text-blue-500"
          >
            {stat.value}
          </motion.div>

          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {stat.label}
          </h3>
          <p className="text-sm text-gray-600">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
