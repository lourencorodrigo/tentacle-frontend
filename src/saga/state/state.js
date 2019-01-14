import { takeEvery, put, call } from 'redux-saga/effects';

import { stateService } from '../../services';
import {
  REQUEST_STATE,
  SUCCESS_STATE,
  FAILURE_STATE,
  REQUEST_STATE_CITIES,
  SUCCESS_STATE_CITIES
} from '../../actions/state';

function* getStates() {
  try {
    const response = yield call(stateService.get);
    yield put({ type: SUCCESS_STATE, data: response.data });
  } catch (error) {
    yield put({ type: FAILURE_STATE, data: error });
  }
}

function* getCities(action) {
  try {
    const response = yield call(stateService.getCities, action.idState);
    yield put({ type: SUCCESS_STATE_CITIES, data: response.data });
  } catch (error) {
    yield put({ type: FAILURE_STATE, data: error });
  }
}

const state = [
  takeEvery(REQUEST_STATE, getStates),
  takeEvery(REQUEST_STATE_CITIES, getCities)
];

export default state;
