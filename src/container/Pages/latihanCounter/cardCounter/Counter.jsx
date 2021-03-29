import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Counter extends Component {
  // state = {
  //   counter: 0,
  // };

  // handleCounterChanges = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChanges(this.state.order);
  //     }
  //   );
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChanges(this.state.order);
  //       }
  //     );
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="counter">
          <div className="minus btn" onClick={this.props.handleMinus}>
            -
          </div>
          <input type="text" value={this.props.counter} />
          <div className="plus btn" onClick={this.props.handlePlus}>
            +
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_COUNTER" }),
    handleMinus: () => dispatch({ type: "MINUS_COUNTER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
