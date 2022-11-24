import {
  Box,
  Container,
  Flex,
  Heading,
  SlideFade,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Paragraph from "../components/Paragraph";
import { UnderlinedText } from "../components/UnderlinedText";
import styles from "../styles/Home.module.css";

function About1() {
  const { colorMode } = useColorMode();

  return (
    <div classNameName={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Sunil | Mobile Application Developer" />
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
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
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
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
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
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
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
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
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

export default About1;
