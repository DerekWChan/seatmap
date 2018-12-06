import React, { Component } from 'react';
import './styles/EconomyClass.css';
import Seat from './Seat';

class EconomyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: this.props.data.seats,
      rows: this.props.data.rows,
      columns: this.props.data.columns
    };
    this.createSeatmap = this.createSeatmap.bind(this);
  }

  createSeatmap() {
    return (
      <div
        className="cabin economy-class_cabin"
        style={{
          gridTemplateRows: `repeat(${this.state.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${this.state.columns.length}, 1fr)`
        }}>
        {this.state.seats}
      </div>
    );
  }

  render() {
    return (
      this.createSeatmap()
    );
  }
}

export default EconomyClass;
