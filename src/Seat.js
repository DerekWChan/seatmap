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
      <div className={`seat ${this.state.className}_seat`}>
        {this.state.id}
      </div>
    );
  }
}

export default Seat;
