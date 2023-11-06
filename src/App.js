import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "hamburger", "milk", "tea"];
  const arr2 = ["son", "lee", "kim"];
  const listItems = arr.map((item, i) => <ListItem key={i}>{item}</ListItem>);

  // const arr4 = [
  //   { id: 0, name: "latte" },
  //   { id: 1, name: "honey" },
  //   { id: 2, name: "bread" },
  // ]; would be the ideal way to set index

  return (
    <div>
      <List>{listItems}</List>
      <List>
        {arr2.map((name, index) => (
          <ListItem key={index}>{name}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
