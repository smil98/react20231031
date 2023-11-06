import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App() {
  const [message, setMessage] = useState("");
  const [obj, setObj] = useState({ message: "" });

  function handleObjectMessageChange(e) {
    // const newObject = { ...obj };
    // newObject.message = e.target.value;
    // setObj(newObject);

    setObj({ ...obj, message: e.target.value });
  }

  return (
    <>
      <Box>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Text>{message}</Text>
      </Box>
      <Box>
        <Input value={message} onChange={handleObjectMessageChange} />
        <Text>{obj.message}</Text>
      </Box>
    </>
  );
}

export default App;
