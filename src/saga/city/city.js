import { takeEvery, put, call } from 'redux-saga/effects';

import { stateService } from '../../services';
import {
  FAILURE_STATE_CITIES,
  REQUEST_STATE_CITIES,
  SUCCESS_STATE_CITIES
} from '../../actions/city';

function* getCities(action) {
  try {
    const response = yield call(stateService.getCities, action.idState);
    yield put({ type: SUCCESS_STATE_CITIES, data: response.data });
  } catch (error) {
    yield put({ type: FAILURE_STATE_CITIES, data: error });
  }
}

const state = [takeEvery(REQUEST_STATE_CITIES, getCities)];

export default state;
