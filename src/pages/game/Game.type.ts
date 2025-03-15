export type Action = { type: 'SELL_CLIPS' } | { type: 'UPDATE_PER_SECOND' };

export interface State {
  clips: number;
  clipsPerSecond: number;
}
