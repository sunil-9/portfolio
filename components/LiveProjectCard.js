import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    VStack,
    LinkOverlay
} from "@chakra-ui/react";
import { MotionBox } from '../utils/motion';
import Paragraph from './Paragraph';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import { Button } from '@chakra-ui/button';

export const LiveProjectCard = ({ project }) => (
    <MotionBox whileHover={{ y: -5 }}>
        <Box
            p={4}
            display={{ md: "flex" }}
            borderWidth={1}
            margin={2}
            rounded={'10px'}
            _hover={{
                borderColor: "blue.500",
            }}
        >
            <Flex
                alignItems="center"
                justifyContent="space-around"
                direction={{ base: 'column', md: 'row' }}
            >
                <Image
                    margin="auto"
                    src={project.imageUrl}
                    alt={project.alt}
                    objectFit={'cover'}
                    boxSize={['100px', '150px', '150px', '150px']}
                />
                <Flex flexDirection="column" ml={[0, 5, 5]} mt={[5, 5, 0, 0]}>
                    <Heading as="h2" fontSize="lg" fontWeight="600" color={"blue.400"}>
                        {project.name}
                    </Heading>
                    <Paragraph mt={'10px'}>
                        <Text>{project.summary}</Text>
                    </Paragraph>

                    <VStack my={2} p={3}>
                        {project.playstore && <Image
                            src={'/playstore.png'}
                            alt='playstore'
                            objectFit={'cover'}
                            onClick={() => window.open(project.playstore)}
                        />}

                        { project.appstore && <Image
                            src={'/appstore.png'}
                            alt='appstore'
                            objectFit={'cover'}
                            onClick={() => window.open(project.appstore)}
                        />}
                       {project.website && (
                            <LinkOverlay href={project.website} isExternal>
                                <Button
                                mt={2}
                                colorScheme="blue"
                                variant="solid"
                                size="sm"
                                fontWeight="500"
                                borderRadius="md"
                                px={4}
                                py={2}
                                _hover={{ bg: "blue.600" }}
                                >
                                Visit Website
                                </Button>
                            </LinkOverlay>
                        )}
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    </MotionBox>

)
