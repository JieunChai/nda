import { User } from 'models/User'
import { tokenAPI } from 'api/agent';
import produce from 'immer';
import { handleActions, Action } from 'redux-actions';
import { BaseActions } from '../actions/base';
import { ActionStatus } from '../models/Visitor';

export interface BaseState {
  user: User | null,
  task: {
    getJWT: ActionStatus,
  },
  errorMessage: string,
};

const initialState: BaseState = {
  user: null,
  task: {
    getJWT: ActionStatus.READY,
  },
  errorMessage: "",
};

export const basereducer = handleActions<BaseState, any>({
  [BaseActions.Type.TOKEN_REQUEST]: (state, action: Action<{userId: string, pw: string}>) => {
    return produce (state, draft => {
      draft.task.getJWT = ActionStatus.PROGRESS;
    });
  },
  [BaseActions.Type.TOKEN_SUCCESS]: (state, action: Action<{}>) => {
    return produce (state, draft => {
      draft.task.getJWT = ActionStatus.SUCCESS;
    });
  },
  [BaseActions.Type.TOKEN_FAILURE]: (state, action: Action<string>) => {
    if(typeof action.payload === 'string') {
      const errMsg = action.payload;
      return produce(state, draft => {
        draft.task.getJWT = ActionStatus.FAIL;
        draft.errorMessage = errMsg;
      })
    };
    return state;
  },
  [BaseActions.Type.REFRESH_SUCCESS]: (state, action) => {
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
  [BaseActions.Type.REFRESH_FAILURE]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = { ...initialState }
    });
  },
  [BaseActions.Type.LOGOUT]: (state) => {
    localStorage.clear();
    return produce(state, draft => {
      draft = { ...initialState}
    });
  },
  [BaseActions.Type.USER_REQUEST]: (state) => {
    return produce(state, draft => {
      draft.user = null;
    });
  },
  [BaseActions.Type.USER_SUCCESS]: (state, action) => {
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
  [BaseActions.Type.USER_FAILURE]: (state) => {
    return produce(state, draft => {
      draft.user = null;
    })
  }
}, initialState);
