import React, { Component } from "react";
import Counter from "./Counter";

class CardCounter extends Component {
  render() {
    return (
      <div className="card">
        <Counter />
      </div>
    );
  }
}

export default CardCounter;
