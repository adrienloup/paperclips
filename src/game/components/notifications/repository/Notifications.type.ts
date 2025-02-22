export type Action = { type: 'ADDED'; id: number } | { type: 'DELETED'; id: number };
export type State = { id: number; text?: string; show?: boolean }[];
