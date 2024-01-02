import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },
  reducers: {},
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export { store };
