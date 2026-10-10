import React from 'react';
import { Heading, SlideFade, Box, Text } from "@chakra-ui/react";
import MediumCard from '../components/MediumCard';
import Paragraph from '../components/Paragraph';

const MediumSection = ({articles = []}) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
            >
                Articles on Medium
            </Heading>
            <Paragraph>
                <Text>List of articles related to all my tech knowledge sharing to the public. 📖</Text>
                <Text>Stay tuned for more articles.</Text>
            </Paragraph>
            <Box
                my={5}
            >
                {!articles.length && <Text role="status">Articles are temporarily unavailable. Please check back soon or <a href="https://medium.com/@sunil-9" target="_blank" rel="noopener noreferrer">read on Medium ↗</a>.</Text>}
                {articles.map((article) => (
                    <MediumCard article={article} key={article.title} />
                ))}
            </Box>
        </SlideFade>
    )
}

export default MediumSection
