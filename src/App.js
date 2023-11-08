import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex, Heading } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/* When using react-router, don't use a tag as it refreshes the entire page*/}
          <a href="/apath">Go to A</a>
        </Box>
        <Box>
          <a href="/bpath">Go to B</a>
        </Box>
        {/*Use Link (react-dom) instead*/}
        <Box>
          <Link to={"/apath"}>Go To A</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>Go To B</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>A Component</Box>;
}

function BComp() {
  return <Box>B Component</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeComponent />}>
        <Route path="apath" element={<AComp />} />
        <Route path="bpath" element={<BComp />} />
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
