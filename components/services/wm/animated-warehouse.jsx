"use client";

import { motion, useAnimation } from "framer-motion";
import { Truck, Box, Package, BarChart2 } from "lucide-react";
import { useEffect } from "react";

export function AnimatedWarehouse() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start("float");
    };
    sequence();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  return (
    <motion.div
      className="relative h-[500px] w-full perspective-1000"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* 3D Grid Background */}
      <motion.div
        className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4"
        variants={gridVariants}
      >
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-lg border-blue-200 bg-blue-50"
            variants={cellVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.2 },
            }}
          />
        ))}
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[
          { Icon: Truck, position: "top-1/4 left-1/4", delay: 0 },
          { Icon: Box, position: "top-1/3 right-1/4", delay: 0.3 },
          { Icon: Package, position: "bottom-1/4 left-1/3", delay: 0.6 },
          { Icon: BarChart2, position: "bottom-1/3 right-1/3", delay: 0.9 },
        ].map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position}`}
            variants={itemVariants}
            custom={delay}
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                delay: delay * 2,
                ease: "linear",
              },
            }}
          >
            <motion.div
              className="rounded-xl bg-blue-100 p-4 backdrop-blur-sm"
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <Icon className="h-8 w-8 text-blue-600" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Central Element */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        variants={itemVariants}
        animate={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <div className="rounded-full bg-blue-200 p-8 backdrop-blur-lg">
          <motion.div
            className="rounded-full bg-blue-600 p-6"
            whileHover={{ scale: 1.1 }}
          >
            <Package className="h-12 w-12 text-white" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
