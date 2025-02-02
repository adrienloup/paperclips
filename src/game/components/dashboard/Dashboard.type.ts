export type Action =
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'PRODUCE_AUTOMATIC_CLIPS' }
  | { type: 'SELL_CLIPS' }
  | { type: 'DECREASE_CLIPS_COST' }
  | { type: 'INCREASE_CLIPS_COST' }
  | { type: 'UPDATE_MARKETING' }
  | { type: 'UPDATE_CLIPS_BONUS'; bonus: number };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsSales: number;
  clipsBonus: number;
  wireCost: number;
  wireStock: number;
  funds: number;
  publicDemand: number;
  publicDemandBonus: number;
  marketing: number;
  marketingBonus: number;
  autoClippers: number;
  megaClippers: number;
}
