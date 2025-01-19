"use client";

import { motion } from "framer-motion";
import { Server, Wifi, Shield, Database } from "lucide-react";

interface ServerStatusProps {
  status: {
    uptime: string;
    load: number;
    memory: number;
    security: number;
  };
}

export function ServerStatus({ status }: ServerStatusProps) {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#3f5964]/30 p-6 backdrop-blur-lg">
      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
      >
        <Server className="h-8 w-8 text-[#19b2b0]" />
        <div>
          <p className="text-sm text-gray-300">Uptime</p>
          <p className="font-semibold text-white">{status.uptime}</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
      >
        <Wifi className="h-8 w-8 text-[#19b2b0]" />
        <div>
          <p className="text-sm text-gray-300">Load</p>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-[#3f5964]">
            <motion.div
              className="h-full bg-[#19b2b0]"
              initial={{ width: 0 }}
              animate={{ width: `${status.load}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
      >
        <Database className="h-8 w-8 text-[#19b2b0]" />
        <div>
          <p className="text-sm text-gray-300">Memory</p>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-[#3f5964]">
            <motion.div
              className="h-full bg-[#19b2b0]"
              initial={{ width: 0 }}
              animate={{ width: `${status.memory}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
      >
        <Shield className="h-8 w-8 text-[#19b2b0]" />
        <div>
          <p className="text-sm text-gray-300">Security</p>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-[#3f5964]">
            <motion.div
              className="h-full bg-[#19b2b0]"
              initial={{ width: 0 }}
              animate={{ width: `${status.security}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
//checked
