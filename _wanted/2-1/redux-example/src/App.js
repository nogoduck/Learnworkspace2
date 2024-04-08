import React from "react";

import { RouterProvider } from "react-router-dom";

import { Button, Cat, Dog, Home, TextInput, TextOutput } from "./Components";
import useTextHooks from "./useTextHooks";

import logo from "./logo.svg";
import "./App.css";

import router from "./router";

function App() {
  // useState
  // const [text, setText] = React.useState("perl");
  const [text, setText] = useTextHooks("perl");

  const input_ref = React.useRef(null);

  const changeText = (new_text) => {
    setText(new_text);
  };

  React.useEffect(() => {}, []);

  return (
    <div className="App">
      <Home />
      <Cat />

      {/*<RouterProvider router={router}></RouterProvider>*/}
    </div>
  );
}

export default App;
