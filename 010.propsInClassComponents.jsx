// Code:-

// 1. app.js:-

// Importing Necessary Built-In React Components
import React from 'react';

class App extends React.Component {
    abdullahAge = 14;
    noumanAge = 14;
    abubakarAge = 14;
    render() {
        return(
            <div>
                <TellNameAge name="Abdullah Sajjad" age={this.abdullahAge}> // Just passing data to the Component.
                    <p>Name Is Abdullah</p> // Child element of this Component.
                </TellNameAge>
                <TellNameAge name="Nouman Kamran" age={this.noumanAge}>
                    <p>Name Is Abdullah</p>
                </TellNameAge>
                <TellNameAge name="Abu Bakar" age={this.abubakarAge}>
                    <p>Name Is Abdullah</p>
                </TellNameAge>
            </div>
        );
    }
}

class TellNameAge extends React.Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.name} | Age: {this.props.age}</h1> // Access props without parameter and just use this. which refers to the current object.
                {this.props.children} // For the child element.
            </div>
        );
    }
}

// Exporting App Component
export default App;

// 2. index.js:-

// Importing Necessary Built-In React Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defined React Components
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
