import { combineReducers } from "redux";
import todos from "./todoSlice";

const reducers = combineReducers({
  todos,
});

export default reducers;
