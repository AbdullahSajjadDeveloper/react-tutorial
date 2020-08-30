// Code

/*
What is Context API?
  - Context API is the alternative of Redux State Management. It keeps us away of using props-drilling.
*/

// 1.ContextsHandling > BioDataContext.jsx:-

import { createContext } from "react";

// Created A Context
const BioDataContext = createContext();

// Context Data
const bioData = [
  {
    name: "Abdullah Sajjad",
    age: 14,
    id: 2727,
  },
  {
    name: "Nouman Kamran",
    age: 13,
    id: 2314,
  },
  {
    name: "Abu Bakar",
    age: 14,
    id: 2311,
  },
  {
    name: "Moazzam",
    age: 15,
    id: 2393,
  },
];

export { BioDataContext, bioData };

// 2. ContextsHandling > HobbiesContext.jsx:-

import { createContext } from "react";

// Created A Context
const HobbiesContext = createContext();

// Context Data
const hobbies = [
  {
    hobby: "Programming",
  },
  {
    hobby: "Cricket",
  },
  {
    hobby: "Football",
  },
  {
    hobby: "Wandering",
  },
];

export { HobbiesContext, hobbies };

// 3. App.jsx:-

import React, { Fragment } from "react";
import { BioDataContext, bioData } from "./ContextsHandling/BioDataContext";
import { HobbiesContext, hobbies } from "./ContextsHandling/HobbiesContext";
import FunctionalComponents from "./Components/FunctionalComponents";
import ClassComponent from "./Components/ClassComponents";

const App = () => {
  return (
    <Fragment>
      <BioDataContext.Provider value={bioData}> // Provider Provides The Value For The Consumer.
        <HobbiesContext.Provider value={hobbies}> // Provider Provides The Value For The Consumer.
          <FunctionalComponents />
          <ClassComponent />
        </HobbiesContext.Provider>
      </BioDataContext.Provider>
    </Fragment>
  );
};

export default App;

// 4. FunctionalComponent:-

import React, { Fragment } from "react";
import { BioDataContext, bioData } from "../ContextsHandling/BioDataContext";
import { HobbiesContext } from "../ContextsHandling/HobbiesContext";

const FunctionalComponents = () => {
  return (
    <Fragment>
      <BioDataContext.Consumer> // Consumer consumes the data being passed by Provider.
        {(bioData) => {
          return (
            <ul>
              {bioData.map((bio, bioIndex) => {
                return (
                  <div>
                    <h1>Functional Component Bio Data</h1>
                    <ul key={bioIndex}>
                      <li>Name:- {bio.name}</li>
                      <li>Age:- {bio.age}</li>
                      <li>ID:- {bio.id}</li>
                      <HobbiesContext.Consumer> // Consumer consumes the data being passed by Provider.
                        {(hobby) => {
                          return (
                            <div>
                              <h1>Functional Component Hobbies</h1>
                              <ul>
                                {hobby.map((hby, hbyIndex) => {
                                  return (
                                    <ul key={hbyIndex}>
                                      <li>
                                        {bio.name} Hobby Is:- {hby.hobby}
                                      </li>
                                    </ul>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        }}
                      </HobbiesContext.Consumer>
                    </ul>
                  </div>
                );
              })}
            </ul>
          );
        }}
      </BioDataContext.Consumer>
    </Fragment>
  );
};

export default FunctionalComponents;

// 5. ClassComponent.jsx:-

import React, { Component, Fragment } from "react";
import { BioDataContext, bioData } from "../ContextsHandling/BioDataContext";
import { HobbiesContext } from "../ContextsHandling/HobbiesContext"

class ClassComponent extends Component {
  render() {
    return (
      <Fragment>
       <h1>-----------------------------------------------------------------------------------------------------</h1>
        <BioDataContext.Consumer> // Consumer consumes the data being passed by Provider.
          {(bioData) => {
            return (
              <ul>
                {bioData.map((bio, bioIndex) => {
                  return (
                    <div>
                      <h1>Class Component Bio Data</h1>
                      <ul key={bioIndex}>
                        <li>Name:- {bio.name}</li>
                        <li>Age:- {bio.age}</li>
                        <li>ID:- {bio.id}</li>
                        <HobbiesContext.Consumer> // Consumer consumes the data being passed by Provider.
                          {(hobby) => {
                            return (
                              <div>
                                <h1>Class Component Hobbies</h1>
                                <ul>
                                  {hobby.map((hby, hbyIndex) => {
                                    return (
                                      <ul key={hbyIndex}>
                                        <li>
                                          {bio.name} Hobby Is:- {hby.hobby}
                                        </li>
                                      </ul>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          }}
                        </HobbiesContext.Consumer>
                      </ul>
                    </div>
                  );
                })}
              </ul>
            );
          }}
        </BioDataContext.Consumer>
      </Fragment>
    );
  }
}

export default ClassComponent;

// 6. index.jsx:-

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";

ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>,
    document.getElementById("root")
);
