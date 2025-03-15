export type Action =
  | { type: 'ADD_NOTIFICATION'; id: number }
  | { type: 'DELETE_NOTIFICATION'; id: number }
  | { type: 'UPDATE_NOTIFICATION'; id: number };

export interface Notification {
  id: number;
  text: string;
  page: string;
  enable: boolean;
  animate: boolean;
}

export type State = Notification[];
