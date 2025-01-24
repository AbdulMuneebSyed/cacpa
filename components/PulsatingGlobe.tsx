"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const PulsatingGlobe = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="300px"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <Box
          width="200px"
          height="200px"
          borderRadius="50%"
          background="url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png')"
          backgroundSize="cover"
        />
      </motion.div>
    </Box>
  );
};

export default PulsatingGlobe;
