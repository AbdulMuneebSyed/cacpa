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
    <div className="grid grid-cols-2 gap-4 rounded-xl bg-white/95 p-6 backdrop-blur-lg shadow-lg">
      <StatusItem icon={Server} label="Uptime" value={status.uptime} />
      <StatusItem
        icon={Wifi}
        label="Load"
        value={`${status.load}%`}
        progress={status.load}
      />
      <StatusItem
        icon={Database}
        label="Memory"
        value={`${status.memory}%`}
        progress={status.memory}
      />
      <StatusItem
        icon={Shield}
        label="Security"
        value={`${status.security}%`}
        progress={status.security}
      />
    </div>
  );
}

function StatusItem({
  icon: Icon,
  label,
  value,
  progress,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  progress?: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
    >
      <div className="rounded-full bg-[#38bdf8]/10 p-2">
        <Icon className="h-6 w-6 text-[#579184]" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
        {progress !== undefined && (
          <div className="mt-1 h-1 w-24 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="h-full bg-[#38bdf8]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
