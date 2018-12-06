import React, { Component } from 'react';
import './styles/Cabin.css';
import Seat from './Seat';

// Represents each cabin class in the seatmap
class Cabin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: this.props.data.seats, // All seats of this cabin class; JSON array
      rows: this.props.data.rows, // Number of rows in this cabin; Integer
      columns: this.props.data.columns // Letters assigned to columns in this cabin; String array
    };
    this.createSeatmap = this.createSeatmap.bind(this);
  }

  // Returns an array of Seat components with props initialized to values
  // from seats array
  createSeatmap() {
    return this.state.seats.map(seat => {
      return (
        <Seat
          key={`${seat.row}${seat.seat}`}
          id={`${seat.row}${seat.seat}`}
          class={seat.class}
          seat={seat.seat}
          row={seat.row}
          occupied={seat.occupied}
          premium={seat.premium}
          overWing={seat.overWing}
        />
      );
    })
  }

  render() {
    return (
      <div
        className="cabin first-class_cabin"
        style={{
          gridTemplateRows: `repeat(${this.state.rows}, 50px)`,
          gridTemplateColumns: `repeat(${this.state.columns.length}, 1fr)`
        }}>
        {this.createSeatmap()}
      </div>
    );
  }
}

export default Cabin;
