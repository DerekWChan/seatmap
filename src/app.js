import React, { Component } from 'react';
import './App.css';
import Data from './data/seats'
import Seat from './Seat';

class App extends Component {
  render() {
    return (
      <Seat />
    );
  }
}

export default App;
