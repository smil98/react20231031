import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ onChange }) {
  return <Input placeholder="enter message" onChange={onChange} />;
}

function BComp({ onChange }) {
  return <DComp onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <AComp message={message} />
      <BComp onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}

export default App;
