import React, { Component } from 'react';
import './App.css';
import Data from './data/seats'
import Seat from './Seat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize JSON data sorted by row # then letter assignment
      data: Data.sort((a, b) => {
        if(a['row'] === b['row']) {
          return a['seat'] === b['seat'] ? 0 : a['seat'] < b['seat'] ? -1 : 1;
        } else {
          return a['row'] < b['row'] ? -1 : 1;
        }
      })
    };
  }

  render() {
    return (
      <Seat />
    );
  }
}

export default App;
