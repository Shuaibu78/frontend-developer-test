import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
} from "@chakra-ui/react";
import TryItButton from "../tryItButton/tryItButton";
import Models from "../../assets/images/models.png";

const CareerSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box py={8} px={isMobile ? 8 : 20} bgColor="secondaryColor">
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingTop={isMobile ? "10px" : "0px"}
        position="relative"
        height={isMobile ? "fit-content" : "600px"}
      >
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          w={isMobile ? "100%" : "45%"}
        >
          <Box
            bg={isMobile ? "transparent" : "primaryColor"}
            borderRadius="lg"
            p={2}
            w={isMobile ? "100%" : "400px"}
            h="md"
            position="relative"
          >
            <Image
              src={Models}
              alt="Tilted"
              position={isMobile ? "inherit" : "absolute"}
              top={isMobile ? "0" : "50%"}
              left={isMobile ? "0" : "50%"}
              transform={
                isMobile
                  ? "rotate(0deg)"
                  : "translate(-50%, -52%) rotate(-4deg)"
              }
              borderRadius="lg"
              maxW={isMobile ? "sm" : "md"}
              maxH={isMobile ? "sm" : "md"}
              objectFit="cover"
            />
          </Box>
        </Flex>
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          maxW={isMobile ? "100%" : "40%"}
          color="bgColor"
        >
          <Heading
            lineHeight="52px"
            fontWeight={700}
            fontSize={isMobile ? "2rem" : "2.8rem"}
            marginBottom="20px"
          >
            YOUR CAREER IS IN YOUR HANDS
          </Heading>
          <Text
            lineHeight="28px"
            fontSize="1.1rem"
            fontWeight="400"
            marginBottom="20px"
          >
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </Text>
          <Text
            lineHeight="28px"
            fontSize="1.1rem"
            fontWeight="400"
            marginBottom="20px"
          >
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced.
          </Text>
          <Text
            lineHeight="28px"
            fontSize="1.1rem"
            fontWeight="400"
            marginBottom="10px"
          >
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </Text>
          <TryItButton color="#1A1D1F" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default CareerSection;
