import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);
  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveButtomClick(index) {
    // const nextFoods= [...foods];
    // console.log("Delete Item No." + index)
    // nextFoods.splice(index,1);

    // const nextFoods = foods.filter((item,i) => i != index);
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("Coffee")}>Coffee</Button>
      <Button onClick={() => handleButtonClick("Ice Cream")}>Ice Cream</Button>
      <Button onClick={() => handleButtonClick("Cake")}>Cake</Button>
      <Box>
        <UnorderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button onClick={() => handleRemoveButtomClick(index)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
