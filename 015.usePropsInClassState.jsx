// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

class App extends React.Component {
    name = "Abdullah Sajjad";
    render() {
        return(
            <div>
                <Header passedName={this.name}/>
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) { // To access props in state you should pass props parameter to Class Constructor and Its parent Class Constructor.
        super(props);
        this.state = {
            name: this.props.passedName
        }
    }
    name = "Abdullah Sajjad";
    render() {
        return(
            <div>
                {this.state.name}
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
