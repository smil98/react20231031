import { Box, Circle, Image, Stack } from "@chakra-ui/react";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <Stack direction="column">
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="300px"
          src="abcde.jpg"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Stack>
    </div>
  );
}

export default App;
