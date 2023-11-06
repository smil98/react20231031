import { Box, Button, List, ListItem, OrderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleButtonClick(item) {
    console.log(item);
    const newItems = [...items];
    newItems.push(item);
    setItems(newItems);
  }

  return (
    <>
      <Button onClick={() => handleButtonClick("coffee")}>Coffee</Button>
      <Button onClick={() => handleButtonClick("cake")}>Cake</Button>
      <Button onClick={() => handleButtonClick("iceCream")}>IceCream</Button>
      <Button onClick={() => handleButtonClick("cookie")}>Cookie</Button>
      <Button onClick={() => handleButtonClick("apple")}>Apple</Button>

      <Box>
        <OrderedList>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </>
  );
}

export default App;
