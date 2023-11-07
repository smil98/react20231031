import React, { useEffect, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  //when working with external component, or bring data via ajax
  //two parameter : 1st -> function to run, 2nd -> value that executes first parameter
  //if empty array, renders only once initially
  console.log("log outside useEffect", number);
  useEffect(() => {
    console.log("effect's first parameter executed", number);
  }, []);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>Increment</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
