// components/HoverableImage.js
import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const HoverableImage = ({ src, alt }: { src: string; alt: string }) => {
  const hoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
  };

  return (
    <MotionBox
      position="relative"
      width="200px"
      height="200px"
      variants={hoverVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <Box
        as="img"
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        objectFit="contain"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        _hover={{
          backgroundColor: "rgba(0, 0, 0, 0.01)",
        }}
        backgroundColor="rgba(0, 0, 0, 0.829)"
      />
    </MotionBox>
  );
};

export default HoverableImage;
