// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from "react";

const App = () => {
  const studentNames = [
    "Abdullah",
    "Siddiq",
    "Nouman",
    "Moazzam",
    "Abu Bakar",
    "Safi",
    "Hamza",
  ];
  const studentAges = [14, 11, 13, 14, 14, 15, 12];
  return (
    <React.Fragment>
      <ListsInFuntion StudentNames={studentNames} />
      <ListsInClass StudentAges={studentAges} />
    </React.Fragment>
  );
};

const ListsInFuntion = (props) => {
  const tellNames = props.StudentNames.map((name) => <li>Name: {name}</li>);
  return (
    <React.Fragment>
      <ul>{tellNames}</ul>
    </React.Fragment>
  );
};

class ListsInClass extends React.Component {
  state = {
    counteries: ["Pakistan", "USA", "Canada"],
  };
  render() {
    const tellAges = this.props.StudentAges.map((age) => <li>Age: {age}</li>);
    const tellCounteries = this.state.counteries.map((country) => (
      <li>Country: {country}</li>
    ));
    return (
      <React.Fragment>
        <ul>{tellAges}</ul>
        <ul>{tellCounteries}</ul>
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
