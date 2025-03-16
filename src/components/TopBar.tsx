import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link.js';
import { useRouter } from 'next/router.js';
import { FaBlog, FaHome } from "react-icons/fa";
import DarkModeSwitch  from './DarkModeSwitch';
import Logo from './Logo';

type props = {

    link? : string, 

    logoSrc? : string, 
}

export default function TopBar({link, logoSrc} : props) {
  const { colorMode } = useColorMode();
  const router = useRouter(); // Get the current route

  const aLink = link ?? "https://planstacker.com";

  return <Box textAlign={"right"} p={2} borderRadius="lg" bgColor={colorMode === 'dark' ? '#333' : "#bbb"}>
      <Flex>
        <Box pt={1.5} ml={1} mr={2}>
          <Logo width={30} height={30} logoSrc={logoSrc}/>
        </Box>
        <Link href={`${aLink}/`} passHref>
          <Flex
            mx={2}
            p={2}
            align="center"
            borderWidth="1px"
            borderColor={router.pathname === '/' ? "blue.500" : "transparent"} // Highlight if active
            borderRadius="md"
            bg={router.pathname === '/' ? (colorMode === "dark" ? "blue.900" : "blue.100")  : "transparent"} // Optional background change
            _hover={{
              borderColor: "blue.300",
              boxShadow: "md",
            }}
          >
            <FaHome size={20} />
            <Text ml={2} fontSize="sm">Home</Text>
          </Flex>
        </Link>
        <Link href={`${aLink}/blog`} passHref>
          <Flex
            mx={2}
            p={2}
            align="center"
            borderWidth="1px"
            borderColor={router.pathname.startsWith('/blog') ? "blue.500" : "transparent"} // Highlight if active
            borderRadius="md"
            bg={router.pathname.startsWith('/blog') ? (colorMode === "dark" ? "blue.900" : "blue.100") : "transparent"} // Optional background change
            _hover={{
              borderColor: "blue.300",
              boxShadow: "md",
            }}
          >
            <FaBlog size={20} />
            <Text ml={2} fontSize={"sm"}>Blog</Text>
          </Flex>
        </Link>

        <DarkModeSwitch marginLeft="auto" marginRight="0" />
      </Flex>
    </Box>
}
