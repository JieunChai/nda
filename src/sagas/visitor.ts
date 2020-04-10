import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { VisitorActions } from 'actions/visitor';
import { VisitorAPI } from 'APIs';
import { Visitor } from 'models/Visitor';
import { BaseActions } from 'actions/base';

export function* fetchVisitors(action: Action<null>) {
  try{
    const response: AxiosResponse<{visitors: Visitor[]}> = yield call (VisitorAPI.getVisitors);
    yield put(VisitorActions.getVisitorS(response.data));
  }catch(err){
  yield put(VisitorActions.getVisitorF(err));
};

export function* updateVisitors(action: Action<id:number, name:string, email: string, phone: string, purpose: string, crewname: string, image: string, datetime: string, signature>)

export default function* root() {
  yield all([
    takeLatest ( BaseActions.Type.GET_VISITOR, fetchVisitors),
    takeLatest ( BaseActions.Type.)
  ]);
};