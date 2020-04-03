import { createAction, handleActions } from 'redux-actions';
import { User } from 'models/User';
import { tokenAPI } from 'api/agent';
import produce from 'immer';

// types

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

export interface BaseState {
  isLoggedIn: boolean,
  user: User | null
};

// actions

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

export const getToken = (userId: string, pw: string) => async (dispatch: any) => {
  dispatch(tokenRequest());
  try {
    const res = await tokenAPI({ userId, pw });
    dispatch(tokenSuccess(res.data));
  }
  catch (err) {
    dispatch(tokenFailure(err));
  }
};

export const logout = () => (dispatch: any) => {
  dispatch(userLogout());
  window.location.href = '/';
};

// reducers

const initialState: BaseState = {
  isLoggedIn: false,
  user: null
};

export const reducer = handleActions<BaseState, any>({
  [Type.TOKEN_REQUEST]: (state) => {
    return produce (state, draft => {
      draft.isLoggedIn = false;
    });
  },
  [Type.TOKEN_SUCCESS]: (state, action) => {
    localStorage.setItem('user', JSON.stringify(action.payload));
    return produce (state, draft => {
      draft.isLoggedIn = true;
    });
  },
  [Type.TOKEN_FAILURE]: (state, action) => {
    return produce(state, draft => {
      draft.isLoggedIn = false;
    });
  },
  [Type.REFRESH_SUCCESS]: (state, action) => {
    const { access } = action.payload;
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user = {
      ...user,
      access
    };
    localStorage.setItem('user', JSON.stringify(user));
    return produce(state, draft => {     
    });
  },
  [Type.REFRESH_FAILURE]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = { ...initialState }
    });
  },
  [Type.LOGOUT]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = { ...initialState}
    });
  },
  [Type.USER_REQUEST]: (state) => {
    return produce(state, draft => {
      draft.user = null;
    });
  },
  [Type.USER_SUCCESS]: (state, action) => {
    const { id, userId } = action.payload;
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user = {
      ...user,
      id,
      userId: userId
    };
    localStorage.setItem('user', JSON.stringify(user));
    return produce(state, draft => {
      draft.user = { id, userId: userId };
    });
  },
  [Type.USER_FAILURE]: (state) => {
    return produce(state, draft => {
      draft.user = null;
    })
  }
}, initialState);
