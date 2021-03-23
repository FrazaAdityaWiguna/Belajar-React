import React, { Component } from "react";

class CardCounter extends Component {
  state = {
    order: 0,
  };

  handleCounterChanges = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChanges(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChanges(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="counter">
          <div className="minus btn" onClick={this.handleMinus}>
            -
          </div>
          <input type="text" value={this.state.order} />
          <div className="plus btn" onClick={this.handlePlus}>
            +
          </div>
        </div>
      </div>
    );
  }
}

export default CardCounter;
