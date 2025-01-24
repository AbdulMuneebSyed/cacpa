// pages/services.js
"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import pic from "@/public/parallax/OIP.jpg";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Footer from "./Footer";
import grmc from "@/public/manage.png";
import bmc from "@/public/biz.png"
import dmbc from "@/public/ad.png"
import wm from "@/public/mar.png"
import wdhs from "@/public/web.png"
import hrm from "@/public/hr.png"
const services = [
  {
    name: "Business Management",
    description:
      "Providing expert advice to help businesses achieve growth, optimize operations, and maintain a competitive edge in the market.",
    route: "/services/bmc",
    image: bmc,
  },
  {
    name: "Human Resource Management",
    description:
      "Comprehensive solutions for recruiting, training, and retaining top talent while ensuring a positive workplace environment.",
    route: "/services/hrm",
    image: hrm,
  },
  {
    name: "Digital Marketing",
    description:
      "Driving brand growth and customer engagement through online strategies, and targeted marketing campaigns.",
    route: "/services/dmbc",
    image: dmbc,
  },
  {
    name: "Warehouse Management",
    description:
      "Streamlining inventory management and logistics to maximize efficiency and reduce operational costs.",
    route: "/services/wm",
    image: wm,
  },
  {
    name: "Governance & Compliance",
    description:
      "Ensuring organizational accountability and adhering to regulatory requirements with robust compliance frameworks.",
    route: "/services/grmc",
    image: grmc,
  },
  {
    name: "Web Development",
    description:
      "Building modern, responsive, and feature-rich websites to enhance your digital presence and user experience.",
    route: "/services/wm",
    image: wdhs,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 p-8">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mt-10 mb-8"
      >
        Explore Our Services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-20 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            className="bg-white LandServiceCards shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-contain rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link href={service.route}>
              <p className="text-white bg-[#508797] hover:bg-[#2f4f58] px-4 py-2 rounded-full">
                Know More
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
//checked
