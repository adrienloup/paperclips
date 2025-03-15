export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'UPDATE_PRODUCE_BONUS'; bonus: number }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  autoClippers: number;
  clips: number;
  clipsCost: number;
  funds: number;
  fundsPerSecond: number;
  megaClippers: number;
  produceBonus: number;
  producePerSecond: number;
  publicDemand: number;
  sellBonus: number;
  unsoldInventory: number;
  wiresStock: number;
}
