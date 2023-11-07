import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>Click</Button>;
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  return <OtherChildComp message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("Original Message");

  return (
    <div>
      <SomeComp onClick={() => setMessage("other Message")} />
      <OtherComp message={message} />
    </div>
  );
}

export default App;
