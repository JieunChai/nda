import { createAction } from 'redux-actions';

export namespace BaseActions {
  export enum Type {
  TOKEN_REQUEST = 'TOKEN_REQUEST',
  TOKEN_SUCCESS = 'TOKEN_SUCCCESS',
  TOKEN_FAILURE = 'TOKEN_FAILURE',
  REFRESH_REQUEST = 'REFRESH_REQUEST',
  REFRESH_SUCCESS = 'REFRESH_SUCCCESS',
  REFRESH_FAILURE = 'REFRESH_FAILURE',
  LOGOUT = 'LOGOUT',
  USER_REQUEST = 'USER_REQUEST',
  USER_SUCCESS = 'USER_SUCCCESS',
  USER_FAILURE = 'USER_FAILURE',
};

export const tokenRequest = createAction(Type.TOKEN_REQUEST);
export const tokenSuccess = createAction(Type.TOKEN_SUCCESS);
export const tokenFailure = createAction(Type.TOKEN_FAILURE);
export const refreshRequest = createAction(Type.REFRESH_REQUEST);
export const refreshSuccess = createAction(Type.REFRESH_SUCCESS);
export const refreshFailure = createAction(Type.REFRESH_FAILURE);
export const userLogout = createAction(Type.LOGOUT);
export const userRequest = createAction(Type.USER_REQUEST);
export const userSuccess = createAction(Type.USER_SUCCESS);
export const userFailure = createAction(Type.USER_FAILURE);
};

export type BaseActions = Omit<typeof BaseActions, 'Type'>;
