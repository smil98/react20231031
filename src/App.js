import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

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

export const MessageContext = createContext(null);
export default App;
