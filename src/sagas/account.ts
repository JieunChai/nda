import { all, call, put, takeLatest} from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { BaseActions } from 'actions/base';
import { AccountAPI, TokenAPI } from 'APIs';

export function* getToken(action: Action<{ userId: string, pw: string }>){
  try{
    if(action.payload) {
      const body = action.payload;
      const res: AxiosResponse< {refresh: string, access: string}> = yield call (TokenAPI.tokenGet, body);
      const { access, refresh } = res.data;
      window.localStorage.setItem('access', access);
      window.localStorage.setItem('refresh', refresh);
      yield put(BaseActions.getTokenS());
    } else{
      yield put(BaseActions.getTokenF("NONE PAYLOAD"));
    }
  }catch(err){
    const { data } = err.response;
    yield put(BaseActions.getTokenF(data.detail));
  }
};

export function* createUser(action: Action<{userId: string, pw: string}>){
  try{
    if(action.payload){
      const { userId, pw } = action.payload;
      yield call(
        AccountAPI.
      )
    }
  }
}

export default function* root() {
  yield all({
    takeLatest<string> (BaseActions.Type.GET_TOKEN, getToken),
    takeLatest<string> (BaseActions.Type.CREATE_USER, createUser),
  });
};