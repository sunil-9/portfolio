/* eslint-disable react-hooks/rules-of-hooks */
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link ,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { menuLinks } from "../constant";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let router = useRouter();
  let { asPath } = router;

  const navItem = (
    <>
      {menuLinks.map((link) => (
        <NextLink href={link.route} key={link.name} passHref>
          <Link
            href={link.route}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.900"),
            }}
            color={
              link.route === asPath && useColorModeValue("blue.500", "blue.300")
            }
            onClick={isOpen ? onClose : onOpen}
          >
            {link.name}
          </Link>
        </NextLink>
      ))}
    </>
  );

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["95%", "95%", "95%"]}
          maxW={"container.lg"}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NextLink href="/" passHref>
            <Avatar
              as={Link}
              size="sm"
              href="/"
              src="/profile_picture.png"
            />

             </NextLink>
            <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
              {navItem}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen && (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={"container.lg"}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {navItem}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default NavBar;
