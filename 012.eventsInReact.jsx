// Code:-

/*
  What is meant by Event?
    - Event means do something if user interacts with something on the website.
*/

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            followOrNot: "Follow Abdullah On Githhub Please",
            hoverOrNot: "Hover It Please!!!"
        }
    } 
    followedAbdullah() {
        this.setState({
            followOrNot: "Thanks For Following Abdullah!!!"
        });
    }

    hoveredHeading() {
        this.setState({
            hoverOrNot: "You Hovered It!!!"
        });
    }
    render() {
        return(
            <div>
                <h1>{this.state.followOrNot}</h1>
                <button onClick={ () => { this.followedAbdullah() } }>Follow Abdullah Sajjad</button> // onClick is a Event
                <input onChange={ (event) => { // onChange is a Event
                    console.log(event.target.value);
                }} placeholder="On Change"/>
                <input onFocus={ (event) => { // onFocus is a Event
                    console.log(event.target.value);
                }} placeholder="On Focus"/>
                <h1 onMouseEnter={ () => { this.hoveredHeading() } }>{this.state.hoverOrNot}</h1> // onMouseEnter is a Event
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
