import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      Common Element <Outlet />
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
