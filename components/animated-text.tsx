"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({
  text,
  className = "",
  once = true,
}: AnimatedTextProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, []);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block" variants={child}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}
