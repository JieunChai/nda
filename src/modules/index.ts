// root reducer

import { combineReducers } from 'redux';
import { reducer as baseReducer, BaseState } from './base';
import { reducer as visitorReducer, VisitorState } from './visitor';

const rootReducer = combineReducers({
  base: baseReducer,
  visitor: visitorReducer
});

export type RootState = {
  base: BaseState,
  visitor: VisitorState
};

export default rootReducer;
