import { Box, Heading, SlideFade, Text } from "@chakra-ui/react";
import React from "react";
import MediumCard from "../../components/MediumCard";
import Paragraph from "../../components/Paragraph";
import { useRouter } from "next/router";

const slug = () => {
const router = useRouter();
  console.log("slug", router.query.slug);
  return (
    // <div>[slug]</div>
    <SlideFade in offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Articles on Medium
      </Heading>
      <Paragraph>
        <Text>
          List of articles related to all my tech knowledge sharing to the
          public. 📖
        </Text>
        <Text>Stay tuned for more articles.</Text>
      </Paragraph>
      <Box my={5}>
        {/* {articles.map((article) => (
          <MediumCard article={article} key={article.title} />
        ))} */}
      </Box>
    </SlideFade>
  );
};

export default slug;
