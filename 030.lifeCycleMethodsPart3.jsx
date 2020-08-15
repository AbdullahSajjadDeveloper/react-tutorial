// Code:-

// 1. LifeCycleMethods.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfQuantity: 1,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps() is Called.");
    return null;
  }
  addOneMore = () => {
    this.setState({
      noOfQuantity: (this.state.noOfQuantity = this.state.noOfQuantity + 1),
    });
  };
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <h1>{this.state.noOfQuantity}</h1>
        <button onClick={this.addOneMore}>Add One More</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) { // This function will be run every time when something cahnges in the component.
    console.log("componentDidUpdate() is Called. Component Updated.");
  }
  componentDidMount() {
    console.log("componentDidMount() is Called.");
  }
}

// Exporting LifeCycleMethods Component
export default LifeCycleMethods;

// 2. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import LifeCycleMethods from "./LifeCycleMethods";

// Components
const App = () => {
  return (
    <React.Fragment>
      <LifeCycleMethods />
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
