import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "../App";

export function AComp() {
  const value = useContext(MessageContext);
  return (
    <Button onClick={() => value.setMessage("Changed message")}>Click</Button>
  );
}
