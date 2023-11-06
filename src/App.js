import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person, updatePerson] = useImmer({
    name: "son",
    address: { city: "seoul", country: "korea" },
  });

  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.address.city = e.target.value;
    });
  }

  function handleCountryChange(e) {
    updatePerson((draft) => {
      draft.address.country = e.target.value;
    });
  }

  return (
    <div>
      <Input value={person.name} onChange={handleNameChange} />
      <Input value={person.address.city} onChange={handleCityChange} />
      <Input value={person.address.country} onChange={handleCountryChange} />
      <Text>
        {person.name} lives in {person.address.country}, {person.address.city}.
      </Text>
    </div>
  );
}

export default App;
