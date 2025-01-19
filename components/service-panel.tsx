'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MagneticSection } from './magnetic-section'
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface ServicePanelProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
  color: string
}

export function ServicePanel({ title, description, icon: Icon, index, color }: ServicePanelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
      }}
      className="group relative"
    >
      <MagneticSection className="relative">
        <div 
          className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${
            index % 2 === 0 ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12'
          }`}
          style={{
            backgroundColor: `${color}10`,
          }}
        >
          {/* Background gradient */}
          <div 
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(45deg, ${color}15, transparent)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div 
              className="mb-6 inline-block rounded-xl p-3"
              style={{
                backgroundColor: `${color}20`,
              }}
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            >
              <Icon className="h-8 w-8" style={{ color }} />
            </motion.div>
            
            <h3 className="mb-4 text-2xl font-bold tracking-tight">{title}</h3>
            <p className="text-gray-600">{description}</p>

            {/* Decorative elements */}
            <div 
              className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${color}40, transparent 70%)`,
              }}
            />
          </div>
        </div>
      </MagneticSection>
    </motion.div>
  )
}

//checked