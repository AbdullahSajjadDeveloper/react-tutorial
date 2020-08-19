// Code:-

// 1. Hooks.jsx:-

// Importing Necessary React Built-In Components
import React, { useState, useEffect } from "react";

// Components

const Hooks = () => {
  const [firstAndLastName, setFirstAndLastName] = useState({
    firstName: "",
    lastName: "",
  });

  const handleFirstName = (event) => {
    setFirstAndLastName({ ...firstAndLastName, firstName: event.target.value }); // Using spread operator also.
  };

  const handleLastName = (event) => {
    setFirstAndLastName({ ...firstAndLastName, lastName: event.target.value }); // Using spread operator also.
  };

  return (
    <React.Fragment>
      <center>
        <div>
          <form>
            <h1>
              Your Name:- {firstAndLastName.firstName}{" "}
              {firstAndLastName.lastName}
            </h1>
            <input
              type="text"
              placeholder="FisrName"
              onChange={handleFirstName}
            />
            <input
              type="text"
              placeholder="LastName"
              onChange={handleLastName}
            />
          </form>
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
