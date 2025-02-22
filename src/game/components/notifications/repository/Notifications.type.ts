export type Action = { type: 'ADDED'; id: number } | { type: 'DELETED'; id: number };

export interface State {
  id: number;
}
