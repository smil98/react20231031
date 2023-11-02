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
  Select,
  Textarea,
  Switch,
} from "@chakra-ui/react";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Box w={"480px"} m={10}>
        <FormControl>
          <Select placeholder="---Select Options---" multiple h={"100px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">ipsum</option>
            <option value="value3">dolor</option>
            <option value="value4">sit</option>
            <option value="value5">amet</option>
          </Select>
        </FormControl>
      </Box>
      <Box w={"480px"} m={10}>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea placeholder="Write Content" size="sm"></Textarea>
        </FormControl>
      </Box>
      <Box w={"480px"} m={10}>
        <FormControl display="flex" alignitems="center">
          <FormLabel htmlFor="email-alerts" mb={0}>
            Enable Email Alerts?
          </FormLabel>
          <Switch id="email-alerts" size="lg" />
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
