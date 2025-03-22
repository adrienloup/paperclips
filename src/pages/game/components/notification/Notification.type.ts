export type Action =
  | { type: 'ADD_NOTIFICATION'; id: number }
  | { type: 'DELETE_NOTIFICATION'; id: number }
  | { type: 'UPDATE_NOTIFICATION'; id: number };

export interface Notification {
  animate: boolean;
  enable: boolean;
  id: number;
  path: string;
  text: string;
}

export type State = Notification[];
