import { all, fork } from 'redux-saga/effects';

import crew from './crew';
import visitor from './visitor';

export default function* rootSaga() {
  yield all([fork(crew), fork(visitor)]);
};