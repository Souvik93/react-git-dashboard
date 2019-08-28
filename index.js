import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Home} from './Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'User'
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Hello name={this.state.name} />
        <h6>
          Start searching with Git User Name.... :)
        </h6>
        <Home/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
