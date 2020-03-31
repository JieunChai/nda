import { createAction, handleActions } from 'redux-actions';
// import { Visitor } from 'models/Visitor';
import produce from 'immer';
import { authHeader } from 'helpers/authHeader';
import { getVisitorAPI } from '../api/agent';

// types

export enum Type {
  VISITOR_GET = 'VISITOR_GET',
  VISITOR_CREATE = 'VISITOR_CREATE',
  VISITOR_REMOVE = 'VISITOR_REMOVE',
};

export interface Visitor {
  id: number;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  crewName: string;
  image: string;
  datetime: string;
  signature: string;
}

export interface VisitorState {
  visitors: Visitor[];
};

// actions

export const visitorGet = createAction(Type.VISITOR_GET);
export const visitorCreate = createAction(Type.VISITOR_CREATE);
export const visitorRemove = createAction(Type.VISITOR_REMOVE);

// reducers

export const getVisitors = (id: number) => async (dispatch: any) => {
  dispatch(visitorGet());
  const requestConfig = {
    headers: { ...authHeader() }
  }
  try {
    const res = await getVisitorAPI(requestConfig);
    dispatch(visitorGet(res));
  }
  catch (err) {
    console.log(err.message);
  }
}

const initialState: VisitorState = {
  visitors: [],
};

export const reducer = handleActions<VisitorState, any>({
  [Type.VISITOR_GET]: (state, action) => {
    return produce(state, draft => {
    });
  },
  [Type.VISITOR_CREATE]: (state, action) => {
    const { id, name, email, phone, purpose, crewName, image, datetime, signature } = action.payload;
    return produce (state, draft => {
      draft.visitors.push({
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
      const remove = draft.visitors.findIndex(visitor => visitor.id === id);
      draft.visitors.splice(remove, 1);      
    });
    },
  }, initialState);