export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsPerSecond: number;
  clipsTransit: number;
  funds: number;
  productionBonus: number;
}
