"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="group transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-100 p-3 text-indigo-600">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
