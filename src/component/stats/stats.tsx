import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
} from "@chakra-ui/react";
import CardImg from "../../assets/images/cardBg.svg";
import Artist from "../../assets/images/artist.svg";
import Stat from "../../assets/images/stat.svg";
import TryItButton from "../tryItButton/tryItButton";

interface IStat {
  bgColor: string;
  width: string;
  height: string;
}

const Stats = () => {
  const stats: IStat[] = [
    {
      bgColor: "#FED7CF",
      width: "38px",
      height: "70px",
    },
    {
      bgColor: "#75DAFE",
      width: "36px",
      height: "146px",
    },
    {
      bgColor: "#272B30",
      width: "38px",
      height: "70px",
    },
    {
      bgColor: "#C38BFF",
      width: "38px",
      height: "95px",
    },
    {
      bgColor: "#5CE277",
      width: "38px",
      height: "83px",
    },
    {
      bgColor: "#FFE584",
      width: "38px",
      height: "123px",
    },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box py={0} px={0}>
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingTop={isMobile ? "0px" : "0px"}
        height={isMobile ? "fit-content" : "600px"}
      >
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          width={isMobile ? "100%" : "50%"}
          height={isMobile ? "600px" : "100%"}
          position="relative"
          bgColor="primaryColor"
          overflow="hidden"
        >
          <Image
            src={CardImg}
            alt="background"
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            p={4}
            px={12}
            w="100%"
            h="100%"
            paddingTop={isMobile ? "20px" : "4px"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            bgGradient="linear(to-t, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"
          >
            <Heading
              lineHeight={isMobile ? "40px" : "52px"}
              fontWeight={700}
              fontSize={isMobile ? "2rem" : "2.8rem"}
              marginBottom="20px"
            >
              USE YOUR STATS TO MAKE MOVES
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
          </Box>
        </Flex>
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          width={isMobile ? "100%" : "50%"}
          height={isMobile ? "400px" : "100%"}
          bgColor="#111315"
        >
          <Box
            bgColor="#111315"
            width="90%"
            height="90%"
            p={8}
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            hidden={isMobile ? false : true}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  width="100px"
                  backgroundColor="#272B30"
                  borderRadius="10px"
                  height="14px"
                  marginBottom={2}
                ></Box>
                <Flex alignItems="center">
                  <Text
                    fontSize="2rem"
                    fontWeight="700"
                    lineHeight="38px"
                    color="white"
                  >
                    55K
                  </Text>
                  <Image
                    src={Stat}
                    alt="artist"
                    w="100%"
                    h="100%"
                    paddingLeft={4}
                    objectFit="cover"
                  />
                </Flex>
              </Flex>
              <Image
                src={Artist}
                alt="artist"
                w="35px"
                h="35px"
                objectFit="cover"
              />
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
              {stats?.map(({ bgColor, width, height }) => (
                <Box
                  bgColor={bgColor}
                  width={width}
                  height={height}
                  borderRadius="28px"
                ></Box>
              ))}
            </Flex>
          </Box>
          <Box
            bg="primaryColor"
            margin="0 auto"
            height={isMobile ? "90%" : "70%"}
            width={isMobile ? "90%" : "80%"}
            hidden={isMobile ? true : false}
          >
            <Box
              bg="#1A1D1F"
              height="100%"
              width="100%"
              mt="-10px"
              ml="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                bgColor="#111315"
                width="80%"
                height="80%"
                p={8}
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  width="90%"
                >
                  <Flex
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      width="100px"
                      backgroundColor="#272B30"
                      borderRadius="10px"
                      height="14px"
                      marginBottom={2}
                    ></Box>
                    <Flex alignItems="center">
                      <Text
                        fontSize="2rem"
                        fontWeight="700"
                        lineHeight="38px"
                        color="white"
                      >
                        55K
                      </Text>
                      <Image
                        src={Stat}
                        alt="artist"
                        w="100%"
                        h="100%"
                        paddingLeft={4}
                        objectFit="cover"
                      />
                    </Flex>
                  </Flex>
                  <Image
                    src={Artist}
                    alt="artist"
                    w="35px"
                    h="35px"
                    objectFit="cover"
                  />
                </Flex>
                <Flex justifyContent="space-between" alignItems="flex-end">
                  {stats?.map(({ bgColor, width, height }) => (
                    <Box
                      bgColor={bgColor}
                      width={width}
                      height={height}
                      borderRadius="28px"
                    ></Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Stats;
