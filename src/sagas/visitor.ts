import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { VisitorActions } from 'actions/visitor';
import { VisitorAPI } from 'APIs';
import { Visitor } from 'models/Visitor';
import { getVisitorS } from '../actions/visitor';

export function* getVisitors(action: Action<{}>) {
  try{
    const res: AxiosResponse<{visitors: Visitor[]}> = yield call (VisitorAPI.visitorGet, body);
    yield put(VisitorActions.getVisitorS());
  }else{
    yield put(VisitorActions.getVisitorF("NONOE PAYLOAD"));
  }
  
}
