import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Corey's Awesome App!</h1>
        </header>
        <p className="App-intro">
          Don't forget that you can edit this screen using <code>my-app/src/App.js</code>
        </p>
      </div>
    );
  }
}

export default App;
