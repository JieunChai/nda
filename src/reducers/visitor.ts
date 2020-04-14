import { Visitor } from "models/Visitor";
import produce from 'immer';
import { handleActions } from 'redux-actions';
import { VisitorType } from '../actions/visitor';
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
  [VisitorType.GET_VISITOR]: (state, action) => {
    return produce(state, draft => {
      draft.task.getVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorType.GET_VISITOR_S]: (state, action) => {
    const visitors = action.payload;
    return produce(state, draft => {
      draft.task.getVisitor = ActionStatus.SUCCESS;
      draft.Visitors.push(visitors);
    });
  },
  [VisitorType.GET_VISITOR_F]: (state, action) => {
    return produce(state, draft => {
      draft.task.getVisitor = ActionStatus.FAIL;
    });
  },
  [VisitorType.CREATE_VISITOR]: (state, action) => {
    return produce (state, draft => {
      draft.task.createVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorType.CREATE_VISITOR_S]: (state, action) => {
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
  [VisitorType.CREATE_VISITOR_F]: (state, action) => {
    return produce (state, draft => {
      draft.task.createVisitor = ActionStatus.FAIL;
    });
  },
  [VisitorType.UPDATE_VISITOR]: (state, action) => {
    return produce (state, draft => {
      draft.task.updateVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorType.UPDATE_VISITOR_S]: (state, action) => {
    const { id, name, email, phone, purpose, crewname, image, datetime, signature } = action.payload;
    const i = state.Visitors.findIndex(person => person.id === id);
    return produce (state, draft => {
      draft.task.updateVisitor = ActionStatus.SUCCESS;
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
  [VisitorType.UPDATE_VISITOR_F]: (state, action) => {
    return produce (state, draft => {
      draft.task.updateVisitor = ActionStatus.FAIL;
    });
  },
  [VisitorType.REMOVE_VISITOR]: (state, action) => {
    return produce (state, draft => {
      draft.task.removeVisitor = ActionStatus.PROGRESS;
    });
  },
  [VisitorType.REMOVE_VISITOR_S]: (state, action) => {
    const { id } = action.payload;
    return produce (state, draft => {
      const i = draft.Visitors.findIndex(visitor => visitor.id === id);
      draft.Visitors.splice(i, 1);
      draft.task.removeVisitor = ActionStatus.SUCCESS;      
    });
  },
  [VisitorType.REMOVE_VISITOR_F]: (state, action) => {
    return produce (state, draft => {
      draft.task.removeVisitor = ActionStatus.FAIL;
    });
  },
}, initialState);
  