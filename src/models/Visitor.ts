export interface Visitor {
  id: number;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  crewname: string;
  image: string;
  datetime: string;
  signature: string;
}

export enum ActionStatus {
  READY, PROGRESS, SUCCESS, FAIL
}