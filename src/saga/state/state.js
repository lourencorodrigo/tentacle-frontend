import { takeEvery, put, call } from 'redux-saga/effects';

import { stateService } from '../../services';
import {
  REQUEST_STATE,
  SUCCESS_STATE,
  FAILURE_STATE
} from '../../actions/state';

function* getStates() {
  try {
    const response = yield call(stateService.get);
    yield put({ type: SUCCESS_STATE, data: response.data });
  } catch (error) {
    yield put({ type: FAILURE_STATE, data: error });
  }
}

const state = [takeEvery(REQUEST_STATE, getStates)];

export default state;
