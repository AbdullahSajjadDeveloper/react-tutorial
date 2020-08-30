// Code:-

/*
  What is useContext(); Hook?
    - This hook is used to broke down our Context Data into simpler form without using Consumers and Callback Hell.
*/

// 1. ContextsHandling > BioDataContext.jsx:-

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

const App = () => {
  return (
    <Fragment>
      <BioDataContext.Provider value={bioData}>
        <HobbiesContext.Provider value={hobbies}>
          <FunctionalComponents />
        </HobbiesContext.Provider>
      </BioDataContext.Provider>
    </Fragment>
  );
};

export default App;

// 4. FunctionalComponent.jsx:-

import React, { Fragment, useContext } from "react";
import { BioDataContext } from "../ContextsHandling/BioDataContext";
import { HobbiesContext } from "../ContextsHandling/HobbiesContext";

const FunctionalComponents = () => {
  const BioData = useContext(BioDataContext); // Simply Access Data Of BioDataContext by storing it in a variable and by using useContext() Hook.
  const Hobbies = useContext(HobbiesContext); // Simply Access Data Of HobbiesContext by storing it in a variable and by using useContext() Hook.
  return (
    <Fragment>
      <div>
        <ul>
          <h1>Iterating BioData and Hobbies With Name Using Context</h1>
          {BioData.map((eachBioData, eachBioDataIndex) => {
            return (
              <Fragment key={eachBioDataIndex}>
                <li>Name:- {eachBioData.name}</li>
                <li>Age:- {eachBioData.age}</li>
                <li>Id:- {eachBioData.id}</li>
                {Hobbies.map((eachHobby, eachHobbyIndex) => {
                  return (
                    <Fragment key={eachHobbyIndex}>
                      <li>
                        {eachBioData.name} Hobby Is {eachHobby.hobby}
                      </li>
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </ul>
        <ul></ul>
      </div>
    </Fragment>
  );
};

export default FunctionalComponents;
