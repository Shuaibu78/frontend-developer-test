import { Box, Text, Image, Flex, useBreakpointValue } from "@chakra-ui/react";
import Davido from "../../assets/images/davidoOnACar.png";
import WomanWithFan from "../../assets/images/womanWithfan.png";
import TryItButton from "../tryItButton/tryItButton";

const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box py={8} pl={isMobile ? 8 : 20} pr={isMobile ? 8 : 0} bgColor="bgColor">
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
        marginTop={isMobile ? "10px" : "50px"}
        position="relative"
        height={isMobile ? "fit-content" : "700px"}
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
          maxWidth={isMobile ? "100%" : "55%"}
        >
          <Text
            fontSize={isMobile ? "4xl" : "5.2rem"}
            fontWeight={700}
            maxWidth={isMobile ? "100%" : "100%"}
            color="white"
            letterSpacing="0.05em"
            lineHeight={isMobile ? "45px" : "76px"}
          >
            AN INNOVATIVE PLATFORM THAT{" "}
            <Text color="primaryColor">SUPPORTS ARTISTS.</Text>
          </Text>
          <Text
            color="white"
            fontSize="18px"
            fontWeight={400}
            maxWidth={isMobile ? "100%" : "60%"}
          >
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are{" "}
          </Text>
          <TryItButton />
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction={isMobile ? "column" : "row"}
          maxWidth={isMobile ? "100%" : "45%"}
        >
          <Image
            src={WomanWithFan}
            alt="Top Image"
            objectFit="cover"
            borderRadius="lg"
            maxW="100%"
            position={isMobile ? "inherit" : "absolute"}
            right={isMobile ? 0 : "430px"}
            top={isMobile ? 0 : "170px"}
            marginBottom={isMobile ? "20px" : "0px"}
          />
          <Image
            src={Davido}
            alt="Bottom Image"
            objectFit="cover"
            borderRadius="lg"
            maxW="100%"
            position={isMobile ? "inherit" : "absolute"}
            top={isMobile ? 0 : -4}
            right={0}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
