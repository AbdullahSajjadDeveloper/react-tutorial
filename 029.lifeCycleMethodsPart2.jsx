// Code:-

// 1. LifeCycleA.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleA : Constructor"); // First it will run
    this.state = {};
  }

  static getDerivedStateFromProps() { // It will run before running Render() {} because we can define thingsin it that should br runned befor rundering dom.
    console.log("LifeCycleA : getDerivedStateFromProps"); // It will run secondly.
    return null;
  }

  render() { // it will be runed thirdly.
    console.log("LifeCycleA : Render");
    return (
      <div>
        <h1>LifeCycleA</h1>
        <LifeCycleB /> // Calling another lifecyle component.
      </div>
    );
  }

  componentDidMount() { // this function will always be runned last when render() {} finsishes to execute and dom is completely get executed on the page.
    console.log("LifeCycleA : componentDidMount");
  }
}

// Exporting LifeCycleA Component
export default LifeCycleA;

// 2. LifeCycleB.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

class LifeCycleB extends React.Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleB : Constructor");
    this.state = {};
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleB : getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycleB : Render");
    return (
      <div>
        <h1>LifeCycleB</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log("LifeCycleB : componentDidMount");
  }
}

// Exporting LifeCycleA Component
export default LifeCycleB;

// 3. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import LifeCycleA from "./LifeCycleA";

// Components
const App = () => {
  return (
    <React.Fragment>
      <LifeCycleA />
    </React.Fragment>
  );
};

// Exporting App Component
export default App;

// 4. index.jsx:-

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
