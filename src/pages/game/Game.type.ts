export type Action =
  | { type: 'INITIALIZE'; state: State }
  | { type: 'SELL_UNSOLD' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_MARKETING' }
  | { type: 'BUY_MACHINE' }
  | { type: 'BUY_MEGAMACHINE' }
  | { type: 'INCREASE_PAPERCLIP_COST' }
  | { type: 'DECREASE_PAPERCLIP_COST' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_PAPERCLIP' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_BONUS'; bonus: number };

export interface State {
  funds: number;
  fundsPerSecond: number;
  machine: number;
  machineCost: number;
  marketing: number;
  marketingCost: number;
  megamachine: number;
  megamachineCost: number;
  paperclip: number;
  paperclipCost: number;
  paperclipCostRef: number;
  paperclipPerSecond: number;
  publicDemand: number;
  unsold: number;
  unsoldBonus: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
}
