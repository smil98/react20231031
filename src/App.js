import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function App(props) {
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub3")
      .then((response) => response.data)
      .then((data) => setCustomer(data));
  }, []);

  return (
    <div>
      <Heading textAlign={"center"} mt="10%">
        Customer Info
      </Heading>
      <TableContainer size="sm" maxWidth="70%" m="5% 15%">
        <Table variant="simple">
          <TableCaption>Customer 5's info</TableCaption>
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
    </div>
  );
}

export default App;
