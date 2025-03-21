export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_AUTOCLIPPERS' }
  | { type: 'BUY_MEGACLIPPERS' }
  | { type: 'BUY_MARKETING' }
  | { type: 'PRODUCE_MANUAL' }
  | { type: 'INCREASE_SELLING_PRICE' }
  | { type: 'DECREASE_SELLING_PRICE' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE'; value: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_PRODUCE_BONUS'; bonus: number }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  autoClippers: number;
  autoClippersCost: number;
  clips: number;
  funds: number;
  fundsPerSecond: number;
  marketing: number;
  marketingCost: number;
  megaClippers: number;
  megaClippersCost: number;
  megaClippersRef: number;
  produceBonus: number;
  producePerSecond: number;
  publicDemand: number;
  sellingPrice: number;
  sellingPriceRef: number;
  unsoldInventory: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
  wireStock: number;
}
