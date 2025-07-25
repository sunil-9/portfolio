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
                Hi, I&apos;m Sunil Sapkota from Australia. With more than five years of professional experience, I&apos;ve built a versatile skill set across web development, Android development, machine learning, and DevOps. My academic journey of a Master&apos;s in Information Technology from Victoria University Sydney, complemented by a strong foundation in software development and management from my Bachelor&apos;s in Computer Applications at La Grandee International College.
              </Paragraph>

              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                During college, I began honing my skills in PHP backend and Java-based Android applications. Post-graduation, I deepened my expertise in full-stack development—specializing in Node.js and PHP on the backend and React.js for frontend work. In parallel, I embraced infrastructure and automation with Linux systems, Docker, Kubernetes, Terraform, and AWS, evolving into a well-rounded DevOps practitioner.
              </Paragraph>
              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                My recent roles reflect this blend of disciplines. I served as Assistant Professor at both La Grandee International College and the International School of Management and Technology (ISMT), where I taught Android, Linux, Machine Learning, supported curriculum design, supervised student projects, and contributed to administrative operations. Concurrently, at Oarkflow, I worked as a Full Stack / Machine Learning Engineer, developing production-ready ML systems alongside backend and React.js front ends.
              </Paragraph>
              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                Earlier in my career, I worked with Gaintplay (Ad Break Media) as a Node.js Backend Developer and DevOps Engineer, handling cloud deployments, Kubernetes on Linode, CI/CD pipelines, and server management. At Race Groups, where I advanced to IT Head, I led development on PHP and MySQL systems, implemented CI/CD processes, managed Docker infrastructure, and oversaw technical operations across four branches.
              </Paragraph>
              <Paragraph fontSize="lg" lineHeight={1.6} my={5}>
                I&apos;m a self-driven and resilient professional who thrives in collaborative and high-pressure environments. I continually pursue new learning opportunities to expand my technical and leadership abilities. My key strengths lie in web development, Android development, DevOps infrastructure, and supporting cloud-based systems, especially within AWS environments.🔥
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
