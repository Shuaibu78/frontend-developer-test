// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const colors = {
  bgColor: "#1E1E1E",
  primaryColor: "#E1F16B",
  white: "#FFFFFF",
  secondaryColor: "#EFEFEF",
  titleColor: "#1A1D1F",

  // Add more custom colors here
};

const theme = extendTheme({ colors });

export default theme;
