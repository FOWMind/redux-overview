import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: (state = 0, action) => {
    switch (action.type) {
      case "INCREASE":
        return state + (action.payload || 1);
      case "DECREASE":
        return state - (action.payload || 1);
      case "CHANGE":
        return action.payload;
      default:
        return state;
    }
  },
});
