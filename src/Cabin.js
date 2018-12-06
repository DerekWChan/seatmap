import React, { Component } from 'react';
import './styles/Cabin.css';
import Seat from './Seat';
import Aisle from './Aisle';

// Represents each cabin class in the seatmap
class Cabin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: this.props.data.seats, // All seats of this cabin class; JSON array
      rows: this.props.data.rows, // Number of rows in this cabin; Integer
      columns: this.props.data.columns // Letters assigned to columns in this cabin; String array
    };
    // this.findAisles = this.findAisles.bind(this);
    // this.insertAisles = this.insertAisles.bind(this);
    this.createSeatmap = this.createSeatmap.bind(this);
  }

  // Finds and returns all aisles/missing letters, then inserts empty strings
  // into columns as placeholders to help grid-template-columns render appropriately
  // findAisles() {
  //   let columns = this.state.columns;
  //   const aisles = []; // Store missing letters here
  //   let currCharCode = 'A'.charCodeAt(0); // Keep track of characters checked
  //   for(let i = 0; i < columns.length; i++) {
  //     console.log(String.fromCharCode(currCharCode),currCharCode,columns[i],columns[i].charCodeAt(0));
  //     if(currCharCode !== columns[i].charCodeAt(0)) { // Is this a missing letter?
  //       aisles.push(String.fromCharCode(currCharCode)); // Store that missing letter
  //       // Insert placeholder for aisle in columns; for grid-template-columns
  //       columns.splice(columns.indexOf(columns[i]), 0, '');
  //       i++; // Increment once more to avoid checking what was just inserted
  //     }
  //     currCharCode++;
  //   }
  //   return aisles;
  // }

  // For each aisle/missing letter found, find the corresponding seat that
  // comes after it (if C, find D), then insert an empty object placeholder before it
  // insertAisles() {
  //   this.findAisles().forEach(letter => {
  //     let seats = this.state.seats;
  //     for(let s = 0; s < seats.length; s++) {
  //       if(typeof seats[s] === 'object' && Object.keys(seats[s]).length !== 0) {
  //         // Is this seat letter the one after our aisle/missing letter?
  //         if(seats[s].seat.charCodeAt(0) === letter.charCodeAt(0)+1) {
  //           seats.splice(s, 0, {}); // Insert placeholder for injecting Aisle JSX later
  //           s++; // Increment once more to avoid checking what was just inserted
  //         }
  //       }
  //     }
  //   });
  // }

  // Returns an array of Seat components with props initialized to values
  // from seats array
  createSeatmap() {
    // this.insertAisles();
    return this.state.seats.map(seat => {
      if(Object.keys(seat).length === 0) {
        return (
          <Aisle
            key={`aisle-${new Date.getTime()}`}
          />
        );
      } else {
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
      }
    });
  }


  render() {
    const seatmap = this.createSeatmap();
    return (
      <div
        className="cabin first-class_cabin"
        style={{
          gridTemplateRows: `repeat(${this.state.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${this.state.columns.length}, 1fr)`
        }}>
        {seatmap}
      </div>
    );
  }
}

export default Cabin;
