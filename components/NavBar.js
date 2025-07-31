/* eslint-disable react-hooks/rules-of-hooks */
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { 
  FaUser, 
  FaProjectDiagram, 
  FaGithub, 
  FaNewspaper, 
  FaEnvelope 
} from "react-icons/fa";
import { menuLinks } from "../constant";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let router = useRouter();
  let { asPath } = router;

  // Icon mapping for bottom navigation
  const getIcon = (linkName) => {
    switch (linkName) {
      case "About Me":
        return <FaUser />;
      case "Live Projects":
        return <FaProjectDiagram />;
      case "Github":
        return <FaGithub />;
      case "Articles":
        return <FaNewspaper />;
      case "Contact":
        return <FaEnvelope />;
      default:
        return <FaUser />;
    }
  };

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

  const bottomNavItem = (
    <>
      {menuLinks.map((link) => (
        <NextLink href={link.route} key={link.name} passHref>
          <Link
            href={link.route}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flex="1"
            py={2}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.100", "gray.600"),
            }}
            color={
              link.route === asPath 
                ? useColorModeValue("blue.500", "blue.300")
                : useColorModeValue("gray.600", "gray.300")
            }
            borderRadius="md"
          >
            <Box fontSize="20px" mb={1}>
              {getIcon(link.name)}
            </Box>
            <Text fontSize="xs" fontWeight="medium">
              {link.name === "Live Projects" ? "Projects" : 
               link.name === "About Me" ? "About" : link.name}
            </Text>
          </Link>
        </NextLink>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <Box 
        bg={useColorModeValue("white", "gray.700")} 
        px={4} 
        boxShadow={"lg"}
        display={{ base: "none", md: "block" }}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["95%", "95%", "95%"]}
          maxW={"container.lg"}
          mx="auto"
        >
          <HStack spacing={8} alignItems={"center"}>
            <NextLink href="/" passHref>
              <Avatar
                as={Link}
                size="sm"
                href="/"
                src="/profile_picture.png"
              />
            </NextLink>
            <HStack as="nav" spacing="4">
              {navItem}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>
      </Box>

      {/* Mobile Bottom Navigation */}
      <Box
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        bg={useColorModeValue("white", "gray.700")}
        borderTop="1px"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
        zIndex="999"
        display={{ base: "block", md: "none" }}
        px={2}
      >
        <Flex alignItems="center" justifyContent="space-around" h="65px">
          {bottomNavItem}
        </Flex>
      </Box>

      {/* Mobile Top Bar - Only Avatar and Color Mode Switcher */}
      <Box 
        bg={useColorModeValue("white", "gray.700")} 
        px={4} 
        boxShadow={"sm"}
        display={{ base: "block", md: "none" }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="998"
      >
        <Flex
          h={12}
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
        >
          <NextLink href="/" passHref>
            <Avatar
              as={Link}
              size="sm"
              href="/"
              src="/profile_picture.png"
            />
          </NextLink>
          <ColorModeSwitcher size="sm" />
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
