"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

export default function UnauthorizedPage() {
  const router = useRouter();
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
    const redirectTimer = setTimeout(() => {
      controls.start("exit").then(() => router.push("/"));
    }, 5500); // Start exit animation after 5.5 seconds

    return () => clearTimeout(redirectTimer);
  }, [router, controls]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const circleVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      rotate: 180,
    },
  };

  const pathVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="initial"
        animate={controls}
      >
        <motion.div className="mb-8 relative" variants={circleVariants}>
          <motion.div
            className="w-32 h-32 bg-red-500 rounded-full mx-auto flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                variants={pathVariants}
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-red-300 opacity-75"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Unauthorized Access
        </motion.h1>
        <motion.p
          className="text-xl text-gray-900 mb-8"
          variants={itemVariants}
        >
          You don't have permission to view this page.
        </motion.p>
        <motion.div variants={itemVariants}>
          <p className="text-gray-400">
            Redirecting to home page in a few seconds...
          </p>
        </motion.div>
        <motion.div
          className="mt-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-12 h-1 bg-red-500 mx-auto"
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5.5,
              ease: "linear",
              times: [0, 0.9, 1],
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
