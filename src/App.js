import React, { useEffect, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  useEffect(() => {
    axios
      .get("/api/main1/sub1")
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
}

export default App;
