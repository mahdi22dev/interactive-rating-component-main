import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating";
import Nexpage from "./components/Nexpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rating />,
  },
  {
    path: "/thankyou",
    element: <Nexpage />,
  },
]);

function App() {
  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
