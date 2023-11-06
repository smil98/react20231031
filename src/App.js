import React, { useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handlerUserNameChange(e) {
    setUsername(e.target.value);
  }

  function handlerEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input type="text" value={username} onChange={handlerUserNameChange} />
      </Box>
      <Box>
        <Input type="text" value={email} onChange={handlerEmailChange} />
      </Box>
      <Text>
        {username}'s email : {email}
      </Text>
      <Box>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
      <Text>
        {username}'s address : {address}
      </Text>
    </div>
  );
}

export default App;
