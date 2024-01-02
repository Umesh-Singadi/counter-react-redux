import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export { store };
export const { increment } = counterSlice.actions;
