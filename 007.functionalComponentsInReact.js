// Code

/*
  What are functional Components?
    - 1) Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.
    - 2) Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.
    - 3) React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
    - 4) There is no render method used in functional components.
    - 5) These are mainly responsible for UI and are typically presentational only (For example, a Button component).
    - 6) Functional components can accept and use props.
    - 7) Functional components should be favored if you do not need to make use of React state.
*/

// 1. src > websiteComponents/Header.js:-

// Importing React Necessary Built-In Components
import React from 'react'; // Importing React component from 'react' location

const Header = () => { // Made a Header Component.
    return( // Returend JSX
        <div>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
}

export default Header; // We have to export the component to use it in other components.

// 2. app.js:-

// Importing React Necessary Built-In Components
import React from 'react';

// Importing User Defined Components
import Header from './websiteComponents/headerComponent/Header'; // Imported Header Component.

const App = () => {
    return(
        <div>
            <Header/> // Used Header Component.
        </div>
    );
}

export default App;

// 3. index.js:-

// Importing React Necessary Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing User Defined Components
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
