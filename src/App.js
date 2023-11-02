import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Center,
  Box,
  RadioGroup,
  Radio,
  Flex,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Center p={5}>
        <Box w={"480px"}>
          <FormControl border={"1px solid gray"} borderRadius={5} p={5}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>Write your Email</FormHelperText>
          </FormControl>
        </Box>
        <br />
      </Center>
      <Center>
        <Box w={"480px"} border={"1px solid blue"}>
          <FormControl p={5}>
            <FormLabel>Select One Option Only</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Maiores.</Radio>
                <Radio value="value3">Corporis?</Radio>
                <Radio value="value4">Enim.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Box w={"480px"} border={"1px dotted black"}>
          <FormControl p={5}>
            <FormLabel>Select Options</FormLabel>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox>Lorem.</Checkbox>
                <Checkbox>Eaque!</Checkbox>
                <Checkbox>Sapiente?</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
