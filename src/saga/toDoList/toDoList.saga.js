import { takeEvery, put, call } from 'redux-saga/effects';

import * as Types from './toDoList.type';
import * as Actions from './toDoList.action';
import API from './toDoList.api';

function* fetchSaga({ params }) {
  try {
    const response = yield call(API.fetch, params);

    if (response) {
      yield put(Actions.fetchSuccess(response));
    }
  } catch (error) {
    const { data, status } = error.response;
    yield put(
      Actions.fetchFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      }),
    );
  }
}

function* getSaga({ params }) {
  try {
    const response = yield call(API.get, params?.id);
    if (response) {
      yield put(Actions.getSuccess(response));
    }
  } catch (error) {
    const { data, status } = error.response;
    yield put(
      Actions.getFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      }),
    );
  }
}

function* deleteSaga({ params }) {
  try {
    const response = yield call(API.delete, params);
    if (response) {
      yield put(Actions.deleteSuccess(response));
      yield put(Actions.fetchRequest());
    }
  } catch (error) {
    const { data, status } = error.response;
    yield put(
      Actions.deleteFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      }),
    );
  }
}
function* patchSaga({ params }) {
  // function* patchSaga({ params, callback }) {
  console.log(params);
  try {
    let response = null;
    if (params?.id) {
      response = yield call(API.put, params);
    } else {
      response = yield call(API.post, params);
    }

    if (response) {
      yield put(Actions.patchSuccess(response));
      // callback();
    }
  } catch (error) {
    const { data, status } = error.response;
    yield put(
      Actions.patchFailure({
        status: status || error?.status,
        statusText: data || error?.statusText,
      }),
    );
  }
}

export function* toDoListSaga() {
  yield takeEvery(Types.FETCH_REQUEST, fetchSaga);
  yield takeEvery(Types.PATCH_REQUEST, patchSaga);
  yield takeEvery(Types.GET_REQUEST, getSaga);
  yield takeEvery(Types.DELETE_REQUEST, deleteSaga);
}