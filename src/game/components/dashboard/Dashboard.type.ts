export type Action =
  | { type: 'REBOOT' }
  | { type: 'SELL_CLIPS' }
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'PRODUCE_AUTOMATIC_CLIPS' }
  | { type: 'INCREASE_CLIPS_COST' }
  | { type: 'DECREASE_CLIPS_COST' }
  | { type: 'BUY_WIRE' }
  | { type: 'UPDATE_AUTOCLIPPERS' }
  | { type: 'UPDATE_MEGACLIPPERS' }
  | { type: 'UPDATE_MARKETING' }
  | { type: 'UPDATE_PRODUCTION_BONUS'; bonus: number }
  | { type: 'UPDATE_WIRE_STOCK_BONUS'; bonus: number };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsTransit: number;
  clipsPerSecond: number;
  wireCost: number;
  wireStock: number;
  wireBonus: number;
  funds: number;
  publicDemand: number;
  marketing: number;
  marketingCost: number;
  autoClippers: number;
  autoClippersCost: number;
  megaClippers: number;
  megaClippersCost: number;
  productionBonus: number;
}
