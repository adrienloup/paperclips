export type Action = { type: 'SELL_CLIPS' } | { type: 'UPDATE_PER_SECOND' };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsPerSecond: number;
  clipsTransit: number;
  funds: number;
  productionBonus: number;
}
