export type Action =
  | { type: 'ADD'; id: string }
  | { type: 'REMOVE'; id: string }
  | { type: 'UPDATE'; id: string };

export interface Notification {
  id: string;
  text: string;
  path: string;
  animate: boolean;
  enable: boolean;
}

export type State = Notification[];
