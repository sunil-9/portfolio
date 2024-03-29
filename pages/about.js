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

        <link rel="icon" href="/sunil.jpg" />
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
                Hi there, It&apos;s Sunil Sapkota from Pokhara Nepal. I am an
                Android Developer | Node.Js developer | and DevOps engineer with
                2 years + of working experience. My developer journey started
                with PHP as the backend and Android (java) as the front end
                during my college projects and internship. After graduation,
                this journey continued with Node.js and PHP for back-end
                development, react.js for front-end and Terraform, and Linux for
                server maintenance.
              </Paragraph>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I&apos;m currently working as a backend developer/ DevOps
                engineer in Gaintplay. Previously I was working as a web
                developer at Pinesofts which is one of the best web development
                companies in Pokhara and as an IT Head at Race Groups which is a
                renowned firm with four branches working in their respective
                field.
              </Paragraph>
              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I am a self-motivated and hard-working person. I am always ready
                to learn new things and improve my skills. I am a team player
                and can work under pressure. I am also a quick learner and can
                adapt to new environments easily. My proficiency is web
                development, android developer, and cloud development,
                especially on AWS and Linode.🔥
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
