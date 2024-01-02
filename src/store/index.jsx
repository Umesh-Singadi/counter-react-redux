import { configureStore } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  setValueToAdd,
  addToCount,
  counterReducer,
} from "./slices/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export { store };
export { increment, decrement, setValueToAdd, addToCount };
