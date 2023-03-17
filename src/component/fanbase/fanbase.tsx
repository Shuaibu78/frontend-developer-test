import { Box, Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import WShapeImages from "../wshapeImages/fanbaseImages";
import Fan1 from "../../assets/images/fan1.svg";
import Fan2 from "../../assets/images/fan2.svg";
import Fan3 from "../../assets/images/fan3.svg";
import Fan4 from "../../assets/images/fan4.svg";
import Fan5 from "../../assets/images/fan5.svg";

const Fanbase = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const images = [Fan1, Fan2, Fan3, Fan4, Fan5];
  return (
    <Box py={8} px={12} bgColor="black">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingTop={isMobile ? "10px" : "50px"}
        height={isMobile ? "500px" : "700px"}
      >
        <Flex direction="column" alignItems="center" width="100%">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            marginBottom={4}
          >
            <Text
              fontSize={isMobile ? "2xl" : "2.4rem"}
              fontWeight={700}
              color="white"
              letterSpacing="0.05em"
              lineHeight={isMobile ? "40px" : "50px"}
              display="inline"
            >
              JOIN TOP ARTISTS,
            </Text>
            <Text
              color="white"
              fontSize={isMobile ? "2xl" : "2.4rem"}
              fontWeight={700}
              letterSpacing="0.05em"
              lineHeight={isMobile ? "40px" : "50px"}
              display="inline"
            >
              BUILD YOUR{" "}
              <p style={{ color: "#E1F16B", display: "inline" }}>FANBASE</p>.
            </Text>
          </Flex>
          <Text
            color="#6F767E"
            fontSize="18px"
            fontWeight={400}
            maxWidth={isMobile ? "100%" : "40%"}
            lineHeight="30px"
            textAlign="center"
          >
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced
          </Text>
        </Flex>
        <Flex width="100%">
          <WShapeImages images={images} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Fanbase;
