import { createAction } from 'redux-actions';

export namespace CrewActions {
  export enum Type {
    GET_CREW = 'GET_CREW',
    GET_CREW_S = 'GET_CREW_S',
    GET_CREW_F = 'GET_CREW_F',

    CREATE_CREW = 'CREATE_CREW',
    CREATE_CREW_S = 'CREATE_CREW_S',
    CREATE_CREW_F = 'CREATE_CREW_F',

    UPDATE_CREW = 'UPDATE_CREW',
    UPDATE_CREW_S = 'UPDATE_CREW_S',
    UPDATE_CREW_F = 'UPDATE_CREW_F',

    REMOVE_CREW = 'REMOVE_CREW',
    REMOVE_CREW_S = 'REMOVE_CREW_S',
    REMOVE_CREW_F = 'REMOVE_CREW_F',
  };

  export const getCrew = createAction(Type.GET_CREW);
  export const getCrewS = createAction(Type.GET_CREW_S);
  export const getCrewF = createAction(Type.GET_CREW_F);
  export const createCrew = createAction(Type.CREATE_CREW);
  export const createCrewS = createAction(Type.CREATE_CREW_S);
  export const createCrewF = createAction(Type.CREATE_CREW_F);
  export const updateCrew = createAction(Type.UPDATE_CREW);
  export const updateCrewS = createAction(Type.UPDATE_CREW_S);
  export const updateCrewF = createAction(Type.UPDATE_CREW_F);
  export const removeCrew = createAction(Type.REMOVE_CREW);
  export const removeCrewS = createAction(Type.REMOVE_CREW_S);
  export const removeCrewF = createAction(Type.REMOVE_CREW_F);
};

export type CrewActions = Omit<typeof CrewActions, 'Type'>;