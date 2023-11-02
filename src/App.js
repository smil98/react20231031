import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Fuga, tenetur.
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Cupiditate, quasi?
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        A, ipsum.
      </Box>
      <Box borderY={"10px dotted"} borderColor={"orangered"}>
        Fugiat, fugit!
      </Box>
      <Box border={"5px solid green"} borderRadius={"20px"}>
        Facilis, odit.
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Doloribus, facere!
      </Box>
      <Box border={"5px double black"} borderRadius={5}>
        Expedita, ipsa!
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={20}>
        Amet, aperiam.
      </Box>
      <Box border={"2px solid gray"} borderTopEndRadius={30}>
        Fugit, minima.
      </Box>
      <Box border={"3px solid skyblue"} borderTopRadius={30}>
        Assumenda, voluptate!
      </Box>
      <Box shadow={"10px 5px 10px 5px"}>Blanditiis, distinctio.</Box>
      <Box shadow="xl">Neque, vero.</Box>
      <Box shadow="lg">Illum, voluptatem.</Box>
      <Box shadow="sm">Aut, dolorum.</Box>
      <Box boxShadow="dark-lg" p="2" rounded="md" bg="white">
        Porro, quidem.
      </Box>
      <Box m={"10px"} border={"1px dotted"} borderColor={"lightpink"}>
        Distinctio, quibusdam!
      </Box>
      <Box mx={5} border={"2px solid blue"}>
        Doloribus, ullam.
      </Box>
      <Box my={7} border={"5px solid black"}>
        Corporis, delectus!
      </Box>
      <Box>Quasi, repellendus?</Box>
    </>
  );
}

export default App;
