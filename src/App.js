import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});
  const [customerNum, setCustomerNum] = useState([]);

  useEffect(() => {
    axios
      .get("/api/main1/ex")
      .then((response) => response.data)
      .then((data) => setCustomerNum(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("fetched total records sucessfully"));
  }, []);

  useEffect(() => {
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("finished"));
  }, [customerId]);

  return (
    <div>
      <Select
        placeholder="Select Customer ID"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {customerNum.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </Select>
      <Box>
        <Heading textAlign={"center"} mt="10%">
          Customer Info
        </Heading>
        <TableContainer size="sm" maxWidth="70%" m="5% 15%">
          <Table variant="simple">
            <TableCaption>Customer {customerId}'s info</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Contact Name</Th>
                <Th>Address</Th>
                <Th>City</Th>
                <Th>Postal Code</Th>
                <Th>Country</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{customer.customerId}</Td>
                <Td>{customer.customerName}</Td>
                <Td>{customer.contactName}</Td>
                <Td>{customer.address}</Td>
                <Td>{customer.city}</Td>
                <Td>{customer.postalCode}</Td>
                <Td>{customer.country}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default App;
