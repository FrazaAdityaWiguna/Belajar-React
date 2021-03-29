import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./container/home/home";
// import LatihanCounter from "./container/latihanCounter/latihan-counter";
import reportWebVitals from "./reportWebVitals";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

const globalState = {
  totalCounter: 0,
};

// Reducer - Redux
const rootReducer = (state = globalState, action) => {
  if (action.type === "PLUS_COUNTER") {
    return {
      ...state,
      totalCounter: state.totalCounter + 1,
    };
  } else if (action.type === "MINUS_COUNTER") {
    if (state.totalCounter > 0) {
      return {
        ...state,
        totalCounter: state.totalCounter - 1,
      };
    }
  }

  return state;
};

// Store - Redux
const storeCounter = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeCounter}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
