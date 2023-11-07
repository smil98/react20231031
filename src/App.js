import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  const message = useContext(MessageContext);
  return <Text>Received Message: {message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("Original Message");

  // to deliver message state to C comp
  // create context outside the app (global)
  // put state in context : <Context.Provider value={state}></Context.Provider>
  // allows to share the context without drilling to every lower component
  // use within tree
  // useContext(Context)
  return (
    <div>
      <Button onClick={() => setMessage("Changed Message")}>
        Change Message
      </Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// syntax: UpperCamel Case, ends with Context
const MessageContext = createContext(null);

export default App;
