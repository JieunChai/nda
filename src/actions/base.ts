import { createAction } from 'redux-actions';

export namespace BaseActions {
  export enum Type {
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
    GET_VISITOR = "GET_VISITOR"
  };

  export const getToken = createAction<{ userId: string, pw:string }>(Type.GET_TOKEN);
  export const getTokenS = createAction(Type.GET_TOKEN_S);
  export const getTokenF = createAction(Type.GET_TOKEN_F);
  export const getRefresh = createAction(Type.GET_REFRESH);
  export const getRefreshS = createAction(Type.GET_REFRESH_S);
  export const getRefreshF = createAction(Type.GET_REFRESH_F);
  export const userLogout = createAction(Type.LOGOUT);
  export const setUser = createAction(Type.SET_USER);
  export const setUserS = createAction(Type.SET_USER_S);
  export const setUserF = createAction(Type.SET_USER_F);
  export const createUser = createAction(Type.CREATE_USER);
  export const createUserS = createAction(Type.CREATE_USER_S);
  export const createUserF = createAction(Type.CREATE_USER_F);
};

export type BaseActions = Omit<typeof BaseActions, 'Type'>;
