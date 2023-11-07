import React, { createContext, useState } from "react";
import { MyText } from "./component/MyText";
import { MyInput } from "./component/MyInput";

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

export const MessageContext = createContext(null);

export default App;
