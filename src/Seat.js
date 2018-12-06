import React, { Component } from 'react';
import './styles/Seat.css';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      id: this.props.id,
      class: this.props.class,
      seat: this.props.seat,
      row: this.props.row,
      occupied: this.props.occupied,
      premium: this.props.premium,
      overWing: this.props.overWing
    };
  }

  render() {
    return (
      <button
        className={
          `seat ${this.state.className}_seat
          ${this.state.occupied ? 'occupied' : ''}
          ${this.state.premium ? 'premium' : ''}
          ${this.state.overWing ? 'overwing' : ''}`
        }>
        {this.state.id}
      </button>
    );
  }
}

export default Seat;
