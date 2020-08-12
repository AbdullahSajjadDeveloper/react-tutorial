// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

class App extends React.Component {
    preventIt = (event) => {
        event.preventDefault(); // It prevents from happening.
        console.log('Prevented!!!');
    }
    render() {
        return(
            <div>
                <a href="https://www.google.com" target="_google" onClick={this.preventIt}>Google.com</a>
            </div>
        );
    }
}

// Exporting App Component
export default App;

// 2. index.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defiend Components
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
