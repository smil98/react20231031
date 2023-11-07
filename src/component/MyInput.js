import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import { MessageContext } from "../App";

export function MyInput() {
  const { setText } = useContext(MessageContext);
  return (
    <Input
      placeholder="Enter Message"
      onChange={(e) => setText(e.target.value)}
    />
  );
}
