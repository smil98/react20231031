import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  //first parameter: function that has side effect
  //second parameter : array that executes setup
  //if the array is empty only runs once
  useEffect(() => {
    console.log("effect function is running");
  }, [number, text]);

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>Add</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
