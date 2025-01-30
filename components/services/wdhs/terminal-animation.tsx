"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TerminalAnimationProps {
  commands: string[];
}

export function TerminalAnimation({ commands }: TerminalAnimationProps) {
  const controls = useAnimation();

  useEffect(() => {
    const animateCommands = async () => {
      for (let i = 0; i < commands.length; i++) {
        await controls.start((i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.5 },
        }));
      }
    };
    animateCommands();
  }, []);

  return (
    <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
      <div className="mb-2 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      {commands.map((command, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          className="mb-1"
        >
          <span className="mr-2 text-blue-400">$</span>
          {command}
        </motion.div>
      ))}
    </div>
  );
}
//checked