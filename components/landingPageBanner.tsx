  "use client";

  import React from "react";
  import { motion } from "framer-motion";
  import Image from "next/image";
  import { useInView } from "react-intersection-observer";

  // Import images
  import mr from "@/public/4.png";
  import iep from "@/public/5.png";
  import ei from "@/public/3.png";
  import oe from "@/public/1.png";
  import me from "@/public/2.png";

  const features = [
    {
      icon: iep,
      title: "Improved Efficiency",
      description: "Streamline your processes for maximum productivity",
    },
    {
      icon: me,
      title: "Market Expansion",
      description: "Reach new markets and grow your customer base",
    },
    {
      icon: ei,
      title: "Enhanced Innovation",
      description: "Stay ahead with cutting-edge solutions",
    },
    {
      icon: mr,
      title: "Measurable Results",
      description: "Track your progress with data-driven insights",
    },
    {
      icon: oe,
      title: "Operational Excellence",
      description: "Optimize your operations for peak performance",
    },
  ];

  const FeatureCard = ({
    icon,
    title,
    description,
    index,
  }: {
    icon: any;
    title: string;
    description: string;
    index: number;
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div className="relative w-16 h-16 mb-4">
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </motion.div>
    );
  };

  const LandingPageBanner = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Unleash Your Business Potential With{" "}
            <span className="text-blue-600">Capco</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Whether you're a startup, SME, or large corporation, we're here to
            help you expand your business and achieve unprecedented growth.
          </motion.p>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    );
  };

  export default LandingPageBanner;
