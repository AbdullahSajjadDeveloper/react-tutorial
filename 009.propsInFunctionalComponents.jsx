// Code:-

/*
  What are Props?
    - “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
       But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child).
*/

// 1. app.jsx:-

// Importing Necessary Built-In React Components
import React from 'react';

const App = () => {
    let abdullahAge = 14;
    let noumanAge = 13;
    let abubakarAge = 14;
    return(
        <div>
            <TellNameAge name="Abdullah Sajjad" age={abdullahAge}> // Passed Data In The Component (TellNameAge).
                <p>Hello, Abdullah! This is React.JS</p> // Child of Component (TellNameAge).
            </TellNameAge>
            <TellNameAge name="Nouman Kamran" age={noumanAge}> // Passed Data In The Component (TellNameAge).
                <p>Hello, Nouman! This is React.JS</p> // Child of Component (TellNameAge).
            </TellNameAge>
            <TellNameAge name="Abu Bakar" age={abubakarAge}> // Passed Data In The Component (TellNameAge).
                <p>Hello, Abu Bakar! This is React.JS</p> // Child of Component (TellNameAge).
            </TellNameAge>
        </div>
    );
}

const TellNameAge = (props) => { // To get the passed data we have to use props
    let name = props.name;
    let age = props.age;
    return(
        <div>
            <h1>Name: {name} | Age: {age}</h1> // using props values here
            {props.children} // means that <p></p> tags.
        </div>
    );
}

export default App;

// 2. index.jsx:-

// Importing Necessary Built-In React Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defined React Components
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
