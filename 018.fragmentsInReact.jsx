// Code:-

/*
  What are React Fragments?
    - React Fragments are used for grouping the HTML elements without having multiple nodes.
*/

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

const App = () => {
    return(
        <React.Fragment> // Insted of <div></div>, we are using React Fragments without having multiple nodes.
            <h1>This Is a Functional Component!!!</h1>
            <p>This Is a Functional Component!!!</p>
            <Website/>
        </React.Fragment>
    );
}

class Website extends React.Component {
    render() {
        return(
            <React.Fragment> // Insted of <div></div>, we are using React Fragments without having multiple nodes.
                <h1>This is a Class Component!!!</h1>
                <p>This is a Class Component!!!</p>
            </React.Fragment>
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
