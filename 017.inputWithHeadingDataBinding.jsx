// Code:-

// 1. app.jsx:-

// Importing Necessary React.JS Built-In Components
import React from 'react';

const App = () => {
    return(
        <div>
            <DataBinding/>
        </div>
    );
}

class DataBinding extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ""
        }
    }

    changeData = (event) => {
        this.setState({
            data: event.target.value
        });
    }

    render() {
        return(
            <div>
                <h1>Write Something In The Input Area!!!</h1>
                <input placeholder="Write SomeThing Here!!!" onChange={ this.changeData }/>
                <h1>{this.state.data}</h1>
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
