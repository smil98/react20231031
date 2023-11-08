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
      <Route path="/main1/path1" element={<Box>Route4</Box>} />
      <Route path="/main1/path2" element={<Box>Route5</Box>} />
      <Route path="/main2">
        <Route path="path1" element={<Box>Route6</Box>} />
        <Route path="path2" element={<Box>Route7</Box>} />
        <Route path="path3">
          <Route path="sub1" element={<Box>Route8</Box>} />
          <Route path="sub2" element={<Box>Route9</Box>} />
        </Route>
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
