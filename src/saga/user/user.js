import { takeEvery, put, call } from 'redux-saga/effects';

import { userService } from '../../services';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../../actions/user';

function* create(action) {
  try {
    const response = yield call(userService.create, action.user);
    yield put({ type: USER_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: USER_FAILURE, data: error });
  }
}

const user = [takeEvery(USER_REQUEST, create)];

export default user;
