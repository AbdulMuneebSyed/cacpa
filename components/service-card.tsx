"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export function ServiceCard({
  title,
  description,
  Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#19b2b0]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={false}
      />

      <div className="relative z-10 flex gap-4">
        <motion.div
          className="rounded-lg bg-[#19b2b0]/10 p-3"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-6 w-6 text-[#19b2b0]" />
        </motion.div>

        <div className="flex-1">
          <motion.h3
            className="mb-2 text-lg font-semibold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#19b2b0] to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
//checked