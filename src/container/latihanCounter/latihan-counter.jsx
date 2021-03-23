import React, { Component, Fragment } from "react";
import CardCounter from "../cardCounter/cardCounter";
import "./latihan-counter.css";

class LatihanCounter extends Component {
  state = {
    order: 0,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="counterContainer">
          <header className="header">
            <div className="nilaiCount">{this.state.order}</div>
          </header>
          <CardCounter onCounterChange={(value) => this.handleCounterChange(value)} />
        </div>
      </Fragment>
    );
  }
}

export default LatihanCounter;
