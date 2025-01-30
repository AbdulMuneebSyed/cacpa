'use client'

import { motion, useAnimation } from 'framer-motion'
import { Globe } from 'lucide-react'

export function DomainVisualizer() {
  const controls = useAnimation()

  const startAnimation = async () => {
    await controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: { duration: 2, ease: "easeInOut" }
    })
  }

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#f0f9ff] p-8 shadow-lg">
      <Globe className="h-16 w-16 text-[#38bdf8]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />

      <motion.div
        className="relative flex h-full items-center justify-center"
        onHoverStart={startAnimation}
        animate={controls}
      >
        <Globe className="h-16 w-16 text-white" />
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-white/30"
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

//checked