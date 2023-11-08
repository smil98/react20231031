import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <Button onClick={() => navigate("/path1?id=1")}>Customer 1</Button>
        <Button onClick={() => navigate("/path1?id=2")}>Customer 2</Button>
        <Button onClick={() => navigate("/path1?id=3")}>Customer 3</Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function AComp() {
  const [customer, setCustomer] = useState(null);
  const [searchParams] = useSearchParams();
  // since searchParams is similar to map must identify key
  // console.log(searchParams);
  // console.log(searchParams.get("id")); //n
  // console.log(searchParams.toString()); //id=n

  useEffect(() => {
    axios
      .get("/api/main1/sub4?" + searchParams.toString())
      .then((response) => setCustomer(response.data));
  }, [searchParams]);
  return (
    <Box>
      {customer && (
        <Text>
          {searchParams.get("id")} Customer : {customer.customerName}
        </Text>
      )}
    </Box>
  );
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="path1" element={<AComp />} />
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
