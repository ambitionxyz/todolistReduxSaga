import { all } from "redux-saga/effects";

import { toDoListSaga } from "../saga/toDoList/toDoList.saga";
export default function* rootSaga() {
  yield all([toDoListSaga()]);
}
