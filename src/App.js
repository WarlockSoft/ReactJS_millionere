import React, { Component } from 'react';
import './App.css';
import Stages from './Stages';
import Gameplay from './Gameplay';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Stages />
          <Gameplay />
      </div>
    );
  }
}

export default App;
