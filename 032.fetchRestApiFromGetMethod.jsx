// Code:-

// To fetch API using React.JS we have to use a library called as Axios which makes our work more easier.

// Install Axios using this command - npm install axios

// 1. FetchAPI.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Axios Library For Fetching API from Get Request
import axios from "axios";

// Components
class FetchAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h1>Testing Data</h1>
      </React.Fragment>
    );
  }

  componentDidMount() {
    axios // To fetch Restful API use .get() method and inside it give the link of that api and it will fetch that API after the component get loaded.
      .get(
        "https://api1.dev-tonenetworks.com/v1/interests/getSubCategoriesByTitle/WORK" // Dummy Testing API.
      )
      .then((result) => { // then() method is used to tell React.JS what to do after the API is being fetched.
        console.log("Result From API:- ", result); // the Api will result will be stored in the result parameter and using result parameter we will display the api in the console in the object form.
      })
      .catch((error) => {
        console.log("Error From API:- ", error); // if some error occur it will be shown in the console also.
      });
  }
}

// Exporting FetchAPI Component
export default FetchAPI;

// 2. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import FetchAPI from "./FetchAPI";

// Components
const App = () => {
  return (
    <React.Fragment>
      <FetchAPI />
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
