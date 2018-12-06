import React, { Component } from 'react';
import './styles/Seat.css';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id, // Unique identifier for seat; row # + letter
      class: this.props.class, // Cabin class
      seat: this.props.seat, // Letter assignment
      row: this.props.row, // Row number
      occupied: this.props.occupied, // Is it occupied?
      premium: this.props.premium, // Is it premium?
      overWing: this.props.overWing // Is it near an overwing exit?
    };
  }

  render() {
    return (
      <button
        className={
          `seat ${this.state.class.toLowerCase()}-class_seat` +
          `${this.state.occupied ? ' occupied' : ''}` +
          `${this.state.premium ? ' premium' : ''}` +
          `${this.state.overWing ? ' overwing' : ''}`
        }>
        {this.state.id}
      </button>
    );
  }
}

export default Seat;
