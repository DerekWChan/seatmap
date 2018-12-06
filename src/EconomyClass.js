import React, { Component } from 'react';
import Seat from './Seat';

class EconomyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: this.props.data.seats,
      rows: this.props.data.rows,
      columns: this.props.data.columns
    };
  }

  createSeatmap() {

  }

  render() {
    return (
      <Seat className="economy-class" />
    );
  }
}

export default EconomyClass;
