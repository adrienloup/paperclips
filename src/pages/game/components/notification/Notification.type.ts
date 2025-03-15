export type Action =
  | { type: 'ADD_NOTIFICATION'; id: number }
  | { type: 'DELETE_NOTIFICATION'; id: number };

export interface Notification {
  id: number;
  text: string;
  enable: boolean;
}

export type State = Notification[];
