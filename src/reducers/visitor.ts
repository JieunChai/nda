import { Visitor } from "models/Visitor";
import produce from 'immer';
import { handleActions } from 'redux-actions';
import { VisitorActions } from '../actions/visitor';
import { ActionStatus } from '../models/Visitor';

export interface VisitorState {
  Visitors: Visitor[],
  task: {
    getVisitor: ActionStatus,
    createVisitor: ActionStatus,
    updateVisitor: ActionStatus,
    removeVisitor: ActionStatus
  },
  errorMessage: string,
};

export type VisitorTask = 'getVisitor' | 'createVisitor' | 'updateVisitor' | 'removeVisitor';

const initialState: VisitorState = {
  Visitors: [],
  task: {
    getVisitor: ActionStatus.READY,
    createVisitor: ActionStatus.READY,
    updateVisitor: ActionStatus.READY,
    removeVisitor: ActionStatus.READY
  },
  errorMessage: ""
};

export const visitorReducer = handleActions<VisitorState, any>({
  [VisitorActions.Type.GET_VISITOR]: (state, action) => {
    return produce(state, draft => {
      draft.task.getVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorActions.Type.GET_VISITOR_S]: (state, action) => {
    const visitors = action.payload;
    return produce(state, draft => {
      draft.task.getVisitor = ActionStatus.SUCCESS;
      draft.Visitors.concat(visitors);
    });
  },
  [VisitorActions.Type.GET_VISITOR_F]: (state, action) => {
    return produce(state, draft => {
      draft.task.getVisitor = ActionStatus.FAIL;
    });
  },
  [VisitorActions.Type.CREATE_VISITOR]: (state, action) => {
    return produce (state, draft => {
      draft.task.createVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorActions.Type.CREATE_VISITOR_S]: (state, action) => {
    const { id, name, email, phone, purpose, crewname, image, datetime, signature } = action.payload;
    return produce (state, draft => {
      draft.task.createVisitor = ActionStatus.SUCCESS;
      draft.Visitors.push({
        id: id, 
        name: name, 
        email: email, 
        phone: phone, 
        purpose: purpose, 
        crewname: crewname, 
        image: image, 
        datetime: datetime, 
        signature: signature
      });
    });
  },
  [VisitorActions.Type.CREATE_VISITOR_F]: (state, action) => {
    return produce (state, draft => {
      draft.task.createVisitor = ActionStatus.FAIL;
    });
  },
  [VisitorActions.Type.UPDATE_VISITOR]: (state, action) => {
    return produce (state, draft => {
      draft.task.updateVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorActions.Type.UPDATE_VISITOR_S]: (state, action) => {
    const { id, name, email, phone, purpose, crewname, image, datetime, signature } = action.payload;
    const i = state.Visitors.findIndex(person => person.id === id);
    return produce (state, draft => {
      draft.Visitors.splice(i, 1, ({
        id: id, 
        name: name, 
        email: email, 
        phone: phone, 
        purpose: purpose, 
        crewname: crewname, 
        image: image, 
        datetime: datetime, 
        signature: signature
      }));
    });
  },
  [VisitorActions.Type.UPDATE_VISITOR_F]: (state, action) => {
    return produce (state, draft => {});
  },
  [VisitorActions.Type.REMOVE_VISITOR]: (state, action) => {
    return produce (state, draft => {
      draft.task.removeVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorActions.Type.REMOVE_VISITOR_S]: (state, action) => {
    const { id } = action.payload;
    return produce (state, draft => {
      const i = draft.Visitors.findIndex(visitor => visitor.id === id);
      draft.Visitors.splice(i, 1);
      draft.task.removeVisitor = ActionStatus.SUCCESS;      
    });
  },
  [VisitorActions.Type.REMOVE_VISITOR_F]: (state, action) => {
    return produce (state, draft => {
      draft.task.removeVisitor = ActionStatus.FAIL;
    });
  },
}, initialState);
  