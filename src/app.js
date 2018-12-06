import React, { Component } from 'react';
import './App.css';
import Data from './data/seats'
import Seat from './Seat';
import FirstClass from './FirstClass';
import BusinessClass from './BusinessClass';
import EconomyClass from './EconomyClass';

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
    this.createSeatmap = this.createSeatmap.bind(this);
  }

  createSeatmap() {
    let seatmap = [];
    this.state.data.forEach(seat => {
      seatmap.push(
        <Seat
          key={`${seat.row}${seat.seat}`}
          class={seat.class}
          seat={seat.seat}
          row={seat.row}
          occupied={seat.occupied}
          premium={seat.premium}
          overWing={seat.overWing}
        />
      );
    });
    return seatmap;
  }

  render() {
    return (
      this.createSeatmap()
    );
  }
}

export default App;
