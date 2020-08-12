// Code:-

/*
  What is State?
    - The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component.
      In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
      
    - We can only use state in Class Components but the new version of react above v16 comes with the state with functions. 
*/

// State with Class Components

// 1. FollowAbdullahOnGithub.jsx (Component):-

// Importing Necessary React.JS Built-In Components
import React from 'react';

class FollowAbdullahOnGithub extends React.Component {
    constructor() {
        super(); // Calling the constructor of the Parent Class.
        this.state = { // State can be make using this.state Object in the constructor of the class.
            followOrNot: "Follow Abdullah On Githhub Please" // Property of the this.state object.
        }
    }
    followedAbdullah() {
        this.setState({ // this.setState({}); accepts an object inside it and updates the state and re-render the state.
            followOrNot: "Thanks For Following Abdullah!!!" // Updating the followOrNot state.
        });
    }
    render() {
        return(
            <div>
                <h1>{this.state.followOrNot}</h1> // Calling the followOrNot state.
                <button onClick={ () => { this.followedAbdullah() } }>Follow Abdullah Sajjad</button> // To call the state changing function followedAbdullah() in the onClick it must be in the another function but you can call it directly but if when which function you are calling must be a arrow function.
            </div>
        );
    }
}

// Exporting FollowAbdullahOnGithub Component
export default FollowAbdullahOnGithub;

// 2. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

// Importing Necessary User-Defined Components
import FollowAbdullahSajjadOnGithub from './FollowAbdullahOnGithub';

const App = () => {
    return(
        <div>
            <FollowAbdullahSajjadOnGithub/>
        </div>
    );
}

// Exporting App Component
export default App;

// index.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defiend Components
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
