import { combineReducers } from 'redux';
import { RootState } from './state';
import { baseReducer } from './base';
import { visitorReducer } from './visitor';
// import { crewReducer } from './crew';
export type { RootState };

export const rootReducer = combineReducers<RootState>({
  base: baseReducer as any,
  visitor: visitorReducer as any,
  // crew: crewReducer as any
});
