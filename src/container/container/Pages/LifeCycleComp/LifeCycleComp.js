import React, { Component, Fragment } from "react";
import "./LifeCycleComp.css";

// Context
import { GlobalConsumer } from "../../../context/context";
class LifeCycleComp extends Component {
  render() {
    console.log("render");
    return (
      <Fragment>
        <p>LifeCycleCom</p>
        <hr />
        <button className="BtnLifeCycle" onClick={this.changeCount}>
          Component Button {this.props.state.totalCounter}
        </button>
        <hr />
        Total Counter: {this.props.state.totalCounter}
      </Fragment>
    );
  }
}

// Context
export default GlobalConsumer(LifeCycleComp);

// link web: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
