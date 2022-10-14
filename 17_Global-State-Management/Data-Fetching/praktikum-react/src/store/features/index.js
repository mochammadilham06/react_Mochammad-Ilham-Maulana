import { combineReducers } from "@reduxjs/toolkit";
import todo from "./todoSlice";

const rootReducers = combineReducers({
  todo,
});

export default rootReducers;
