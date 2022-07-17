import { combineReducers } from "redux";

import toDoListReducer from "../saga/toDoList/toDoList.reducer";

const rootReducer = () =>
  combineReducers({
    toDoListReducer,
  });

export default rootReducer;
