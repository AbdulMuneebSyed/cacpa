"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import web from "@/public/hero-eb.jpeg"
import bmc from "@/public/hero-bmc.webp";
import dmbc from "@/public/hero-dmbc.webp";
import grmc from "@/public/hero-grmc.webp";
import hrm from "@/public/hero-hrm.webp";
import wm from "@/public/hero-wm.webp";
import type { StaticImageData } from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: StaticImageData;
  link: string;
}

const services: Service[] = [
  {
    id: 2,
    title: "Want to Take Your Business to New Heights?",
    description:
      "Unlock your company's full potential with our strategic guidance and tailored management solutions. We're here to help you navigate challenges and seize opportunities for sustainable growth.",
    slug: "business-management",
    image: bmc,
    link: "services/bmc",
  },
  {
    id: 1,
    title: "Ready to Bring Your Digital Vision to Life?",
    description:
      "Let's create a stunning website that captures your brand essence and engages your audience. Our expert team is here to turn your ideas into a powerful online presence.",
    slug: "web-development",
    image: web,
    link: "services/wdhs",
  },
  {
    id: 3,
    title: "Looking to Build a High-Performing Team?",
    description:
      "Empower your workforce with our comprehensive HR solutions. From talent acquisition to employee development, we'll help you create a thriving workplace culture that drives success.",
    slug: "hr-management",
    image: hrm,
    link: "services/hrm",
  },
  {
    id: 4,
    title: "Ready to Dominate the Digital Landscape?",
    description:
      "Boost your online presence and connect with your target audience through our cutting-edge digital marketing strategies. Let's craft campaigns that convert and drive real business results.",
    slug: "digital-marketing",
    image: dmbc,
    link: "services/dmbc",
  },
  {
    id: 5,
    title: "Want to Streamline Your Supply Chain?",
    description:
      "Optimize your warehouse operations and inventory management with our state-of-the-art solutions. We'll help you increase efficiency, reduce costs, and improve customer satisfaction.",
    slug: "warehouse-management",
    image: wm,
    link: "services/wm",
  },
  {
    id: 6,
    title: "Need to Navigate Complex Regulations with Confidence?",
    description:
      "Stay ahead of regulatory challenges and mitigate risks with our comprehensive governance and compliance solutions. We'll help you build a resilient framework for sustainable business practices.",
    slug: "risk-management",
    image: grmc,
    link: "services/grmc",
  },
];

export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback(
    (newIndex: number, newDirection: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(newDirection);
      setCurrentIndex(newIndex);

      // Preload the next image
      const nextIndex = (newIndex + 1) % services.length;
      const img = new window.Image();
      img.src = services[nextIndex].image.src;
    },
    [isAnimating, services]
  );

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % services.length;
    changeSlide(newIndex, 1);
  }, [currentIndex, changeSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    changeSlide(newIndex, -1);
  }, [currentIndex, changeSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div className="relative  min-h-screen overflow-hidden ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          onAnimationComplete={handleAnimationComplete}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <Image
              src={services[currentIndex].image || "/placeholder.svg"}
              alt={services[currentIndex].title}
              layout="fill"
              objectFit="cover"
              priority
            />

            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          <div className="absolute inset-0" style={{ zIndex: -1 }}>
            {/* <Image
              src={
                services[(currentIndex ) % services.length].image ||
                "/placeholder.svg"
              }
              alt={services[(currentIndex ) % services.length].title}
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {services[currentIndex].title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                  {services[currentIndex].description}
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href={`/${services[currentIndex].link}`} passHref>
                    <Button
                      variant="secondary"
                      className="text-lg px-6 py-2 bg-white text-teal-800 hover:bg-white/90 transition-colors duration-300"
                    >
                      Explore More
                    </Button>
                  </Link>
                  <Link href="/contactus" passHref>
                    <Button className="text-lg px-6 py-2 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index, index > currentIndex ? 1 : -1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10"
        aria-label="Previous slide"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10"
        aria-label="Next slide"
        disabled={isAnimating}
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
