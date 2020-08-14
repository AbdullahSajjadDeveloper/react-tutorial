// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from "react";

// Components
const App = () => {
  return (
    <React.Fragment>
      <HandleForm />
    </React.Fragment>
  );
};

class HandleForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `UserName: ${this.state.username} | Email: ${this.state.email} | UserName: ${this.state.password}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Enter UserName:-</label>
            <input
              type="text"
              placeholder="Abdullah Sajjad"
              onChange={this.handleUsername}
            />
            <br></br>
            <br></br>
            <label>Enter Email Address:-</label>
            <input
              type="email"
              placeholder="example@example.com"
              onChange={this.handleEmail}
            />
            <br></br>
            <br></br>
            <label>Enter Password:-</label>
            <input
              type="password"
              placeholder="Password"
              onChange={this.handlePassword}
            />
            <br></br>
            <br></br>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

// Exporting App Component
export default App;


// 2. index.jsx:-

// Importing Necessary React.JS Built-In Components
import React from "react";
import ReactDOM from "react-dom";

// Importing Necessary User-Defiend Components
import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <App />,
  </React.Fragment>,
  document.getElementById("root")
);
