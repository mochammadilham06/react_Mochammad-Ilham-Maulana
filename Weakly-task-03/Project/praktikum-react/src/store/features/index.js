import { combineReducers } from "@reduxjs/toolkit";
import user from "./user/userSlice";

export const rootReducer = combineReducers({
  user,
});
