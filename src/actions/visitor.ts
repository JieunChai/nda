import { createAction, handleActions } from 'redux-actions';
import { Visitor } from 'models/Visitor';
import produce from 'immer';
import { authHeader } from 'helpers/authHeader';
import { getVisitorAPI } from '../api/agent';

// types

export enum Type {
  SET_DEFAULT = 'SET_DEFAULT',
  VISITOR_GETALL_REQUEST = 'VISITOR_GETALL_REQUEST',
  VISITOR_GETALL_SUCCESS = 'VISITOR_GETALL_SUCCESS',
  VISITOR_GETALL_FAILURE = 'VISITOR_GETALL_FAILURE',
  VISITOR_CREATE_REQUEST = 'VISITOR_CREATE_REQUEST',
  VISITOR_CREATE_SUCCESS = 'VISITOR_CREATE_SUCCESS',
  VISITOR_CREATE_FAILURE = 'VISITOR_CREATE_FAILURE',
  VISITOR_REMOVE_REQUEST = 'VISITOR_REMOVE_REQUEST',
  VISITOR_REMOVE_SUCCESS = 'VISITOR_REMOVE_SUCCESS',
  VISITOR_REMOVE_FAILURE = 'VISITOR_REMOVE_FAILURE',
};

export interface VisitorState {
  Visitors: Visitor[]
};

// actions

export const visitorGetAll = createAction(Type.VISITOR_GETALL);
export const visitorCreate = createAction(Type.VISITOR_CREATE);
export const visitorRemove = createAction(Type.VISITOR_REMOVE);

// reducers

const initialState: VisitorState = {
  Visitors: []
};

export const getAllVisitors = () => async (dispatch: any) => {
  dispatch(visitorGetAll());
  const requestConfig = {
    headers: { ...authHeader() }
  }
  try {
    const res = await getVisitorAPI(requestConfig);
    dispatch(visitorGetAll(res));
  }
  catch (err) {
    console.log(err.message);
  }
};

export const reducer = handleActions<VisitorState, any>({
  [Type.SET_DEFAULT]: (state, action) => {
    return initialState;
  }

  [Type.VISITOR_GETALL]: (state, action) => {
    return produce(state, draft => {
      draft.Visitors.concat(action.payload);
    });
  },
  [Type.VISITOR_CREATE]: (state, action) => {
    const { id, name, email, phone, purpose, crewname, image, datetime, signature } = action.payload;
    return produce (state, draft => {
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
  [Type.VISITOR_REMOVE]: (state, action) => {
    const { id } = action.payload;
    return produce (state, draft => {
      const remove = draft.visitors.findIndex(visitor => visitor.id === id);
      draft.visitors.splice(remove, 1);      
    });
    },
  }, initialState);
  