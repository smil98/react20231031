import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Itaque.</Button>
      <Button colorScheme="green">Doloremque?</Button>
      <Button colorScheme="orange">Accusantium.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Exercitationem.
      </Button>
      <Button colorScheme="cyan" size={"lg"}>
        Beatae?
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Eos.
      </Button>
      <Button colorScheme="orange" vairant="ghost">
        Beatae?
      </Button>
      <Button variant="link">In?</Button>
      <Button leftIcon={<EmailIcon />}>Alias?</Button>
      <Button rightIcon={<AddIcon />}>Ut!</Button>
      <Button isLoading>Fugit.</Button>
      <Button isLoading loadingText="sending">
        Placeat?
      </Button>
    </>
  );
}

export default App;
