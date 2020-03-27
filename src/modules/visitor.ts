import { createAction, handleActions } from 'redux-actions';
import { Visitor } from 'models/Visitor';
import produce from 'immer';

// types

export enum Type {
  VISITOR_CREATE = 'VISITOR_CREATE',
  VISITOR_REMOVE = 'VISITOR_REMOVE',
};

export interface VisitorState {
  visitor: Visitor[]
};

// actions

export const visitorCreate = createAction(Type.VISITOR_CREATE);
export const visitorRemove = createAction(Type.VISITOR_REMOVE);

// reducers

const initialState: VisitorState = {
  visitor: []
};

export const reducer = handleActions<VisitorState, any>({
  [Type.VISITOR_CREATE]: (state, action) => {
    const { id, name, email, phone, purpose, crewName, image, datetime, signature } = action.payload;
    return produce (state, draft => {
      draft.visitor.push({
        id: id, 
        name: name, 
        email: email, 
        phone: phone, 
        purpose: purpose, 
        crewName: crewName, 
        image: image, 
        datetime: datetime, 
        signature: signature 
      });
    });
  },
  [Type.VISITOR_REMOVE]: (state, action) => {
    const { id } = action.payload;
    return produce (state, draft => {
      const remove = draft.visitor.findIndex(visitor => visitor.id === id);
      draft.visitor.splice(remove, 1);      
    });
    },
  }, initialState);