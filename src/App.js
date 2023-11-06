import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function handleButtonClick() {
    setNumber(number + 1);
  }

  function handleButtonClick2() {
    setNumber(number - 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClick}>Increase</Button>
      <Button onClick={handleButtonClick2}>Decrease</Button>
    </>
  );
}

export default App;
