import { createAction } from 'redux-actions';

export enum VisitorType {
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

  FETCH_VISITORS = 'FETCH_VISITORS'
};

export const VisitorActions = {
  getVisitor : createAction(VisitorType.GET_VISITOR),
  getVisitorS : createAction(VisitorType.GET_VISITOR_S),
  getVisitorF : createAction(VisitorType.GET_VISITOR_F),

  createVisitor : createAction(VisitorType.CREATE_VISITOR),
  createVisitorS : createAction(VisitorType.CREATE_VISITOR_S),
  createVisitorF : createAction(VisitorType.CREATE_VISITOR_F),

  updateVisitor : createAction(VisitorType.UPDATE_VISITOR),
  updateVisitorS : createAction(VisitorType.UPDATE_VISITOR_S),
  updateVisitorF : createAction(VisitorType.UPDATE_VISITOR_F),

  removeVisitor : createAction(VisitorType.REMOVE_VISITOR),
  removeVistiorS : createAction(VisitorType.REMOVE_VISITOR_S),
  removeVitisorF : createAction(VisitorType.REMOVE_VISITOR_F),
};
