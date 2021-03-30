import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/Reducer/globalActionType";

// Context API
import { RootContext } from "../../../home/home";

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
      // Using Context API: buat RootContext.Consumer > Arrow Function > Return
      <RootContext.Consumer>
        {(value) => {
          console.log(value, "value");
          return (
            <div className="counter">
              <div className="minus btn" onClick={() => value.dispatchContext({ type: "MINUS_COUNTER" })}>
                -
              </div>
              <input type="text" value={value.state.totalCounter} />
              <div className="plus btn" onClick={() => value.dispatchContext({ type: "PLUS_COUNTER" })}>
                +
              </div>
            </div>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_COUNTER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_COUNTER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Context
export default Counter;
