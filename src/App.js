import React, { createContext, useContext, useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function MyInput() {
  const { setText } = useContext(MessageContext);
  return (
    <Input
      placeholder="Enter Message"
      onChange={(e) => setText(e.target.value)}
    />
  );
}

function MyText() {
  const { text } = useContext(MessageContext);
  return <Text>{text}</Text>;
}

function App(props) {
  const [text, setText] = useState("Where Message is Shown");
  return (
    <div>
      <MessageContext.Provider value={{ text: text, setText: setText }}>
        <MyInput />
        <MyText />
      </MessageContext.Provider>
    </div>
  );
}

const MessageContext = createContext(null);

export default App;
