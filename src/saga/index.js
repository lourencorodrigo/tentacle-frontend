import { all } from 'redux-saga/effects';

import { auth } from './auth';
import { state } from './state';

export default function* root() {
  yield [all([...auth, ...state])];
}
