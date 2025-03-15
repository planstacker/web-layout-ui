import { Flex, Heading } from "@chakra-ui/react";
import Logo from "./Logo";

const Hero = ({
  title = "with-chakra-ui-typescript", // Default value for title
  height = "100vh", // Default value for height
  withLogo = false, // Default value for withLogo
  gradient = "linear(to-r, green.500, blue.400)", // Default gradient
  fontColor = "black", // Default solid font color,
  logoSrc,
}: {
  title?: string;
  height?: string;
  withLogo?: boolean;
  gradient?: string;
  fontColor?: string;
  logoSrc? : string;
}) => {
  return <Flex
    justifyContent="center"
    alignItems="center"
    height={height}
  >
    {withLogo && <Logo logoSrc={logoSrc} />}
    <Heading
      fontSize={{lg:"4vw", base:"7vw"}}
      bgGradient={gradient}
      bgClip={"text"}
      ml={2}
      color={gradient ? undefined : fontColor} // Fallback to solid color if gradient is not used
    >
      {title}
    </Heading>
  </Flex>
};


export default Hero;
