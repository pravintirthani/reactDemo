import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home'
export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
      </div>
    );
  }

}
