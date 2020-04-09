import { User } from 'models/User'
import produce from 'immer';
import { handleActions, Action } from 'redux-actions';
import { BaseActions } from '../actions/base';
import { ActionStatus } from '../models/Visitor';

export interface BaseState {
  user: User | null,
  task: {
    getJWT: ActionStatus,
    getRefresh: ActionStatus,
    createUser: ActionStatus,
    getUser: ActionStatus
  },
  errorMessage: string,
};

export type BaseTask = 'getUser' | 'createUser' | 'getJWT';

const initialState: BaseState = {
  user: null,
  task: {
    getJWT: ActionStatus.READY,
    getRefresh: ActionStatus.READY,
    createUser: ActionStatus.READY,
    getUser: ActionStatus.READY,
  },
  errorMessage: "",
};


export const baseReducer = handleActions<BaseState, any>({
  [BaseActions.Type.GET_TOKEN]: (state, action: Action<{userId: string, pw: string}>) => {
    return produce (state, draft => {
      draft.task.getJWT = ActionStatus.PROGRESS;
    });
  },
  [BaseActions.Type.GET_TOKEN_S]: (state, action: Action<{}>) => {
    return produce (state, draft => {
      draft.task.getJWT = ActionStatus.SUCCESS;
    });
  },
  [BaseActions.Type.GET_TOKEN_F]: (state, action: Action<string>) => {
    if(typeof action.payload === 'string') {
      const errMsg = action.payload;
      return produce(state, draft => {
        draft.task.getJWT = ActionStatus.FAIL;
        draft.errorMessage = errMsg;
      })
    };
    return state;
  },
  [BaseActions.Type.GET_REFRESH_S]: (state, action) => {
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
  [BaseActions.Type.GET_REFRESH_F]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = { ...initialState }
    });
  },
  [BaseActions.Type.LOGOUT]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = initialState;
    });
  },
  [BaseActions.Type.GET_USER]: (state) => {
    return produce(state, draft => {
      draft.user = null;
    });
  },
  [BaseActions.Type.GET_USER_S]: (state, action) => {
    const { id, userId } = action.payload;
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user = {
      ...user,
      id,
      userId: userId,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return produce(state, draft => {
      draft.user = { id, userId: userId, role };
    });
  },
  [BaseActions.Type.GET_USER_F]: (state) => {
    return produce(state, draft => {
      draft.user = null;
    })
  },
  [BaseActions.Type.CREATE_USER]: (state, action: Action<{userId: string, pw: string}>) => {
    if(action.payload){
      return produce(state, draft => {
        draft.task.createUser = ActionStatus.PROGRESS;
      })
    }
    return state;
  },
  [BaseActions.Type.CREATE_USER_S]: (state) => {
    return produce(state, draft => {
      draft.task.createUser = ActionStatus.SUCCESS;
    });
  },
  [BaseActions.Type.CREATE_USER_F]: (state, action: Action<string>) => {
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
