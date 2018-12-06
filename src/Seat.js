import React, { Component } from 'react';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      seat: '',
      row: 0,
      occupied: null,
      premium: null,
      overWing: null
    };
  }

  render() {
    return (
      <div className="seat"></div>
    );
  }
}

export default Seat;
