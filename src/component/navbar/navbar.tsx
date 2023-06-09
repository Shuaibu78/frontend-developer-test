// components/Navbar.js
import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="bgColor"
      px={isMobile ? 12 : 20}
      color="white"
      height="70px"
      position="relative"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize="xxl" fontWeight="bold" color="primaryColor" zIndex={2}>
          Logo
        </Text>

        {!isMobile && (
          <Stack
            direction={"row"}
            spacing={20}
            alignItems={"center"}
            zIndex={2}
          >
            <Text>Features</Text>
            <Text>News</Text>
          </Stack>
        )}

        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          <Button
            variant="outline"
            border="1px"
            borderColor="primaryColor"
            color="primaryColor"
            _hover={{ bgColor: "primaryColor", color: "bgColor" }}
            zIndex={2}
          >
            Sign Up
          </Button>
          <Button
            variant="solid"
            bgColor="primaryColor"
            color="bgColor"
            _hover={{
              bgColor: "transparent",
              color: "primaryColor",
              border: "1px",
              borderColor: "primaryColor",
            }}
            zIndex={2}
          >
            Log In
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
