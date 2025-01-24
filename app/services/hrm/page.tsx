"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  UserCheck,
  Target,
  Users,
  GraduationCap,
  FileText,
  Users2,
  ArrowRight,
} from "lucide-react";
import hrm from "@/public/hrm.jpg";
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlickeringGrid } from "@/components/ui/flickering";

const services = [
  {
    icon: UserCheck,
    title: "Employee Performance Evaluation",
    description:
      "Design and implement performance management systems to assess individual and team performance. Regularly review KPIs, provide constructive feedback, and identify areas for improvement.",
  },
  {
    icon: Target,
    title: "Develop Departmental and Individual KPIs",
    description:
      "Tailor KPIs to align with company goals and ensure clarity in performance expectations. Define specific, measurable, achievable, relevant, and time-bound (SMART) objectives for departments and employees.",
  },
  {
    icon: Users,
    title: "Recruitment and Talent Acquisition",
    description:
      "Develop recruitment strategies to attract top talent. Utilize various channels, including job portals, social media, and headhunting, to source skilled candidates.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description:
      "Offer tailored training programs to enhance employees' skills and competencies. Focus on leadership development, technical expertise, and soft skills.",
  },
  {
    icon: FileText,
    title: "HR Policy Development",
    description:
      "We create comprehensive and customized HR policies that promote consistency and fairness within your organization. Our policies cover key areas such as recruitment, performance management, compensation, employee relations, and more, ensuring compliance with labor laws and company values.",
  },
  {
    icon: Users2,
    title: "Manpower and Executive Resource",
    description:
      "Providing senior-level or specialized professionals such as consultants, project managers, engineers, or executives for strategic roles or specific projects. These individuals usually have a high level of expertise and experience in their fields.",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen max-w-screen overflow-hidden bg-transparent"
    >
      <div className="fixed z-50 top-0 max-w-screen w-full">
        <Navbar2 />
      </div>

      {/* Hero Section with AuroraBackground */}
      <div className=" min-h-screen mt-11 overflow-hidden ">
        <FlickeringGrid
          className="absolute inset-0 z-0 min-w-screen max-w-screen h-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className=" z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div
                style={{ y: textY }}
                className="space-y-6 text-center md:text-left"
              >
                <h1 className="text-5xl z-50 font-bold text-black md:text-6xl lg:text-7xl">
                  Human Resource <br />
                  <span className="text-[#19b2b0] z-50">Management</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700 md:text-xl">
                  Empowering organizations with efficient and scalable solutions
                  for managing talent, performance, and development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-lg md:h-[400px]"
              >
                <Image
                  src={hrm || "/placeholder.svg"}
                  alt="HR Management"
                  fill
                  className="object-cover z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className=" bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-[2px] bg-gradient-to-b from-[#19b2b0] to-transparent" />
            <span className="text-sm text-gray-600">Scroll to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Content Section with Stagger Animation */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                    },
                  },
                }}
                className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-md"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#19b2b0]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  initial={false}
                />

                <div className="relative z-10 flex gap-6">
                  <motion.div
                    className="rounded-lg h-fit p-1 bg-[#19b2b0]/10"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="h-8 w-8 text-[#19b2b0]" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#19b2b0] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section with Scale Animation */}
      <motion.section
        className="py-24 bg-gray-50"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-white p-12 shadow-lg">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h2
                className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your HR Strategy?
              </motion.h2>

              <motion.p
                className="mb-8 text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's discuss how we can help optimize your HR processes and
                drive organizational success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contactus">
                  <motion.button
                    className="group inline-flex items-center gap-2 rounded-lg bg-[#19b2b0] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#19b2b0]/80"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </motion.section>

      <Footer />
    </div>
  );
}
