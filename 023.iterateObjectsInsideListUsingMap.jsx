// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from "react";

const App = () => {
  const classNine = [
    { name: "Abdullah", age: 14, id: 2727 },
    { name: "Nouman", age: 13, id: 2732 },
    { name: "Abu Bakar", age: 14, id: 2192 },
    { name: "Moazzam", age: 13, id: 1343 },
  ];
  const classTenth = [
    { name: "Moiz", age: 15, id: 2625 },
    { name: "Ali", age: 16, id: 5353 },
    { name: "Bilal", age: 15, id: 4346 },
    { name: "Rafeh", age: 17, id: 6443 },
  ];
  return (
    <React.Fragment>
      <ClassNinth classNinthData={classNine} />
      <ClassTenth classTenthData={classTenth} />
    </React.Fragment>
  );
};

const ClassNinth = (props) => {
  return (
    <React.Fragment>
      <h3> - Class 9th</h3>
      {props.classNinthData.map((dataNinth) => {
        return (
          <ul key={dataNinth.id}> // key attribute must be given a unique value and its important.
            <li>ID:- {dataNinth.id}</li>
            <li>NAME:- {dataNinth.name}</li>
            <li>AGE:- {dataNinth.age}</li>
          </ul>
        );
      })}
    </React.Fragment>
  );
};

class ClassTenth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenthData: this.props.classTenthData,
    };
  }
  render() {
    return (
      <React.Fragment>
        <h3>-------------------------------</h3>
        <h3> - Class 10th</h3>
        {this.state.tenthData.map((dataTenth) => {
          return (
            <ul key={dataTenth.id}> // key attribute must be given a unique value and its important.
              <li>ID:- {dataTenth.id}</li>
              <li>NAME:- {dataTenth.name}</li>
              <li>AGE:- {dataTenth.age}</li>
            </ul>
          );
        })}
      </React.Fragment>
    );
  }
}

// Exporting App Component
export default App;

// 2. index.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defiend Components
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
