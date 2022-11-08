import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "../reducers/features/hamburger/hamburgerSlice";

export default configureStore({
  reducer: {
    hamburger: hamburgerReducer,
  },
});
