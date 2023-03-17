import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./component/navbar/navbar";
import HeroSection from "./component/heroSection/heroSection";
import theme from "./theme";
import CareerSection from "./component/careerSection/careerSection";
import Stats from "./component/stats/stats";
import HelpArtist from "./component/helpArtist/helpArtist";
import Fanbase from "./component/fanbase/fanbase";
import Footer from "./component/footer/footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <HeroSection />
    <CareerSection />
    <Stats />
    <HelpArtist />
    <Fanbase />
    <Footer />
  </ChakraProvider>
);
