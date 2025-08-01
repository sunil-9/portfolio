import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  LightMode,
  Link,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import Paragraph from "../components/Paragraph";
import SocialButton from "../components/SocialButton";
import { resume } from "../constant";

const ProfileSection = () => {
  return (
    <SlideFade in offsetY={500}>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={3}
          >
            Hey, I am Sunil Sapkota! <span className="waving-hand">👋</span>
          </Heading>
          <Flex alignItems={"flex-end"}>
            <Avatar
              name="Sunil Sapkota"
              src="/profile_picture.png"
              mb={5}
              size="lg"
            />
          </Flex>
        </Flex>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Web/Android Application Developer | Devops engineer from Australia.
        </Paragraph>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Excellence in{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://nextjs.org/"
            fontWeight="500"
            isExternal
          >
            Next Js(Typescript),
          </Link>
          {" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://www.terraform.io/"
            fontWeight="500"
            isExternal
            >
            Terrafom
          </Link>
            {" & "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://www.android.com/"
            fontWeight="500"
            isExternal
          >
            Android(Java)
          </Link>
          .{"\n"}Passion in Linux, cloud computing and CI/CD.
        </Paragraph>

        <Box mt={5}>
          <LightMode>
            <ButtonGroup>
              <SocialButton social={resume} />
              <Link href={"/contact"} style={{ textDecoration: "none" }}>
                <Button
                  colorScheme="blue"
                  size="sm"
                  margin={"5px"}
                  leftIcon={<BiPhoneCall color="white" />}
                >
                  Contact Me
                </Button>
              </Link>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default ProfileSection;
