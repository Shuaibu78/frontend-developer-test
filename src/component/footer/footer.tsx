import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import ArrowUp from "../../assets/images/arrow-up-right.svg";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box py={12} px={10} bgColor="bgColor">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent={isMobile ? "flex-start" : "space-between"}
        width="100%"
        paddingTop={isMobile ? "10px" : "0px"}
        height={isMobile ? "fit-content" : "240px"}
      >
        <Flex
          direction={isMobile ? "column" : "row"}
          width="100%"
          justifyContent={isMobile ? "flex-start" : "space-between"}
          alignItems="center"
        >
          <Flex
            direction="column"
            width={isMobile ? "100%" : "45%"}
            justifyContent={isMobile ? "flex-start" : "space-between"}
          >
            <Text
              color="white"
              fontWeight={700}
              fontSize={isMobile ? "16px" : "21px"}
              lineHeight="30px"
            >
              SHORT LINE ABOUT US
            </Text>
            <Text
              color="white"
              fontWeight={700}
              fontSize={isMobile ? "16px" : "21px"}
              lineHeight="30px"
              marginBottom={isMobile ? "5" : "24px"}
            >
              THREE WORDS HERE
            </Text>
            <Text
              color="white"
              fontWeight={500}
              fontSize="13px"
              lineHeight="16px"
            >
              Short sentence here
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            color="white"
            width={isMobile ? "100%" : "40%"}
            marginTop={isMobile ? "20px" : "0px"}
            height="auto"
            direction={isMobile ? "column" : "row"}
          >
            <Flex>
              <Text width={isMobile ? "100%" : "92px"}>CONNECT WITH US</Text>
            </Flex>
            <Flex
              direction={isMobile ? "row" : "row"}
              width="100%"
              justifyContent="space-between"
              px={isMobile ? "10px" : "0px"}
            >
              <Flex
                direction="column"
                justifyContent="flex-start"
                marginTop={isMobile ? "20px" : "0px"}
              >
                {["Twitter", "Discord", "Discord"].map((link) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    width="84px"
                    marginBottom="10px"
                  >
                    <Text>{link}</Text>
                    <Image
                      src={ArrowUp}
                      alt="background"
                      w="10px"
                      h="10px"
                      objectFit="cover"
                    />
                  </Flex>
                ))}
              </Flex>
              <Flex
                direction="column"
                justifyContent="flex-start"
                marginTop={isMobile ? "20px" : "0px"}
              >
                {["Cookies", "Licenses", "Contact"].map((link) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    width="84px"
                    marginBottom="10px"
                  >
                    <Text>{link}</Text>
                    <Image
                      src={ArrowUp}
                      alt="background"
                      w="10px"
                      h="10px"
                      objectFit="cover"
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider borderColor="#33383F" />
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="flex-start"
          direction={isMobile ? "column" : "row"}
        >
          <Flex
            width={isMobile ? "100%" : "25%"}
            justifyContent="space-between"
          >
            <Text
              color="#6F767E"
              lineHeight="10.8"
              fontSize="10px"
              fontWeight={400}
            >
              2022 &#x2022; PLATFORM
            </Text>
            <Text
              color="#6F767E"
              lineHeight="10.8"
              fontSize="10px"
              fontWeight={400}
            >
              2022
            </Text>
          </Flex>
          <Flex
            width={isMobile ? "100%" : "25%"}
            justifyContent="space-between"
            alignContent="center"
          >
            <Text
              color="#6F767E"
              lineHeight="10.8"
              fontSize="10px"
              fontWeight={400}
              verticalAlign="top"
            >
              TERMS & CONDITIONS
            </Text>
            <Text
              color="#6F767E"
              lineHeight="10.8"
              fontSize="10px"
              fontWeight={400}
            >
              PRIVACY POLICY
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
