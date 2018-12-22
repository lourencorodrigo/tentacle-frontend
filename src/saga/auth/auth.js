import { takeEvery, put, call } from 'redux-saga/effects';

import { loginService } from '../../services';
import {
  REQUEST_AUTHENTICATE,
  SUCCESS_AUTHENTICATE,
  FAILURE_AUTHENTICATE
} from '../../actions/auth';

function* authenticate(action) {
  try {
    const response = yield call(
      loginService.login,
      action.email,
      action.password
    );
    yield put({ type: SUCCESS_AUTHENTICATE, data: response.data });
  } catch (error) {
    yield put({ type: FAILURE_AUTHENTICATE, data: error });
  }
}

const auth = [takeEvery(REQUEST_AUTHENTICATE, authenticate)];

export default auth;
