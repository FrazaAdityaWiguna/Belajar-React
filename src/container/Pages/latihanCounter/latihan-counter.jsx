import React, { Component, Fragment } from "react";
import CardCounter from "./cardCounter/cardCounter";
import "./latihan-counter.css";
import { connect } from "react-redux";
import { RootContext } from "../../home/home";

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
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <div className="counterContainer">
                <header className="header">
                  <div className="nilaiCount">{value.state.totalCounter}</div>
                </header>
                <CardCounter />
              </div>
            </Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// Redux

// const mapStateToProps = (state) => {
//   return {
//     counter: state.totalCounter,
//   };
// };

// export default connect(mapStateToProps)(LatihanCounter);

export default LatihanCounter;
