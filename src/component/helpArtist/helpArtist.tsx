import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Text,
  Image,
} from "@chakra-ui/react";
import AryaLarge from "../../assets/images/aryaLarge.svg";
import arya1 from "../../assets/images/arya1.svg";
import arya2 from "../../assets/images/arya2.svg";
import arya3 from "../../assets/images/arya3.svg";
import HoverableImage from "../hoverableImage/hoverableImage";

const HelpArtist = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const images = [arya1, arya2, arya3];
  return (
    <Box py={0} px={0}>
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingTop={isMobile ? "0px" : "0px"}
        height={isMobile ? "fit-content" : "fit-content"}
      >
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          height="100%"
          position="relative"
          overflow="hidden"
        >
          <Image
            src={AryaLarge}
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
            h="50%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bgGradient="linear(to-t, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"
          >
            <Flex
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              width={isMobile ? "100%" : "34%"}
            >
              <Heading
                color="white"
                fontWeight="700"
                fontSize={isMobile ? "1rem" : "2rem"}
              >
                ‘‘WE HELP ARTISTS FIND THEIR FANS’’
              </Heading>
              <Text
                alignSelf="flex-end"
                fontSize="1.1rem"
                color="#6F767E"
                fontWeight="400"
                marginTop="30px"
              >
                Figma files can also be downloaded from our store. These files
                include the latest Figma features and are synced{" "}
              </Text>
            </Flex>
            <Flex
              width="50%"
              justifyContent="space-between"
              alignItems="center"
              hidden={isMobile ? true : false}
            >
              {images.map((img) => (
                <HoverableImage src={img} alt="" />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HelpArtist;
