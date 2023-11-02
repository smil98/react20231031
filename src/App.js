import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"blue"} h={"200px"}>
        <Square bg={"white"} w={"100px"} h={"100px"}>
          Square
        </Square>
      </Center>
      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"white"} w={"100px"} h={"100px"}>
          <AddIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
