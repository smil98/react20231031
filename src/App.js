import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Box>Home Page</Box>} />
      <Route path="/path1" element={<Box>Route1</Box>} />
      <Route path="/path2" element={<Box>Route2</Box>} />
      <Route path="/path3" element={<Box>Route3</Box>} />
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
