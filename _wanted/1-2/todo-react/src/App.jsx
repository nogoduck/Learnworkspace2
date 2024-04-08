import "./App.css";

import React from "react";

import { TextArea, Button, Input } from "./components";
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

import { Link, RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
