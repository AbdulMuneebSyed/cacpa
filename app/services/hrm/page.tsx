"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Target,
  BookOpen,
  UserCheck,
  Building2,
  GraduationCap,
} from "lucide-react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { ServicePanel } from "@/components/service-panel";
import { CustomCursor } from "@/components/custom-cursor";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
// import { AnimatedBackground } from "@/components/animated-background";

const services = [
  {
    title: "Employee Performance Evaluation",
    description:
      "Design and implement performance management systems to assess individual and team performance. Our comprehensive evaluation framework helps organizations identify top performers and areas for improvement.",
    icon: UserCheck,
    color: "#19b2b0",
  },
  {
    title: "Strategic KPI Development",
    description:
      "Tailor KPIs to align with company goals and ensure clarity in performance expectations. We help establish measurable metrics that drive organizational success and employee engagement.",
    icon: Target,
    color: "#19b2b0",
  },
  {
    title: "Professional Development Programs",
    description:
      "Offer tailored training programs to enhance employees' skills and competencies. Our learning solutions combine practical experience with cutting-edge methodologies.",
    icon: GraduationCap,
    color: "#19b2b0",
  },
  {
    title: "HR Policy Framework",
    description:
      "Create comprehensive HR policies that promote consistency and fairness. We develop clear guidelines that protect both the organization and its employees while fostering a positive work environment.",
    icon: BookOpen,
    color: "#19b2b0",
  },
  {
    title: "Talent Acquisition Strategy",
    description:
      "Develop recruitment strategies to attract top talent through various channels. Our approach combines traditional methods with innovative techniques to find the perfect candidates.",
    icon: Users,
    color: "#19b2b0",
  },
  {
    title: "Executive Resource Management",
    description:
      "Provide senior-level professionals for strategic roles and specific projects. We connect organizations with experienced leaders who can drive transformation and growth.",
    icon: Building2,
    color: "#19b2b0",
  },
];

export default function HRPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    document.body.style.backgroundColor = "#3f5964";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <PageTransition>
      <div className="fixed top-0 z-50 max-w-screen">{/* <Navbar2 /> */}</div>
      {/* <CustomCursor /> */}
      {/* <AnimatedBackground /> */}
      <Navbar2 />
      {/* Hero Section */}
      <motion.section
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #19b2b020 0%, transparent 70%)",
            y: backgroundY,
          }}
        />

        <div className="container px-4">
          <motion.h1
            className="text-balance mb-6 text-center text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Human Resource
            <br />
            <span className="text-[#19b2b0]">Management</span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-center text-lg text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering organizations through effective people management and
            development strategies. We help businesses build and maintain
            high-performing teams.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <section ref={containerRef} className="min-h-screen space-y-24 py-32">
        <div className="container px-4">
          {services.map((service, index) => (
            <ServicePanel
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              color={service.color}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container px-4">
          <div className="rounded-3xl bg-gradient-to-r from-[#19b2b0] to-[#3f5964] p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Transform Your HR Strategy?
            </h2>
            <p className="mb-8 text-lg">
              Let's work together to create a tailored HR solution that drives
              your organization forward.
            </p>
            <Link href="/contactus">
              <motion.button
                className="rounded-full bg-white px-8 py-3 font-semibold text-[#19b2b0] transition-colors hover:bg-[#19b2b0] hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
      <Footer />
    </PageTransition>
  );
}
