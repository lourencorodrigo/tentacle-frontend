import { takeEvery, put, call } from 'redux-saga/effects';

import { loginService } from '../../services';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../../actions/auth';

function* authenticate(action) {
  try {
    const response = yield call(
      loginService.login,
      action.email,
      action.password
    );
    yield put({ type: AUTH_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: AUTH_FAILURE, data: error });
  }
}

const auth = [takeEvery(AUTH_REQUEST, authenticate)];

export default auth;
