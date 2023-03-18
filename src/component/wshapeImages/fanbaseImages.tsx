import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const WShapeImages = ({ images }: { images: string[] }) => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.2 },
  };
  const isMobile = useBreakpointValue({ base: true, md: false });
  const responsiveMarginTop = isMobile ? "-10rem" : "-16rem";

  const renderImages = () => {
    return images.map((img, index) => (
      <MotionBox
        key={index}
        flex="1"
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        <MotionBox
          as="img"
          src={img}
          alt={`Image ${index + 1}`}
          width="100%"
          height="100%"
          maxWidth={isMobile ? "100%" : "200px"}
          maxHeight="200px"
          objectFit="cover"
          marginTop={index % 2 !== 1 ? responsiveMarginTop : "0"}
          marginBottom={index < images.length - 1 ? "1rem" : "0"}
          borderRadius="100%"
        />
      </MotionBox>
    ));
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="100%"
    >
      {renderImages()}
    </Flex>
  );
};

export default WShapeImages;
