// Code:-

/*
  What is useEffect(); Hook?
    - useEffect(); runs when our component mounts and updates.
*/

// 1. Hooks.jsx:-

// Importing Necessary React Built-In Components
import React, { useState, useEffect } from "react";

// Components

const Hooks = () => {
  let [number, setNumber] = useState(0); // 0 is the default value of number, by using setNumber we will update number.

  const handleIncrement = () => {
    setNumber((number = number + 1));
  };

  const handleDecrement = () => {
    setNumber((number = number - 1));
  };

  useEffect(() => {
    console.log("Component Updated and Mounted");
  }, [number]); // The third para is optional that is run it if something updates on the particular thing.
  return (
    <React.Fragment>
      <center>
        <div>
          <h1>Number:- {number}</h1>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </center>
    </React.Fragment>
  );
};

// Exporting Hooks Component
export default Hooks;

// 2. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import Hooks from "./Hooks";

// Components
const App = () => {
  return (
    <React.Fragment>
      <Hooks />
    </React.Fragment>
  );
};

// Exporting App Component
export default App;

// 3. index.jsx:-

// Importing Necessary React Built-In Components
import React from "react";
import ReactDOM from "react-dom";

// Importing Necessary React User-Defined Components
import App from "./App";

// Making DOM Manupulation
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
