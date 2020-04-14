import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { VisitorType, VisitorActions } from 'actions/visitor';
import * as API from 'APIs';
import { Visitor } from 'models/Visitor';

export function* getVisitor(action: Action<null>) {
  try{
    const res: AxiosResponse<{visitors: Visitor[]}> = yield call (API.getVisitors);
    yield put(VisitorActions.getVisitorS(res.data));
  }catch(err){
  yield put(VisitorActions.getVisitorF(err));
  };
};

// export function* updateVisitors(action: Action<{id: number, name: string, email: string, phone: string, purpose: string, crewname: string, image: string, datetime: string, signature: string}>){
//   try{
//     const res: AxiosResponse<> = yield call (VisitorAPI.updateVisitor);
//     yield put(VisitorActions.updateVisitorS(res.data));
//   }catch(err){
//     yield put(VisitorActions.updateVisitorF(err));
//   }
// };

// export function* createVisitors(action: Action<{id: number, name: string, email: string, phone: string, purpose: string, crewname: string, image: string, datetime: string, signature: string}>){
//   try{
//     const res: AxiosResponse<{}> = yield call (VisitorAPI.createVisitor);

//   }catch(err){
//     yield put(VisitorActions.createVisitorF(err));
//   }
// }

// export function* removeVisitor(action: Action<{id: number}>){
//   try{
//     const res: AxiosResponse<> = yield call (VisitorAPI.removeVisitor);
//   }catch(err){
//     yield put(VisitorActions.removeVisitorF(err));
//   }
// }

export default function* root() {
  yield all([
    takeLatest ( VisitorType.GET_VISITOR, getVisitor),
    // takeLatest ( VisitorActions.Type.UPDATE_VISITOR, updateVisitors),
    // takeLatest ( VisitorActions.Type.CREATE_VISITOR, createVisitors),
    // takeLatest ( VisitorActions.Type.REMOVE_VISITOR, removeVisitors),
  ]);
};