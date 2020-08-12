// Code:-

// To understand about this tutorial first read previous tutorial 013.

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.fun2 = this.fun2.bind(this); // binding this to broad its spectrum.
        this.fun4 = this.fun4.bind(this); // // binding this to broad its spectrum.
        this.state = {
            name: "Abdullah Sajjad"
        }
    }
    fun1() {
        console.log('This is Abdullah', this);
    }

    fun2() {
        console.log('This is Abdullah', this);
    }

    fun3() {
        console.log(this.state.name);
    }

    fun4() {
        console.log(this.state.name);
    }

    fun5 = () => {
        console.log('This is Abdullah', this);
        console.log(this.state.name);
    }
    render() {
        return(
            <div>
                <button onClick={this.fun1}>Hit Me Fun1!!!</button>
                <button onClick={this.fun2}>Hit Me Fun2!!!</button>
                <button onClick={this.fun3}>Hit Me Fun3!!!</button>
                <button onClick={this.fun4}>Hit Me Fun4!!!</button>
                <button onClick={this.fun5}>Hit Me Fun5!!!</button>
            </div>
        );
    }
}

// Exporting App Component
export default App;

// 2. index.js:-

// Importing Necessary React.JS Built-In Components
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Necessary User-Defiend Components
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
