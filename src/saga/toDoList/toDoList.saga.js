import { takeEvery, put, call } from 'redux-saga/effects';

import * as Types from './toDoList.type';
import * as Actions from './toDoList.action';
import API from './toDoList.api';

function* fetchSaga() {
  // console.log('=======> check Data');
  try {
    const response = yield call(API.fetch);
    // console.log(response);
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
    console.log('delete', params);
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
  console.log('=================>patch saga', params);
  try {
    let response = null;
    if (params?.id) {
      response = yield call(API.put, params);
    } else {
      response = yield call(API.post, params);
    }
    console.log('=========> response', response);

    if (response) {
      console.log('=========> response');

      yield put(Actions.patchSuccess());
      console.log('=========> response1');

      // yield put(Actions.fetchRequest());
      // console.log('=========> response2');
    }
  } catch (error) {
    console.log('=========> catch Err', JSON.stringify(error));

    // if (error.response === undefined) return;
    yield put(Actions.fetchFailure(error));
    // yield put(
    //   Actions.patchFailure({
    //     status: status || error?.status,
    //     statusText: data || error?.statusText,
    //   }),
    // );
  }
}

export function* toDoListSaga() {
  yield takeEvery(Types.FETCH_REQUEST, fetchSaga);
  yield takeEvery(Types.PATCH_REQUEST, patchSaga);
  yield takeEvery(Types.GET_REQUEST, getSaga);
  yield takeEvery(Types.DELETE_REQUEST, deleteSaga);
}
