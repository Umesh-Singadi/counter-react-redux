import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    valueToAdd: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setValueToAdd(state, action) {
      state.valueToAdd = action.payload;
    },
    addToCount(state) {
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
    },
  },
});

export const { increment, decrement, setValueToAdd, addToCount } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
