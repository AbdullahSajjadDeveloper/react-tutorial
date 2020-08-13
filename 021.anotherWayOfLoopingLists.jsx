// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

const App = () => {
    return(
        <React.Fragment>
            <ListsInClass/>
            <ListsInFuntion/>
        </React.Fragment>
    );
}

const ListsInFuntion = () => {
    const ages = [14, 13, 14, 12, 13, 14, 13];
    return(
        <React.Fragment>
            <ul>
                {
                    ages.map((age) => <li>Age: {age}</li>)
                }
            </ul>
        </React.Fragment>
    );
}

class ListsInClass extends React.Component {
    render() {
        const names = ["Abdullah", "Nouman", "Abu Bakar", "Hasham", "Arham", "Moiz", "Ali"];
        return(
            <React.Fragment>
                <ul>
                    {
                        names.map((name) => <li>Name: {name}</li>)
                    }
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
