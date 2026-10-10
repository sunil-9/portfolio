import { Avatar, Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaUser, FaProjectDiagram, FaGithub, FaNewspaper, FaEnvelope } from "react-icons/fa";
import { menuLinks } from "../constant";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const icons = { "About Me": FaUser, "Live Projects": FaProjectDiagram, Github: FaGithub, Articles: FaNewspaper, Contact: FaEnvelope };
export default function NavBar() {
  const { pathname } = useRouter();
  const links = (mobile = false) => menuLinks.map((link) => {
    const Icon = icons[link.name] || FaUser;
    return <NextLink href={link.route} key={link.route} passHref>
      <Link className={`nav-link ${pathname === link.route ? "active" : ""}`} aria-current={pathname === link.route ? "page" : undefined}>
        {mobile && <Icon aria-hidden="true" />}
        <Text as="span">{mobile ? link.name.replace("Live ", "").replace(" Me", "") : link.name}</Text>
      </Link>
    </NextLink>;
  });
  return <>
    <Box as="header" className="glass-nav">
      <Flex maxW="container.lg" mx="auto" align="center" justify="space-between" minH="72px" px={{base: 4, md: 6}}>
        <NextLink href="/" passHref><Link display="flex" alignItems="center" gridGap="3" aria-label="Sunil Sapkota home">
          <Avatar size="sm" src="/profile_picture.png" name="Sunil Sapkota" />
          <Text fontWeight="700" letterSpacing="-0.03em">sunil<Text as="span" color="cyan.400">.</Text></Text>
        </Link></NextLink>
        <HStack as="nav" aria-label="Main navigation" spacing={1} display={{base: "none", md: "flex"}}>{links()}</HStack>
        <ColorModeSwitcher />
      </Flex>
    </Box>
    <Flex as="nav" aria-label="Mobile navigation" className="glass-mobile-nav" display={{base: "flex", md: "none"}}>{links(true)}</Flex>
  </>;
}
