import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: ["hello world"],
};

const arrReducer = createSlice({
  name: "arrReducer",
  initialState,
  reducers: {
    pushItem: (state, action) => {
      state.arr.push(action.payload);
    },
    popItem: (state) => {
      state.arr.pop();
    },
  },
});

export const { pushItem, popItem } = arrReducer.actions;
export default arrReducer.reducer;
