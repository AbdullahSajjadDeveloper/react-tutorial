// Code:-

// 1. App.css:-

.ifSignIn {
    color: green;
}

.ifNotSignIn {
    color: red;
}

.headingFont {
    font-size: 1cm;
    text-align: center;
}

// 2. App.jsx:-

// Importing Necessary React.JS Built-In Components
import React from "react";

// Importing Necessary StyleSheet Files
import './App.css';

// Components

const App = () => {
  return(
    <React.Fragment>
      <Website status="notSignedIn"/>
    </React.Fragment>
  );
}

const Website = (props) => {
  var whatStatus;
  if (props.status === "signedIn") {
    whatStatus = "ifSignIn"; // ifSignIn coming from App.css
  } else if (props.status === "notSignedIn") {
    whatStatus = "ifNotSignIn"; // ifNotSignIn coming from App.css
  }
  return(
    <React.Fragment>
      <h1 className={`${whatStatus} headingFont`}>Abdullah Sajjad</h1> // Applied two classes
    </React.Fragment>
  );
}

// Exporting App Component
export default App;

// 3. index.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defiend Components
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
