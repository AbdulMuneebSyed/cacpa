"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  delay?: number;
}

export function AnimatedIcon({ icon: Icon, delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.8 },
      }}
      className="rounded-xl bg-[#19b2b0]/10 p-3"
    >
      <Icon className="h-6 w-6 text-[#19b2b0]" />
    </motion.div>
  );
}
