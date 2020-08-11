// Code:-

/*
  What is JSX (JavaScript and XML)?
    - It is an Latest and Fastest alternative to the native HTML. It is used by React.JS by default in our components.
  
  JSX Attributes:-
    - The rule fro JSX attributes it that if the attribute is combined of two word write them in camelCasing.
*/

// 1. app.js (Component):-

// Importing Necessary React.JS Components.
import React from 'react'; // Imported React from 'react' component.

// Defining Variables
const name = 'Abdullah Sajjad';

// Defining Function For onClick
const showGreet = () => { // Defined an arrow function alternative to normal function
  alert('hello world from React.JS world');
}

// Defining JSX
const websiteName = <h1>Abdullah Sajjad</h1>; // This is also an JSX Element.

// DefiningFunction For onChange and onFocus
const logging = () => {
  console.log('Input Changes!!!');
}

// Components
function App() { // This is actual main App component.
  // Defining Variables
  let age = 14;
  return( // Returning JSX
    <div>
      <h1 id="heading" className="headingWeb">Abdullah's React Website</h1>
      <h1>Name: {name} | Age: {age}</h1> // To use JavaScript variables and function in JSX use {} (Expressions).
      <button onClick={showGreet}>Click Me!</button>
      {websiteName} // Called JSX
      <input onChange={logging} onFocus={logging}/>
    </div>
  );
}

// Exporting App Component
export default App; // To call this App component in other components and files we have to export it as default.

// 2. index.js (Main File):-

// Importing React Necessary Built-In Components
import React from 'react'; // Imported React from 'react' component.
import ReactDOM from 'react-dom'; // Imported ReactDOM from 'react-dom' component.

// Importing User Defined Components
import App from './App'; // Imported App from './App' component.

ReactDOM.render( // It renders the Virtual DOM.
  <App/>, // Firsr Attribute of this function is what to show, for now it is a component but you can also render simple JSX like this <h1>JSX</h1>.
  document.getElementById('root') // Second Attribute is where to show and in my case I want to show it in a div whose id is root and it is present in public/index.html file.
);

// 3. index.html:-

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>Error: You Need To Enable JavaScript To Run This Website!</noscript> // It will be shown if you have disabled JavaScript in your browser.
    <div id="root"></div>

  </body>
</html>
