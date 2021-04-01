import React, { Component, Fragment } from "react";

import { GlobalConsumer } from "../../../../context/context";

export class Counter extends Component {
  render() {
    // console.log(this);
    return (
      // Using Context API: buat RootContext.Consumer > Arrow Function > Return
      <Fragment>
        <div className="counter">
          <div className="minus btn" onClick={() => this.props.dispatchContext({ type: "MINUS_COUNTER" })}>
            -
          </div>
          <input type="text" value={this.props.state.totalCounter} />
          <div className="plus btn" onClick={() => this.props.dispatchContext({ type: "PLUS_COUNTER" })}>
            +
          </div>
        </div>
      </Fragment>
    );
  }
}

// Context
export default GlobalConsumer(Counter);
