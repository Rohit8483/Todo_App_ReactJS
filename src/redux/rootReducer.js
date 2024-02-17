import { TodoReducer, DarkModereducer } from "./reducer";
import { combineReducers } from "redux";
export const rootReducers = combineReducers({
  TodoReducer,
  DarkModereducer,
});
