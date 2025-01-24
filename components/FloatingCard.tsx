"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";

const FloatingCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        bg="white"
        m={4}
      >
        <Heading as="h3" size="lg" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    </motion.div>
  );
};

export default FloatingCard;
