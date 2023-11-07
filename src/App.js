import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

let nextId = 1;
function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleButtonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  function handleDoneButton(id) {
    updateItems((draft) => {
      const item = draft.find((e) => e.id == id);
      item.done = !item.done;
    });
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("Study Java")}>
        Study Java
      </Button>
      <Button onClick={() => handleButtonClick("Eat Dinner")}>
        Eat Dinner
      </Button>
      <Button onClick={() => handleButtonClick("Sleep")}>Sleep</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButton(item.id)}>Done</Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
