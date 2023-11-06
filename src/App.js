import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person, setPerson] = useState({ name: "son", city: "seoul" });
  const [user, updateUser] = useImmer({ name: "lee", city: "jeju" });

  function handleNameChange(e) {
    const nextPerson = { ...person };
    nextPerson.name = e.target.value;
  }

  function handleCityChange(e) {
    const nextPerson = { ...person };
    nextPerson.city = e.target.value;
    setPerson(nextPerson);
  }

  function handleUserNameChange(e) {
    updateUser((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleUserCityChange(e) {
    updateUser((draft) => {
      draft.city = e.target.value;
    });
  }

  return (
    <div>
      <Input value={person.name} onChange={handleNameChange} />
      <Input value={person.city} onChange={handleCityChange} />
      <Text>
        {person.name} lives in {person.city}
      </Text>

      <hr />
      <Input value={user.name} onChange={handleUserNameChange} />
      <Input value={user.city} onChange={handleUserCityChange} />
      <Text>
        {user.name} lives in {user.city}
      </Text>
    </div>
  );
}

export default App;
