import { Text, Image, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import ArrowLeft from "../../assets/images/arrowLeft.svg";
import ArrowLeftBlack from "../../assets/images/arrowLeftBlack.svg";

interface IColor {
  color?: string;
}

const TryItButton: FunctionComponent<IColor> = ({ color = "primaryColor" }) => {
  return (
    <Flex
      bgColor="transparent"
      outline="none"
      border="none"
      marginBlock="20px"
      alignItems="center"
      cursor="pointer"
      width="100%"
    >
      <Text color={color}>Try it now</Text>
      <Image
        paddingLeft={4}
        src={color === "primaryColor" ? ArrowLeft : ArrowLeftBlack}
        alt="arrow left"
        objectFit="contain"
        maxW="100%"
      />
    </Flex>
  );
};

export default TryItButton;
