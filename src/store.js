import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + (action.payload || 1);
    case "DECREASE":
      return state - (action.payload || 1);
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
