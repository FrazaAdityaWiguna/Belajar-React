const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 19,
};

// Reducer - untuk mengupdate value pada store
const rootReducer = (state = initialState, action) => {
  console.log(action, "action");

  // ELSE-IF
  // if (action.type === "ADD_AGE") {
  //   return {
  //     // harus dijadikan immutable(triple dot) agar state awal tidak diremove
  //     ...state,
  //     age: state.age + 1,
  //   };
  // } else if (action.type === "CHANGE_VALUE") {
  //   return {
  //     // harus dijadikan immutable(triple dot) agar state awal tidak diremove
  //     ...state,
  //     value: state.value + action.newValue,
  //   };
  // }
  // return state;

  // SWITCH
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

// Store -untuk menyimpan value
const store = createStore(rootReducer);
console.log(store.getState(), "store");

// Subcription - proses pemanggilan store yang dibutuhkan
store.subscribe(() => {
  console.log(store.getState(), "subscribe");
});

// Dispatch / Dispathing Action / Action - proses pemanggilan Reducer
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 10 });
console.log(store.getState(), "dispatch");
