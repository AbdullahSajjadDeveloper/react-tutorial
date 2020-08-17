// Code:-

// 1. FetchApiUsingPost.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Axios Library For Fetching API from Get Request
import axios from "axios";

// Components
class FetchAPIUsingPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  handleTitleAndBody = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state) // Appending state object in the API.
      .then((response) => {
        console.log("API Response:- ", response);
      })
      .catch((error) => {
        console.log("API Error:- ",  error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Enter Post</h1>
            <label>Title Of Post:- </label>
            <br></br>
            <br></br>
            <input
              name="title"
              type="text"
              placeholder="Enter The Title Of Post"
              onChange={this.handleTitleAndBody}
            />
            <br></br>
            <br></br>
            <label>Title Of Body Of Post:- </label>
            <br></br>
            <br></br>
            <input
              name="body"
              type="text"
              placeholder="Enter The Body Of Post"
              onChange={this.handleTitleAndBody}
            />
            <br></br>
            <br></br>
            <button type="submit">Add Post</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

// Exporting FetchAPI Component
export default FetchAPIUsingPost;

// 2. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import FetchAPIUsingPost from "./FetchAPIUsingPost";

// Components
const App = () => {
  return (
    <React.Fragment>
      <FetchAPIUsingPost />
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
