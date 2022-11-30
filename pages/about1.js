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
import CompanyCard from "../components/CompanyCard";
import Paragraph from "../components/Paragraph";
import { UnderlinedText } from "../components/UnderlinedText";
import { companies } from "../constant";
import styles from "../styles/Home.module.css";
import { MotionBox } from "../utils/motion";

function About() {
  const { colorMode } = useColorMode();

  return (
    <div classNameName={styles.container}>
      <Head>
        <title>About Me</title>

        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <SlideFade in offsetX={80}>
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
              <div className="my-16"></div>

              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Application UI v2.0.0{" "}
                    {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      Latest
                    </span> */}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 13th, 2022
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing pages.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="mr-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                    Download ZIP
                  </a>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Figma v1.3.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 7th, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.2.2
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 2nd, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </p>
                </li>
              </ol>
              <div className="my-16"></div>

              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-5 h-full">
                  <div
                    className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                    style={{ left: "50%" }}
                  ></div>

                  {/* <!-- left timeline --> */}
                  <div className="flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto text-white font-semibold text-lg">
                        1
                      </h1>
                    </div>
                    <div className="order-1 bg-[#3182ce] rounded-lg shadow-xl w-5/12 px-6 py-2">
                      <h3 className=" font-bold text-white text-xl">
                        Lorem Ipsum
                      </h3>
                      <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>

                  {/* <!-- right timeline --> */}
                  <div className="flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-lg text-white">
                        2
                      </h1>
                    </div>
                    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-2">
                      <h3 className=" font-bold text-gray-800 text-xl">
                        Lorem Ipsum
                      </h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                  {/* <!-- left timeline --> */}
                  <div className="flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto text-white font-semibold text-lg">
                        3
                      </h1>
                    </div>
                    <div className="order-1 bg-[#3182ce] rounded-lg shadow-xl w-5/12 px-6 py-2">
                      <h3 className=" font-bold text-white text-xl">
                        Lorem Ipsum
                      </h3>
                      <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>

                  {/* <!-- right timeline --> */}
                  <div className="flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 className="mx-auto font-semibold text-lg text-white">
                        4
                      </h1>
                    </div>
                    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-2">
                      <h3 className=" font-bold text-gray-800 text-xl">
                        Lorem Ipsum
                      </h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
}

export default About;
