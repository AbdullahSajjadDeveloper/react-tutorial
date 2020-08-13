// Code:-

/*
  In this tutorial we will be going to iterate Lists in React.JS using map(); function.
*/

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

const App = () => {
    return(
        <React.Fragment>
            <ListsInFuntion/>
            <ListsInClass/>
        </React.Fragment>
    );
}

const ListsInFuntion = () => {
    const ages = [14, 13, 14, 12, 13, 14];
    const iterateAges = ages.map(function(age) { // To iterate a list we should use the map(); method which accepts a parameter inside it.
        return <li>{age}</li>; // Returning each element with <li></li>;
    });
    return(
        <React.Fragment>
            <ul>
                {iterateAges} // Calling it.
            </ul>
        </React.Fragment>
    );
}

class ListsInClass extends React.Component {
    render() {
        const names = ["Abdullah", "Nouman", "Abu Bakar", "Hasham", "Arham", "Moiz"];
        const iterateNames = names.map(function(name) { // To iterate a list we should use the map(); method which accepts a parameter inside it.
            return <li>{name}</li>; // Returning each element with <li></li>;
        });
        return(
            <React.Fragment>
                <ul>
                    {iterateNames} // Calling it.
                </ul>
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
