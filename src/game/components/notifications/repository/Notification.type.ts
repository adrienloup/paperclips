export type Action =
  | { type: 'ADD'; id: number }
  | { type: 'DELETE'; id: number }
  | { type: 'NOTIFY'; notify: boolean };

export type State = {
  notifications: { id: number; text?: string; show?: boolean }[];
  notify: boolean;
};
