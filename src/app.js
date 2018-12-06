import React, { Component } from 'react';
import Seats from './data/seats'
import Seat from './Seat';
import Cabin from './Cabin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize JSON data sorted by row # then letter assignment
      data: Seats.sort((a, b) => {
        if(a.row === b.row) {
          return a.seat === b.seat ? 0 : a.seat < b.seat ? -1 : 1;
        } else {
          return a.row < b.row ? -1 : 1;
        }
      })
    };
    this.createCabin = this.createCabin.bind(this);
  }

  // Returns an object with seats, rows, and columns data to be passed onto
  // cabin class components as props
  createCabin(cabinClass) {
    // Store filtered seats (by cabin class) here
    const seats = this.state.data.filter(seat => seat.class === cabinClass);
    // Store number of rows for this cabin; last row - first row + 1
    const firstRow = seats[0].row;
    const lastRow = seats[seats.length-1].row
    const rowsNum = lastRow - firstRow + 1;
    // Store number of columns for this cabin;
    const letters = [];
    for(let seat of seats) {
      if(seat.row === firstRow) {
        letters.push(seat.seat);
      }
    }
    // Bundle up cabin data to pass
    return {
      seats: seats,
      rows: rowsNum,
      columns: letters
    };
  }

  render() {
    return (
      <>
        <Cabin data={this.createCabin('First')}/>
        <Cabin data={this.createCabin('Business')}/>
        <Cabin data={this.createCabin('Economy')}/>
      </>
    );
  }
}

export default App;
