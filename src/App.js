import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ address, handleInputChange }) {
  return (
    <Box>
      <Input value={address} onChange={handleInputChange} />
    </Box>
  );
}
function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("Type the Address");
  function handleInputChange(e) {
    setAddress(e.target.value);
  }

  return (
    <div>
      <MyInput address={address} handleInputChange={handleInputChange} />
      <MyText address={address} />
    </div>
  );
}

export default App;
