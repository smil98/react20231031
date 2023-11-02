import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3, "2xl": 6 }}>
        {/* When sm, 2 col, when md, 3 col, thus responsive */}
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Adipisci.</Box>
        <Box bg="blue.300">Consequuntur?</Box>
        <Box bg="blue.300">Nostrum!</Box>
        <Box bg="blue.300">Sapiente!</Box>
        <Box bg="blue.300">Adipisci.</Box>
        <Box bg="blue.300">Nemo.</Box>
        <Box bg="blue.300">Alias.</Box>
        <Box bg="blue.300">Quos?</Box>
        <Box bg="blue.300">Culpa?</Box>
        <Box bg="blue.300">Qui!</Box>
        <Box bg="blue.300">Vero.</Box>
        <Box bg="blue.300">Ut!</Box>
        <Box bg="blue.300">Rerum.</Box>
        <Box bg="blue.300">Ratione.</Box>
        <Box bg="blue.300">Asperiores!</Box>
        <Box bg="blue.300">Quidem.</Box>
        <Box bg="blue.300">Reiciendis?</Box>
        <Box bg="blue.300">Dolore!</Box>
        <Box bg="blue.300">Labore?</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
