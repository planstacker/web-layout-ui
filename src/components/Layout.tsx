import { ReactElement } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import Hero from "./Hero";
import TopBar from "./TopBar";

type Props = {
  title?: string;
  subTitle?: string;
  children?: ReactElement|string;
  pageTitle?: string;
  pageMetaDescription?: string;
  withOutHero?: boolean;
  useDefault?: boolean;
  link? : string;
  logoSrc? : string;
};

export default function Layout({
  children,
  title,
  subTitle,
  withOutHero, 
  link,
  logoSrc,
}: Props) {
  const { colorMode } = useColorMode();

  return <Box as="main" minHeight="100vh" mx={1} bg={colorMode === "dark" ? "gray.800" : "gray.50"} py={10}>
        <Box maxW={{ base: "xl", lg: "4xl" }} mx="auto" textAlign="center">
          <TopBar link={link} />
          {!withOutHero && <Hero title={title ?? "Plan Stacker"} withLogo height="20vh" logoSrc={logoSrc} />}
          {subTitle && (
            <Text fontSize={{ lg: "4xl", base: "2xl" }} fontWeight="bold" mx="auto" maxW="4xl">
              {subTitle}
            </Text>
          )}
          <Box as="main" p={4} textAlign={"left"}>
            {children ?? <Text>None</Text>}
          </Box>
        </Box>
      </Box>
}
