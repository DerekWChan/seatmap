import React, { Component } from 'react';
import Seat from './Seat';

class FirstClass extends Component {
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
    console.log(this.state.columns);
    return (
      this.state.seats
    );
  }
}

export default FirstClass;
