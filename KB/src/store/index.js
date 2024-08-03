import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/count";
import arrReducer from "./reducers/arr";

export const store = configureStore({
  reducer: {
    countReducer,
    arrReducer,
  },
});
