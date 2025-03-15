import { Box, Text, Link, Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const textColor = useColorModeValue("teal.600", "teal.300");
  const boxTextColor = useColorModeValue("gray.600", "gray.300");

  return <Flex as="footer" py="8rem">
      <Box textAlign="center" color={boxTextColor} fontSize="sm" width="100%">
        <Text mb="2">
          &copy; {new Date().getFullYear()} <Link href="https://planstacker.com/">PlanStacker.com</Link>. All rights reserved.
        </Text>
        <Flex justify="center">
          <Link href="https://planstacker.com/privacy" color={textColor} mx="2">
            Privacy Policy
          </Link>
          <Link href="https://planstacker.com/tos" color={textColor} mx="2">
            Terms of Service
          </Link>
          <Link href="https://planstacker.com/contact" color={textColor} mx="2">
            Contact Us
          </Link>
        </Flex>
      </Box>
    </Flex>
};

export default Footer;