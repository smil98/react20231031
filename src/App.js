import React, { useEffect, useState } from "react";
import { Box, Select, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employee, setEmployee] = useState({});
  const [employeeId, setEmployeeId] = useState(0);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("api/main1/ex2")
      .then((response) => response.data)
      .then((data) => setRecords(data))
      .catch((error) => setRecords(null))
      .finally(() => console.log("fetched all records"));
  }, []);

  useEffect(() => {
    axios
      .get("api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .catch((error) => setEmployee(null))
      .finally(() => console.log("fetched employee with id " + employeeId));
  }, [employeeId]);

  return (
    <div>
      <Select
        placeholder="Choose Employee Id"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        {records.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </Select>
      <Box>
        <Text>{employee}</Text>
      </Box>
    </div>
  );
}

export default App;
