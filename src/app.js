import React, { Component } from 'react';
import './App.css';
import Seats from './data/seats'
import Seat from './Seat';
import FirstClass from './FirstClass';
import BusinessClass from './BusinessClass';
import EconomyClass from './EconomyClass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize JSON data sorted by row # then letter assignment
      data: Seats.sort((a, b) => {
        if(a['row'] === b['row']) {
          return a['seat'] === b['seat'] ? 0 : a['seat'] < b['seat'] ? -1 : 1;
        } else {
          return a['row'] < b['row'] ? -1 : 1;
        }
      })
    };
  }

  createCabin(cabinClass) {
    let seats = [];
    this.state.data.forEach(seat => {
      if(seat.class === cabinClass) {
        seats.push(
          <Seat
            key={`${seat.row}${seat.seat}`}
            className={`${cabinClass.toLowerCase()}-class`}
            class={seat.class}
            seat={seat.seat}
            row={seat.row}
            occupied={seat.occupied}
            premium={seat.premium}
            overWing={seat.overWing}
          />
        );
      }
    });
    // Store number of rows for this cabin; last row - first row + 1
    const firstRow = seats[0].props.row;
    const lastRow = seats[seats.length-1].props.row
    const rowsNum = lastRow - firstRow + 1;
    // Store number of columns for this cabin;
    const letters = [];
    for(let seat of seats) {
      if(seat.props.row === firstRow) {
        letters.push(seat.props.seat);
      }
    }
    return {
      seats: seats,
      rows: rowsNum,
      columns: letters
    };
  }

  render() {
    return (
      <>
        <FirstClass data={this.createCabin('First')}/>
        <BusinessClass data={this.createCabin('Business')}/>
        <EconomyClass data={this.createCabin('Economy')}/>
      </>
    );
  }
}

export default App;
