export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_AUTOCLIPPERS' }
  | { type: 'BUY_MEGACLIPPERS' }
  | { type: 'PRODUCE_MANUAL' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_PRODUCE_BONUS'; bonus: number }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  autoClippers: number;
  autoClippersCost: number;
  clips: number;
  clipsCost: number;
  funds: number;
  fundsPerSecond: number;
  megaClippers: number;
  megaClippersCost: number;
  produceBonus: number;
  producePerSecond: number;
  publicDemand: number;
  sellBonus: number;
  unsoldInventory: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
  wireStock: number;
}
