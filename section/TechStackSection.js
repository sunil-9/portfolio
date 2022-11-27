import {
  Heading,
  SlideFade,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import TechStackTab from "./TechStackTab";
const TechStackSection = () => {
  return (
    <SlideFade in offsetY={80} delay={0.1}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Tech Stack
      </Heading>
      <Text
        textColor={useColorModeValue("gray.600", "gray.400")}
        fontSize={"lg"}
      >
        A list of my favorite tools and technologies that I use on a regular
        basis.
      </Text>

      <TechStackTab />
    </SlideFade>
  );
};

export default TechStackSection;
