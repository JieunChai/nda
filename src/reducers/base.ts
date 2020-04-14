import { User } from 'models/User'
import produce from 'immer';
import { handleActions, Action } from 'redux-actions';
import { BaseType } from '../actions/base';
import { ActionStatus } from '../models/Visitor';
// import { actionChannel } from 'redux-saga/effects';

export interface BaseState {
  user: User | null,
  task: {
    getJWT: ActionStatus,
    getRefresh: ActionStatus,
    createUser: ActionStatus,
    setUser: ActionStatus
  },
  errorMessage: string,
};

export type BaseTask = 'getJWT' | 'getRefresh' | 'createUser' | 'setUser';

const initialState: BaseState = {
  user: null,
  task: {
    getJWT: ActionStatus.READY,
    getRefresh: ActionStatus.READY,
    createUser: ActionStatus.READY,
    setUser: ActionStatus.READY,
  },
  errorMessage: "",
};


export const baseReducer = handleActions<BaseState, any>({
  [BaseType.GET_TOKEN]: (state, action: Action<{userId: string, pw: string}>) => {
    return produce (state, draft => {
      draft.task.getJWT = ActionStatus.PROGRESS;
    });
  },
  [BaseType.GET_TOKEN_S]: (state, action: Action<{}>) => {
    return produce (state, draft => {
      draft.task.getJWT = ActionStatus.SUCCESS;
    });
  },
  [BaseType.GET_TOKEN_F]: (state, action: Action<string>) => {
    if(typeof action.payload === 'string') {
      const errMsg = action.payload;
      return produce(state, draft => {
        draft.task.getJWT = ActionStatus.FAIL;
        draft.errorMessage = errMsg;
      })
    };
    return state;
  },
  [BaseType.GET_REFRESH]: (state, action: Action<{ refresh: string}>) => {
    return produce(state, draft => { 
      draft.task.getRefresh = ActionStatus.PROGRESS;
    })
  },
  [BaseType.GET_REFRESH_S]: (state, action) => {
    return produce(state, draft => {
      draft.task.getRefresh = ActionStatus.SUCCESS;
    });
  },
  [BaseType.GET_REFRESH_F]: (state, action: Action<string>) => {
    localStorage.clear();
    if(typeof action.payload === 'string') {
      const errMsg = action.payload;
      return produce(state, draft => {
        draft.task.getRefresh = ActionStatus.FAIL;
        draft.errorMessage = errMsg;
      })
    };
  return state;
  },
  [BaseType.LOGOUT]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = initialState;
    });
  },
  [BaseType.SET_USER]: (state, action) => {
    if(action.payload){
      return produce(state, draft => {
        draft.task.setUser = ActionStatus.PROGRESS;
      });
    }
    return state;
  },
  [BaseType.SET_USER_S]: (state, action: Action<User>) => {
    if(action.payload){
      const user = action.payload;
      return produce(state, draft => {
        draft.user = user;
        draft.task.setUser = ActionStatus.SUCCESS;
      });
    }
    return state;
  },
  [BaseType.SET_USER_F]: (state, action: Action<string>) => {
    if(action.payload){
      const errMsg = action.payload;
      return produce(state, draft => {
        draft.errorMessage = errMsg;
        draft.task.setUser = ActionStatus.FAIL;
      })
    }
    return state;
  },
  [BaseType.CREATE_USER]: (state, action: Action<{userId: string, pw: string}>) => {
    if(action.payload){
      return produce(state, draft => {
        draft.task.createUser = ActionStatus.PROGRESS;
      })
    }
    return state;
  },
  [BaseType.CREATE_USER_S]: (state, action) => {
    return produce(state, draft => {
      draft.task.createUser = ActionStatus.SUCCESS;
    })
  },
  [BaseType.CREATE_USER_F]: (state, action) => {
    if(action.payload){
      const errMsg = action.payload;
      return produce(state, draft => {
        draft.errorMessage = errMsg;
        draft.task.createUser = ActionStatus.FAIL;
      })
    }
    return state;
  }
}, initialState);
