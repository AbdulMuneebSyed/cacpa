"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { CheckCircle, Loader2 } from "lucide-react";

export default function FormSubmissionSuccess() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="shadow-xl border-none">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center">
              <CheckCircle className="text-green-500 w-8 h-8 mr-2" />
              Form Submitted Successfully
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-center text-gray-600 mb-4">
                Thank you for your submission. We have received your form and
                will contact you soon.
              </p>
              <div className="text-center text-gray-500 mb-4">
                Redirecting to home page in:
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={countdown}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold text-black text-center mb-4"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1, 1],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: 1,
                    //   repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    {countdown}
                  </motion.span>
                </motion.div>
              </AnimatePresence>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="flex justify-center"
              >
                <Loader2 className="w-8 h-8 text-blue-500" />
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
