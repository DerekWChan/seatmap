import React, { Component } from 'react';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="seat">
      </div>
    );
  }
}

export default Seat;
