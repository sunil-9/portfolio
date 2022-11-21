import {
  Heading,
  SimpleGrid,
  SlideFade,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { LiveProjectCard } from "../components/LiveProjectCard";
import { liveProjects } from "../constant";

export const LiveProjectSection = () => {
  return (
    <SlideFade in offsetY={90} delay={1.5}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Live Project
      </Heading>
      <Text
        textColor={useColorModeValue("gray.600", "gray.400")}
        fontSize={"lg"}
      >
        List of projects went live on Google PlayStore.
      </Text>

      <SimpleGrid columns={[1, 2, 2, 2]} mt={5}>
        {liveProjects.map((project) => {
          return <LiveProjectCard key={project.name} project={project} />;
        })}
      </SimpleGrid>
    </SlideFade>
  );
};
