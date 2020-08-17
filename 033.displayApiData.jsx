// Code:-

// 1. FetchAPI.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Axios Library For Fetching API from Get Request
import axios from "axios";

// Importing CSS
import Styling from "./FetchAPI.module.css";

// Components
class FetchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingApiData: [],
      haveErrorOrNot: "",
      loading: <center><div className={Styling.loader}></div></center>
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/") // Api Link
        .then((response) => {
          this.setState({
            fetchingApiData: response.data, // .data comes with the data in it.
          });
        })
        .catch((error) => {
          this.setState({
            haveErrorOrNot: error,
          });
        });
    }, 3000);
  }
  render() {
    const { fetchingApiData, haveErrorOrNot, loading } = this.state; // Object Destructuring.
    return (
      <React.Fragment>
        <div>
          <center><h2>Tata, Fetched API from https://jsonplaceholder.typicode.com/todos/ using AXIOS</h2></center>
          {fetchingApiData.length > 1 // Applied Ternery Operation
            ? fetchingApiData.map((fetchedData) => {
                return (
                  <ul key={fetchedData.id}>
                    <li>ID:- {fetchedData.id}</li>
                    <li>User ID:- {fetchedData.userId}</li>
                    <li>Title:- {fetchedData.title}</li>
                  </ul>
                );
              })
            : loading }
        </div>
        <div>{haveErrorOrNot ? <h1>{haveErrorOrNot}</h1> : null}</div> // Ternary Operation
      </React.Fragment>
    );
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

// 4. FetchApi.module.css:-

.loader {
margin-top: 190px;
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid blueviolet;
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
}
  
/* Safari */
@-webkit-keyframes spin {
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
}
  
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
