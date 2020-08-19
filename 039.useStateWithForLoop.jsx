// Code:-

// 1. Hooks.jsx:-

// Importing Necessary React Built-In Components
import React, { useState, useEffect } from "react";

// Components

const Hooks = () => {
  const [number, setIncrement] = useState(0);

  const handleIncrement = () => {
    for (let i = 0; i < 10; i = i + 1) {
      setIncrement((prevNum) => {
        return prevNum + 1;
      });
    }
  };

  return (
    <React.Fragment>
      <center>
        <div>
          <h1>Number Will Be Incremented By 10!!!</h1>
          <button onClick={handleIncrement}>
            Number Incremented By 10:- {number}
          </button>
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
