import { Flex, FlexProps } from "@chakra-ui/react";

const Container = (props: FlexProps) => {
  return <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg="gray.50"
    color="black"
    _dark={{
      bg: "gray.900",
      color: "white",
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
};

export default Container;