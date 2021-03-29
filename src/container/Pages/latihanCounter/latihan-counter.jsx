import React, { Component, Fragment } from "react";
import CardCounter from "./cardCounter/cardCounter";
import "./latihan-counter.css";
import { connect } from "react-redux";

class LatihanCounter extends Component {
  // state = {
  //   counter: 0,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     counter: newValue,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <div className="counterContainer">
          <header className="header">
            <div className="nilaiCount">{this.props.counter}</div>
          </header>
          <CardCounter />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.totalCounter,
  };
};

export default connect(mapStateToProps)(LatihanCounter);
