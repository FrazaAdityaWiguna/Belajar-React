import React, { Component } from "react";
import "./Hooks.css";

class Hooks extends Component {
  state = {
    count: 0,
  };

  onUpdate = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="container-hooks">
        <p>Nilai Sekarang: {this.state.count}</p>
        <button onClick={this.onUpdate}>Update Value</button>
      </div>
    );
  }
}

export default Hooks;
