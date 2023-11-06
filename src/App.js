import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    setItems([...items, text]);
    setText("");
  }

  function handleRemoveButtonClick(index) {
    setItems(items.filter((item, i) => i !== index)); // Use !== to compare for inequality
  }

  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={handleButtonClick}>ADD</Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button
                colorScheme="red"
                onClick={() => handleRemoveButtonClick(index)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;
