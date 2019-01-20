import { takeEvery, put, call } from 'redux-saga/effects';

import { stateService } from '../../services';
import {
  STATE_REQUEST,
  STATE_SUCCESS,
  STATE_FAILURE,
  STATE_REQUEST_CITIES,
  STATE_SUCCESS_CITIES,
  STATE_FAILURE_CITIES
} from '../../actions/state';

function* getStates() {
  try {
    const response = yield call(stateService.get);
    yield put({ type: STATE_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: STATE_FAILURE, data: error });
  }
}

function* getCities(action) {
  try {
    const response = yield call(stateService.getCities, action.idState);
    yield put({ type: STATE_SUCCESS_CITIES, data: response.data });
  } catch (error) {
    yield put({ type: STATE_FAILURE_CITIES, data: error });
  }
}

const state = [
  takeEvery(STATE_REQUEST, getStates),
  takeEvery(STATE_REQUEST_CITIES, getCities)
];

export default state;
