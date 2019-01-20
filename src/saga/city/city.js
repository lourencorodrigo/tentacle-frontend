import { takeEvery, put, call } from 'redux-saga/effects';

import { stateService } from '../../services';
import {
  STATE_FAILURE_CITIES,
  STATE_REQUEST_CITIES,
  STATE_SUCCESS_CITIES
} from '../../actions/city';

function* getCities(action) {
  try {
    const response = yield call(stateService.getCities, action.idState);
    yield put({ type: STATE_SUCCESS_CITIES, data: response.data });
  } catch (error) {
    yield put({ type: STATE_FAILURE_CITIES, data: error });
  }
}

const state = [takeEvery(STATE_REQUEST_CITIES, getCities)];

export default state;
