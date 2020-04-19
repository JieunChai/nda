// import { Crew } from "models/Crew";
// import produce from 'immer';
// import { handleActions } from 'redux-actions';
// // import { CrewActions } from '../actions/crew';
// import { ActionStatus } from '../models/Visitor';

// export interface CrewState {
//   Crews: Crew[],
//   task: {
//     getCrew: ActionStatus,
//     createCrew: ActionStatus,
//     updateCrew: ActionStatus,
//     removeCrew: ActionStatus
//   },
//   errorMessage: string,
// };

// export type CrewTask = 'getCrew' | 'createCrew' | 'updateCrew' |'removeCrew';

// const initialState: CrewState = {
//   Crews: [],
//   task: {
//     getCrew: ActionStatus.READY,
//     createCrew: ActionStatus.READY,
//     updateCrew: ActionStatus.READY,
//     removeCrew: ActionStatus.READY
//   },
//   errorMessage: ""
// };

// export const crewReducer = handleActions<CrewState, any>({
//   [CrewActions.Type.GET_CREW]: (state, action) => {
//     return produce(state, draft => {
//       draft.task.getCrew = ActionStatus.PROGRESS;
//     });
//   },
//   [CrewActions.Type.GET_CREW_S]: (state, action) => {
//     const crews = action.payload;
//     return produce(state, draft => {
//       draft.task.getCrew = ActionStatus.SUCCESS;
//       draft.Crews.concat(crews);
//     });
//   },
//   [CrewActions.Type.GET_CREW_F]: (state, action) => {
//     return produce(state, draft => {
//       draft.task.getCrew = ActionStatus.FAIL;
//     });
//   },
//   [CrewActions.Type.CREATE_CREW]: (state, action) => {
//     return produce (state, draft => {
//       draft.task.createCrew = ActionStatus.PROGRESS;
//     });
//   },
//   [CrewActions.Type.CREATE_CREW_S]: (state, action) => {
//     const { id, nameEn, nameKr, email, phone, department, position, employment, image } = action.payload;
//     return produce (state, draft => {
//       draft.task.createCrew = ActionStatus.SUCCESS;
//       draft.Crews.push({
//         id: id,
//         nameEn: nameEn,
//         nameKr: nameKr,
//         email: email,
//         phone: phone,
//         department: department,
//         position: position,
//         employment: employment,
//         image: image
//       });
//     });
//   },
//   [CrewActions.Type.CREATE_CREW_F]: (state, action) => {
//     return produce (state, draft => {
//       draft.task.createCrew = ActionStatus.FAIL;
//     });
//   },
//   [CrewActions.Type.UPDATE_CREW]: (state, action) => {
//     return produce (state, draft => {
//       draft.task.updateCrew = ActionStatus.PROGRESS;
//     })
//   },
//   [CrewActions.Type.UPDATE_CREW_S]: (state, action) => {
//     const { id, nameEn, nameKr, email, phone, department, position, employment, image} = action.payload;
//     const i = state.Crews.findIndex(person => person.id === id);
//     return produce (state, draft => {
//       draft.Crews.splice(i, 1, ({
//         id: id,
//         nameEn: nameEn,
//         nameKr: nameKr,
//         email: email,
//         phone: phone,
//         department: department,
//         position: position,
//         employment: employment,
//         image: image
//       }));
//       draft.task.updateCrew = ActionStatus.SUCCESS;
//     });
//   },
//   [CrewActions.Type.UPDATE_CREW_F]: (state, action) => {
//     return produce (state, draft => {
//       draft.task.updateCrew = ActionStatus.FAIL;
//     });
//   },
//   [CrewActions.Type.REMOVE_CREW]: (state, action) => {
//     return produce (state, draft => {
//       draft.task.removeCrew = ActionStatus.PROGRESS;
//     });
//   },
//   [CrewActions.Type.REMOVE_CREW_S]: (state, action) => {
//     const { id } = action.payload;
//     return produce (state, draft => {
//       const i = draft.Crews.findIndex(crew => crew.id === id);
//       draft.Crews.splice(i, 1);
//       draft.task.removeCrew = ActionStatus.SUCCESS;
//     });
//   },
//   [CrewActions.Type.REMOVE_CREW_F]: (state, action) => {
//     return produce (state, draft => {
//       draft.task.removeCrew = ActionStatus.FAIL;
//     });
//   },
// }, initialState);

export const a = 'hi!'