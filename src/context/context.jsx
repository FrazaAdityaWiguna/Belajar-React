import React, { Component, createContext } from "react";

// PROVIDER
// Context API
const RootContext = createContext();
// Tempat agat bisa Context dibaca secara global
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {
  return class ParentComp extends Component {
    state = {
      totalCounter: 2,
    };

    dispatchContext = (action) => {
      if (action.type === "PLUS_COUNTER") {
        return this.setState({
          totalCounter: this.state.totalCounter + 1,
        });
      } else if (action.type === "MINUS_COUNTER") {
        if (this.state.totalCounter > 0) {
          return this.setState({
            totalCounter: this.state.totalCounter - 1,
          });
        }
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatchContext: this.dispatchContext,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// CONSUMER
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
