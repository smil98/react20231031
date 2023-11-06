import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // HOOK : function that starts with use
  // must be written on top of the component
  // cannot be used inside iteration or conditional functions

  //set.... : method that changes state
  //checks whether the state is identical and decides re-rendering

  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });

  function handleNumberObjectChange() {
    // this won't work
    // numberObject.number = numberObject.number + 1;
    // setNumberObject(numberObject);

    const newNumberObject = { ...numberObject };
    newNumberObject.number = newNumberObject.number + 1;
    setNumberObject(newNumberObject);
  }

  return (
    <div>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>Change Number</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjectChange}>Change Number Object</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
