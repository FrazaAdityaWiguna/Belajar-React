import React, { Component } from "react";
import "./LifeCycleComp.css";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  loseCount = (newValue) => {
    this.props.countValue(newValue);
  };

  changeCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      this.loseCount(this.state.count)
    );
  };

  render() {
    console.log("render");
    return (
      <button className="BtnLifeCycle" onClick={this.changeCount}>
        Component Button {this.state.count}
      </button>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("this state", this.state);
    console.groupEnd();
    if (nextState.count > 5) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default LifeCycleComp;

// link web: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
