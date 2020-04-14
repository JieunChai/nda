import { BaseState } from './base';
import { VisitorState } from './visitor';
// import { CrewState } from './crew';

export interface RootState {
  base: BaseState;
  visitor: VisitorState;
  // crew: CrewState;
};
