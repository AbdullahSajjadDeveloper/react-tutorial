// Code:-

/*
  What are Class Components?
    - 1) Class components make use of ES6 class and extend the Component class in React.
    - 2) Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
    - 3) React lifecycle methods can be used inside class components (for example, componentDidMount).
    - 4) You pass props down to class components and access them with this.props
    
  Changed file extension from .js to .jsx?
    - During woking in React.JS we can use both .js and .jsx file to do the JavaScript and JSX coding but using .jsx it is more modern and faster.
*/

// 1. app.jsx:-

// Importing Necessary React Built-In Components
import React from 'react'; // Imported React component from 'react';

class App extends React.Component { // To use class based components it should be extending/inheriting React.Component
    title = "React.JS Class Components";

    render() { // render(); Renders the JSX in Class Component this feature is not available in Functional Components.
        return(
            <div>
                <h1>{this.title}</h1>
            </div>
        );
    }
}

export default App;

// 2. index.jsx:-

// Importing Necessary React Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing User-Defined Components
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
