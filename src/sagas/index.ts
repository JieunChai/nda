import { all, fork } from 'redux-saga/effects';

import base from './base';
import visitor from './visitor';

export default function* rootSaga() {
  yield all([fork(base), fork(visitor)]);
};