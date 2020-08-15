// Code:-

/*
  What is Routing?
    - Routing means transfering the user from one Page/Component to the other Page/Component sometimes with Reloading and most of the times without reloading.
  
  How to do routing in React.JS?
    -  To do routing in React.JS we have to install React Router library through the npm in our react project.
    
 Commands To install React Router Library:-
  - 1. npm install react-router
  - 2. npm install react-router-dom
  And your library is installed!!!
*/

// 1. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Routing Control Component
import Routing from "./Routing";

// Components
const App = () => {
  return (
    <React.Fragment>
      <Routing />
    </React.Fragment>
  );
};

// Exporting App Component
export default App;


// 2. Routing.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary User-Defined Components
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Error404 from "./Components/Error404";
import Premium from "./Components/Premium";

// Importing Necessary Routing Stuff
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"; // Imported important Routing Components

// Componets
class Routing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter> // Our routing settings should always be in the <BrowerRouter></BrowserRouter>
          <div>
            <nav> // Making a navbar for Routing
              <ul>
                <li>
                  <Link to="/">Home</Link> // <Link></Link means that if here clicked where to go from url 'to' attribute means where to go.
                </li>
                <li>
                  <Link to="/signup">SignUp</Link> // <Link></Link means that if here clicked where to go from url 'to' attribute means where to go.
                </li>
                <li>
                  <Link to="/login">Login</Link> // <Link></Link means that if here clicked where to go from url 'to' attribute means where to go.
                </li>
              </ul>
            </nav>
          </div>
          <Switch> // In <Switch></Switch> component we write our logic about routing.
            <Route exact path="/" component={Home} /> // <Route/> Component is used for routing. exact attibute means that if exactly the same path in the url. component attribute recieves a component in it which will be showed if the url changes.
            <Route exact path="/signup" component={SignUp} /> // <Route/> Component is used for routing. exact attibute means that if exactly the same path in the url. component attribute recieves a component in it which will be showed if the url changes.
            <Route exact path="/signup/premium" component={Premium} /> // <Route/> Component is used for routing. exact attibute means that if exactly the same path in the url. component attribute recieves a component in it which will be showed if the url changes.
            <Route exact path="/login" component={Login} /> // <Route/> Component is used for routing. exact attibute means that if exactly the same path in the url. component attribute recieves a component in it which will be showed if the url changes.
            <Route exact component={Error404} /> // If something write wrong path in the url this Error404 component will be showed.  
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

// Exporting Routing Component
export default Routing;

// 3. Components/Home.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Components
const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Home</h1>
      </div>
    </React.Fragment>
  );
};

// Exporting Home Component
export default Home;


// 4. Components/SignUp.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Components
const SignUp = () => {
  return (
    <React.Fragment>
      <div>
        <h1>SignUp</h1>
      </div>
    </React.Fragment>
  );
};

// Exporting SignUp Component
export default SignUp;

// 5. Components/Login.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Components
const Login = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Login</h1>
      </div>
    </React.Fragment>
  );
};

// Exporting Login Component
export default Login;

// 6. Components/Error404.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Components
const Error404 = () => {
  return (
    <React.Fragment>
      <div>
        <h1>ERROR - 404</h1>
        <h2>SORRY, THE PAGE YOU REQUESTED DOES NOT EXIST!</h2>
      </div>
    </React.Fragment>
  );
};

// Exporting Home Component
export default Error404;

// 7. Components/Premium.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Components
const Premium = () => {
  return (
    <React.Fragment>
      <div>
        <h1>YOU REQUESTED signup/premium</h1>
      </div>
    </React.Fragment>
  );
};

// Exporting Home Component
export default Premium;

// 8. index.jsx:-

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
