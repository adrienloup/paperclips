export type Action =
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'PRODUCE_AUTOMATIC_CLIPS' }
  | { type: 'SELL_CLIPS' }
  | { type: 'DECREASE_CLIPS_COST' }
  | { type: 'INCREASE_CLIPS_COST' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE_STOCK' }
  | { type: 'UPDATE_MARKETING' }
  | { type: 'UPDATE_AUTOCLIPPERS' }
  | { type: 'UPDATE_MEGACLIPPERS' }
  | { type: 'UPDATE_CLIPS_BONUS'; bonus: number }
  | { type: 'UPDATE_AUTOCLIPPERS_BONUS'; bonus: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'LOAD_STATE' };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsSales: number;
  clipsBonus: number;
  clipsPerSecond: number;
  wireCost: number;
  wireStock: number;
  wireBonus: number;
  funds: number;
  publicDemand: number;
  publicDemandBonus: number;
  marketing: number;
  marketingBonus: number;
  autoClippers: number;
  autoClippersCost: number;
  autoClippersBonus: number;
  megaClippers: number;
  megaClippersCost: number;
}
