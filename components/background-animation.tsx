"use client";

import { motion } from "framer-motion";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%)",
          backgroundSize: "400% 400%",
        }}
      />
    </div>
  );
}
