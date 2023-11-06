import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("hello");

  function handleButtonClick() {
    // changing state of text
    // text = "message"; cannot be done as react determines state
    setText("greetings");
    //when button is clicked, react re- renders and delivers setText to the useState
    //once the state has been changed, react doesn't re-render as the handleButtonClick sets the text to greetings again
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>Change Status</Button>
      <p>{text}</p>
    </div>
  );
}

export default App;
