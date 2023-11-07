import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { MessageContext } from "../App";

export function MyText() {
  const { text } = useContext(MessageContext);
  return <Text>{text}</Text>;
}
