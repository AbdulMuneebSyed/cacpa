"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Server,
  Search,
  Megaphone,
  LineChart,
  Palette,
  Video,
  MessageCircle,
  Shield,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Development",
    description:
      "Building a distinctive and memorable brand identity that resonates with your target audience.",
  },
  {
    icon: Globe2,
    title: "Website Designing & Domains",
    description:
      "Creating aesthetically appealing, user-friendly websites with personalized domain registrations.",
  },
  {
    icon: Server,
    title: "Web, Cloud & Server Hosting",
    description:
      "Providing secure and reliable hosting solutions tailored to your business needs.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO) & App Store Optimization (ASO)",
    description:
      "Enhancing online visibility and driving organic traffic through effective SEO and ASO techniques.",
  },
  {
    icon: Megaphone,
    title: "Campaign Development & Strategy",
    description:
      "Crafting innovative marketing campaigns with clear strategies to drive engagement and conversions.",
  },
  {
    icon: LineChart,
    title: "Go-To Marketing Strategy",
    description:
      "Designing actionable, results-driven marketing strategies to position your brand for success.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating high-quality graphics that communicate your message and captivate your audience.",
  },
  {
    icon: Video,
    title: "Video Marketing",
    description:
      "Utilizing the power of video to engage, inform, and connect with customers across platforms.",
  },
  {
    icon: MessageCircle,
    title: "SMS, Email & WhatsApp Marketing",
    description:
      "Reaching customers effectively through targeted SMS, email campaigns, and WhatsApp messaging.",
  },
  {
    icon: Shield,
    title: "Online Reputation Management",
    description:
      "Managing and enhancing your online reputation to build trust and credibility with your audience.",
  },
  {
    icon: Headphones,
    title: "Customer Relationship Management (CRM)",
    description:
      "Implementing CRM solutions to streamline communication, track customer interactions, and improve business efficiency.",
  },
];

export function ServiceList() {
  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative rounded-xl bg-teal-50 p-6 transition-colors hover:bg-teal-100"
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="rounded-lg bg-teal-500/10 p-3"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <service.icon className="h-6 w-6 text-teal-500" />
            </motion.div>
            <div className="flex-1">
              <motion.h3
                className="mb-2 text-lg font-semibold text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-teal-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
