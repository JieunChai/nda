import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { BaseActions, BaseType } from 'actions/base';
import * as API from 'APIs';
import { User } from 'models/User';

export function* getToken(action: Action<{ userId: string, pw: string }>){
  try{
    if(action.payload) {
      const body = action.payload;
      const res: AxiosResponse<{refresh: string, access: string}> = yield call (API.tokenGet, body);
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

export function* getRefresh(action: Action<{refresh: string}>){
  try{
    if(action.payload) {
      const body = action.payload;
      const res: AxiosResponse<{access: string}> = yield call (API.tokenRefresh, body);
      const { access } = res.data;
      window.localStorage.setItem('access', access);
      yield put(BaseActions.getRefreshS());
    } else{
      yield put(BaseActions.getRefreshF("NONE PAYLOAD"));
    }
  }catch(err){
    const { data } = err.response;
    yield put(BaseActions.getRefreshF(data.detail));
  }
};

export function* setUser(action: Action<null>){
  try{
    const res: AxiosResponse<User> = yield call(API.accountGet);
    yield put(BaseActions.setUserS(res.data));
  }catch(err){
    yield put(BaseActions.setUserF(err));
  }
};

export function* createUser(action: Action<{userId: string, pw: string}>){
  try{
    if(action.payload){
      const {userId, pw} = action.payload;
      yield call(API.accountCreate, { userId, pw });
      yield put (BaseActions.createUserS());
    }else{
      yield put (BaseActions.createUserF("NONE PAYLOAD"));
    }}catch(err){
    yield put(BaseActions.createUserF(err));
  }
};

export default function* root() {
  yield all([
    takeLatest ( BaseType.GET_TOKEN, getToken),
    takeLatest ( BaseType.GET_REFRESH, getRefresh),
    takeLatest ( BaseType.SET_USER, setUser),
    takeLatest ( BaseType.CREATE_USER, createUser)
  ]);
};
