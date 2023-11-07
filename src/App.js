import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  const value = useContext(MessageContext);
  return (
    <Button onClick={() => value.setMessage("Changed message")}>Click</Button>
  );
}

function BComp() {
  const value = useContext(MessageContext);
  return <Text>{value.message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("Initial Message");
  return (
    <div>
      <MessageContext.Provider
        value={{ message: message, setMessage: setMessage }}
      >
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}

const MessageContext = createContext(null);
export default App;
