import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WaterLink</h1>
        </header>
        <p className="App-intro">
          Let's get started
        </p>
        <div className="Slider">
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
