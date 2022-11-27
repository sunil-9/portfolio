import {
  Box,
  Container,
  Flex,
  Heading,
  SlideFade,
  Stack,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import CompanyCard from "../components/CompanyCard";
import Paragraph from "../components/Paragraph";
import { UnderlinedText } from "../components/UnderlinedText";
import { companies, educations } from "../constant";
import styles from "../styles/Home.module.css";
import { MotionBox } from "../utils/motion";

function About() {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Sunil | Mobile Application Developer"
        />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <SlideFade in offsetY={500}>
            <Box>
              <UnderlinedText>
                <Flex alignItems={"center"}>
                  <Stack pr={3}>
                    <AiFillStar size={"30px"} />
                  </Stack>
                  <Heading>About Me</Heading>
                </Flex>
              </UnderlinedText>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I am a mobile developer with 2 years ++ working experience. My
                developer journey started with Android (Java) during my
                internship. After graduation, this journey continued with
                Kotlin, official language for Android development. 👔
              </Paragraph>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                As full-time mobile developer , I am lucky enough to receive a
                MacBook from my company, hence my journey continue with React
                Native, cross-platform mobile framework (Android & iOS). My
                passion in mobile development never ended and I am ready to take
                on new challenges! 🔥
              </Paragraph>

              <Flex alignItems="center" my={10}>
                <UnderlinedText>
                  <Flex alignItems={"center"}>
                    <Stack pr={3}>
                      <BsFillBriefcaseFill size={"30px"} />
                    </Stack>

                    <Heading>Career</Heading>
                  </Flex>
                </UnderlinedText>
              </Flex>

              <VStack
                spacing={4}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={5}
              >
                {companies.map((company, index) => (
                  <MotionBox whileHover={{ y: -5 }} key={index}>
                    <CompanyCard
                      key={index}
                      title={company.title}
                      role={company.role}
                      skills={company.skills}
                      period={company.period}
                      logo={company.logo}
                      url={company.url}
                      colorMode={colorMode}
                    />
                  </MotionBox>
                ))}
              </VStack>

              <Flex alignItems="center" my={10}>
                <UnderlinedText>
                  <Flex alignItems="center">
                    <Stack pr={3}>
                      <FaGraduationCap size={"30px"} />
                    </Stack>
                    <Heading>Education</Heading>
                  </Flex>
                </UnderlinedText>
              </Flex>

              <VStack
                spacing={4}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={5}
              >
                {educations.map((education, index) => (
                  <MotionBox whileHover={{ y: -5 }} key={index}>
                    <CompanyCard
                      key={index}
                      title={education.title}
                      role={education.role}
                      skills={education.skills}
                      period={education.period}
                      logo={education.logo}
                      url={education.url}
                      colorMode={colorMode}
                    />
                  </MotionBox>
                ))}
              </VStack>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
}

export default About;
