export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'PRODUCE_MANUAL_CLIPS' }
  | { type: 'PRODUCE_AUTOMATIC_CLIPS' }
  | { type: 'INCREASE_CLIPS_COST' }
  | { type: 'DECREASE_CLIPS_COST' }
  | { type: 'BUY_WIRE' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_AUTOCLIPPERS' }
  | { type: 'UPDATE_MEGACLIPPERS' }
  | { type: 'UPDATE_MARKETING' }
  | { type: 'UPDATE_WIRE'; wire: number }
  | { type: 'UPDATE_PRODUCTION_BONUS'; bonus: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  clips: number;
  clipsCost: number;
  clipsStock: number;
  clipsTransit: number;
  clipsPerSecond: number;
  funds: number;
  wires: number; // Quantity
  wiresCost: number;
  wiresStock: number;
  wiresBonus: number;
  publicDemand: number;
  marketing: number;
  marketingCost: number;
  autoClippers: number;
  autoClippersCost: number;
  megaClippers: number;
  megaClippersCost: number;
  productionBonus: number;
}
