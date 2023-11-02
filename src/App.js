import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"blue"} color={"white"}>
          Deleniti!
        </Box>
        <Box bg={"white"}>Harum!</Box>
        <Box bg={"red"}>Pariatur!</Box>
        <Box bg={"orange"}>Saepe.</Box>
        <Box bg={"green"} color={"white"}>
          Laborum!
        </Box>
      </Flex>
    </>
  );
}

export default App;
