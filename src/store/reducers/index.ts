import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./bookReducer/bookSlice";

export const rootReducer = combineReducers({
  book: bookReducer,
});
