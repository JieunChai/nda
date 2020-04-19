import { createAction } from 'redux-actions';
import { User } from 'models/User';

export enum BaseType {
  GET_TOKEN = 'GET_TOKEN',
  GET_TOKEN_S = 'GET_TOKEN_S',
  GET_TOKEN_F = 'GET_TOKEN_F',
  GET_REFRESH = 'GET_REFRESH',
  GET_REFRESH_S = 'GET_REFRESH_S',
  GET_REFRESH_F = 'GET_REFRESH_F',
  LOGOUT = 'LOGOUT',
  SET_USER = 'SET_USER',
  SET_USER_S = 'SET_USER_S',
  SET_USER_F = 'SET_USER_F',
  CREATE_USER = 'CREATE_USER',
  CREATE_USER_S = 'CREATE_USER_S',
  CREATE_USER_F = 'CREATE_USER_F',
};
  
export const BaseActions = {
  getToken : createAction<{ userId: string, pw:string }>(BaseType.GET_TOKEN),
  getTokenS : createAction(BaseType.GET_TOKEN_S),
  getTokenF : createAction<string>(BaseType.GET_TOKEN_F),
  getRefresh : createAction(BaseType.GET_REFRESH),
  getRefreshS : createAction(BaseType.GET_REFRESH_S),
  getRefreshF : createAction(BaseType.GET_REFRESH_F),
  userLogout : createAction(BaseType.LOGOUT),
  setUser : createAction(BaseType.SET_USER),
  setUserS : createAction<User>(BaseType.SET_USER_S),
  setUserF : createAction<string>(BaseType.SET_USER_F),
  createUser : createAction(BaseType.CREATE_USER),
  createUserS : createAction(BaseType.CREATE_USER_S),
  createUserF : createAction(BaseType.CREATE_USER_F),
};