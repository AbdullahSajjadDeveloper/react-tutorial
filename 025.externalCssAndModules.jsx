// Code:-

// 1. AppStyle.css:- // Can be accessed in any file without import.

.para {
    font-size: 1cm;
    background-color: blue;
}

// 2. AppStyle.module.css:- // Should be imported to access its styling.

.para2 {
    font-size: 1cm;
    background-color: red;
}

// 3. App.jsx:-

// Importing Necessary React.JS Built-In Components
import React from "react";

// Importing Necessary StyleSheet Files
import "./AppStyle.css";
import Styling from "./AppStyle.module.css";

// Components

const App = () => {
  return (
    <React.Fragment>
      <Website />
    </React.Fragment>
  );
};

const Website = (props) => {
  const style = { // Object for Inline Styling.
    color: "green",
    backgroundColor: "black",
  };
  return (
    <React.Fragment>
      <h1 style={style}>Abdullah Sajjad</h1>
      <p className="para">This is Para!!!</p> // coming from AppStyle.css
      <p className={Styling.para2}>This is Para2!!!</p>// coming from AppStyle.module.css
    </React.Fragment>
  );
};

// Exporting App Component
export default App;

// 4. index.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defiend Components
import App from './App';

// Importing CSS Modules
import Style from './AppStyle.module.css';

ReactDOM.render(
  <React.Fragment>
  <App/>,
  <h1 className="para">Index.JS</h1> // Accessed AppStyle.css without 
  <h1 className={Style.para2}>Index.JS</h1> // Should be imported the CSS Module to access its styling.
  </React.Fragment>,
  document.getElementById('root')
);
