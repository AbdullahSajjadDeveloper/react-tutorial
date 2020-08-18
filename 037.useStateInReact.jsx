// Code:-

/*
  What is useState(); ?
    - useState(); allows us to use state in react functional components.
*/

// 1. Hooks.jsx:-

// Importing Necessary React Built-In Components
import React, { useState } from "react";

const Hooks = () => {
  const [defaultName, fullName] = useState("Default");
  const [defaultCountry, countryName] = useState("Default");

  const handleName = () => {
    fullName("Developer: Abdullah Sajjad Siddique"); // Updating State.
  };

  const handleCountry = () => {
    countryName("Pakistan"); // Updating State.
  };

  return (
    <React.Fragment>
      <center>
        <div>
          <h1>{defaultName}</h1>
          <button onClick={handleName}>Click For My Full Name!!!</button>
          <h1>------------------------------------------------------</h1>
          <h1>{defaultCountry}</h1>
          <button onClick={handleCountry}>Click To My Country Name!!!</button>
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
