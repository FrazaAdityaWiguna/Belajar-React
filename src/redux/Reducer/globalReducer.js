import ActionType from "./globalActionType";

const globalState = {
  totalCounter: 0,
};

// Reducer - Redux
const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.PLUS_COUNTER) {
    return {
      ...state,
      totalCounter: state.totalCounter + 1,
    };
  } else if (action.type === ActionType.MINUS_COUNTER) {
    if (state.totalCounter > 0) {
      return {
        ...state,
        totalCounter: state.totalCounter - 1,
      };
    }
  }

  return state;
};

export default rootReducer;
