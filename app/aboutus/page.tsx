"use client";
import Navbar2 from "@/components/navbar2";
import Vision from "@/components/Vision";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function page(){
  return (
    <div>
      <Navbar2 />
      <div className="bg-gray-100 py-16 px-6">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-indigo-600">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover our mission, vision, and values that drive success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-indigo-600"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Mission
            </h2>
            <p className="text-gray-700">
              Our objective is to empower organizations across Qatar, India, and
              Canada by delivering tailor-made business solutions and
              cutting-edge strategies that drive sustainable growth, optimize
              operational efficiency, and ensure long-term success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-600"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Vision
            </h2>
            <p className="text-gray-700">
              To be a globally recognized consulting firm known for transforming
              businesses through innovative solutions, fostering growth, and
              driving sustainable value creation for our clients, employees, and
              communities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-yellow-600"
          >
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              Values
            </h2>
            <p className="text-gray-700">
              At CAPCO, we prioritize integrity, ensuring trust through
              transparency and honesty. Our commitment to excellence drives us
              to deliver innovative, tailored solutions that exceed
              expectations. Collaboration and a customer-centric approach are at
              the heart of what we do, fostering partnerships and impactful
              results.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

