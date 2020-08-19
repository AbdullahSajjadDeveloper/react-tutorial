// Code:-

// 1. Hooks.jsx:-

// Importing Necessary React Built-In Components
import React, { useState, useEffect } from "react";

// Components

const Hooks = () => {
  const [randomValue, setRandomValue] = useState([]);

  const addRandomValue = () => {
    setRandomValue([
      ...randomValue,
      {
        id: randomValue.length,
        value: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  let iterateRandomValue = randomValue.map((iteratedValue) => {
    return <li>{iteratedValue.value}</li>;
  });

  return (
    <React.Fragment>
      <div>
        <button onClick={addRandomValue}>Add Random Value To List</button>
        <ul key={randomValue.id}>{iterateRandomValue}</ul>
      </div>
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
