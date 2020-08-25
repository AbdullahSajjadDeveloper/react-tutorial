// Code:- 

// 1. App.jsx:-

import React, { Component, Fragment } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: ""
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
  };
  nameHandler = (event) => {
    let nameValue = event.target.value;
    this.setState({
      name: nameValue
    });
  };
  ageHandler = (event) => {
    let ageValue = event.target.value;
    this.setState({
      age: ageValue
    });
  };
  componentDidUpdate(prevProp, prevState) {
    if (prevState.age !== this.state.age) { // It will run only if something changes in age state.
      console.log("component updated!!!");
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={this.nameHandler}
            />
            <input
              type="text"
              placeholder="Enter Your Age"
              onChange={this.ageHandler}
            />
            <button type="submit">Save Name And Age</button>
          </form>
          {this.state.name}
          {this.state.age}
        </div>
      </Fragment>
    );
  }
}

export default App;

// 2. index.jsx:-

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  rootElement
);
