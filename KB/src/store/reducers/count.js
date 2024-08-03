import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 80,
};

const countReducer = createSlice({
  name: "countReducer",
  initialState,
  reducers: {
    plus: (state, action) => {
      console.log(state, action);
      if (action.payload !== undefined) {
        state.count = state.count + action.payload;
      } else {
        state.count++;
      }
    },
    minus: (state, action) => {
      console.log(state, action);
      state.count--;
    },
  },
});

export const { plus, minus } = countReducer.actions;
export default countReducer.reducer;
