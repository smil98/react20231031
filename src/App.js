import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";

function MyComp({ color }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(color + ": initial render");
  }, []);
  return (
    <Box borderWidth={"10px"} borderColor={color}>
      <Button onClick={() => setNumber(number + 1)}>Increment</Button>
      <Text>{number}</Text>
    </Box>
  );
}

function App(props) {
  const [number, setNumber] = useState(0);
  const [secondToggle, setSecondToggle] = useState(true);
  const [goldToggle, setGoldToggle] = useState(true);

  console.log("re-render parent");

  return (
    <div>
      <Box>
        <Text>Parent</Text>
        <Button onClick={() => setNumber(number + 1)}>Add</Button>
        <Text>{number}</Text>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setSecondToggle(e.target.checked)}
        />
        Blue Box toggle
        <Checkbox defaultChecked={true}
                  onChange={(e) => setGoldToggle(e.target.checked)};
      </Box>
      <Box mt={5}>
        <Text>Child</Text>
        <MyComp color={"red"} />
        {secondToggle && <MyComp color={"blue"} />}
        <Box sx={{ display: goldToggle ? "block" : "none" }}>
          <MyComp color={"gold"} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
