"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

const messages = [
  "Your hard work today is shaping tomorrow.",
  "Together we achieve more!",
  "Believe in yourself and all that you are.",
  "The best way to predict the future is to create it.",
  "What you do today can improve all your tomorrows.",
  "Small steps lead to big results.",
  "Teamwork makes the dream work!",
  "Rise and shine – it’s a great day to be awesome!",
  "Don’t wait for opportunity, create it.",
  "Keep moving forward, no matter how slow.",
  "Good things come to those who hustle.",
  "Hard work is the key to unlocking your dreams.",
  "Don’t just meet expectations, exceed them.",
  "Great things never come from comfort zones.",
  "Success is a series of small wins.",
  "Strive for progress, not perfection.",
  "You are capable of amazing things.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "When one door closes, another opens.",
  "You don’t have to be great to start, but you have to start to be great.",
  "“Indeed, with hardship [will be] ease.” – Quran 94:6",
  "“The key to success is to focus on goals, not obstacles.” – Unknown",
  "“And whoever fears Allah... He will make a way for him to get out (from every difficulty).” – Quran 65:2",
  "“A journey of a thousand miles begins with one step.” – Lao Tzu",
  "“The strong person is not the one who is able to overpower others, but the one who controls themselves in moments of anger.” – Hadith (Sahih al-Bukhari)",
  "“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill",
  "“Indeed, Allah does not burden a soul beyond that it can bear.” – Quran 2:286",
];


export default function LogoutPage() {
  const router = useRouter();
  const controls = useAnimation();
  const [message] = useState(
    () => messages[Math.floor(Math.random() * messages.length)]
  );

  useEffect(() => {
    controls.start("animate");
    const redirectTimer = setTimeout(() => {
      controls.start("exit").then(() => router.push("/"));
    }, 4000); // Start exit animation after 4 seconds

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

  const checkmarkVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="initial"
        animate={controls}
      >
        <motion.div className="mb-8 relative" variants={circleVariants}>
          <motion.div
            className="w-32 h-32 bg-green-500 rounded-full mx-auto flex items-center justify-center"
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
                d="M5 13l4 4L19 7"
                variants={checkmarkVariants}
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-green-300 opacity-75"
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
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Logged Out Successfully
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          {message}
        </motion.p>
        <motion.div variants={itemVariants}>
          <p className="text-gray-500">
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
            className="w-48 h-1 bg-green-500 mx-auto rounded-full"
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 4,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
