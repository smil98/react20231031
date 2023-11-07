import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>Change Text</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("Original Text");

  function handleButtonClick() {
    setMessage("Changed Text");
  }

  return (
    <div>
      <MyComp1 onClick={handleButtonClick} />
      {/* if button in MyComp1 is clicked */}
      <MyComp2 message={message} />
      {/*  change the text in MyCom2*/}
    </div>
  );
}

export default App;
