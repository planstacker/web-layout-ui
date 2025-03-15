import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

type props = {

    marginLeft?: string,

    marginRight? : string, 

    marginTop?: string, 

    size? : "sm" | "md" | "xs" | "lg",
}

const DarkModeSwitch = ({marginLeft, marginRight, marginTop, size} :props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      position="relative"
      marginLeft={marginLeft ?? "2"}
      marginRight={marginRight ?? "2"}
      marginTop={marginTop}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      colorScheme="green"
      size={size}
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;