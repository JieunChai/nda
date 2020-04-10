import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { BaseActions } from 'actions/base';
import { TokenAPI, AccountAPI } from 'APIs';
import { User } from 'models/User';

export function* getToken(action: Action<{ userId: string, pw: string }>){
  try{
    if(action.payload) {
      const body = action.payload;
      const res: AxiosResponse<{refresh: string, access: string}> = yield call (TokenAPI.tokenGet, body);
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
      const res: AxiosResponse<{access: string}> = yield call (TokenAPI.tokenRefresh, body);
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

export function* getUserInfo(action: Action<null>){
  try{
    const response: AxiosResponse<User> = yield call(AccountAPI.accountGet);
    yield put(BaseActions.setUserS(response.data));
  }catch(err){
    yield put(BaseActions.setUserF(err));
  }
};

export function* createUser(action: Action<{userId: string, pw: string}>){
  try{
    if(action.payload){
      const {userId, pw} = action.payload;
      yield call(
        AccountAPI.accountCreate, { userId, pw }
      );
      yield put (BaseActions.createUserS());
    }else{
      yield put (BaseActions.createUserF("NONE PAYLOAD"));
    }
  }catch(err){
    yield put(BaseActions.createUser(err));
  }
};

export default function* root() {
  yield all([
    takeLatest ( BaseActions.Type.GET_TOKEN, getToken),
    takeLatest ( BaseActions.Type.GET_REFRESH, getRefresh),
    takeLatest ( BaseActions.Type.SET_USER, getUserInfo),
    takeLatest ( BaseActions.Type.CREATE_USER, createUser)
  ]);
};
