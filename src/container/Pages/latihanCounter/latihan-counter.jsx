import React, { Component, Fragment } from "react";
import CardCounter from "./cardCounter/cardCounter";
import "./latihan-counter.css";

import { GlobalConsumer } from "../../../context/context";

class LatihanCounter extends Component {
  render() {
    return (
      <Fragment>
        <div className="counterContainer">
          <header className="header">
            <div className="nilaiCount">{this.props.state.totalCounter}</div>
          </header>
          <CardCounter />
        </div>
      </Fragment>
    );
  }
}

export default GlobalConsumer(LatihanCounter);
