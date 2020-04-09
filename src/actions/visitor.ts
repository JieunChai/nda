import { createAction } from 'redux-actions';

export namespace VisitorActions {
  export enum Type {
    GET_VISITOR = 'GET_VISITOR',
    GET_VISITOR_S = 'GET_VISITOR_S',
    GET_VISITOR_F = 'GET_VISITOR_F',

    CREATE_VISITOR = 'CREATE_VISITOR',
    CREATE_VISITOR_S = 'CREATE_VISITOR_S',
    CREATE_VISITOR_F = 'CREATE_VISITOR_F',

    UPDATE_VISITOR = 'UPDATE_VISITOR',
    UPDATE_VISITOR_S = 'UPDATE_VISITOR_S',
    UPDATE_VISITOR_F = 'UPDATE_VISITOR_F',

    REMOVE_VISITOR = 'REMOVE_VISITOR',
    REMOVE_VISITOR_S = 'REMOVE_VISITOR_S',
    REMOVE_VISITOR_F = 'REMOVE_VISITOR_F',
  };

  export const getVisitor = createAction(Type.GET_VISITOR);
  export const getVisitorS = createAction(Type.GET_VISITOR_S);
  export const getVisitorF = createAction(Type.GET_VISITOR_F);

  export const createVisitor = createAction(Type.CREATE_VISITOR);
  export const createVisitorS = createAction(Type.CREATE_VISITOR_S);
  export const createVisitorF = createAction(Type.CREATE_VISITOR_F);

  export const updateVisitor = createAction(Type.UPDATE_VISITOR);
  export const updateVisitorS = createAction(Type.UPDATE_VISITOR_S);
  export const updateVisitorF = createAction(Type.UPDATE_VISITOR_F);
};

export type VisitorActions = Omit<typeof VisitorActions, 'Type'>;