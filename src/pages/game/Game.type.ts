export type Action =
  | { type: 'INITIALIZE'; state: State }
  | { type: 'SELL_UNSOLD' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_MARKETING' }
  | { type: 'BUY_MACHINES' }
  | { type: 'BUY_MEGAMACHINES' }
  | { type: 'INCREASE_PAPERCLIPS_COST' }
  | { type: 'DECREASE_PAPERCLIPS_COST' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_PAPERCLIPS' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_BONUS'; bonus: number };

export interface State {
  funds: number;
  fundsPerSecond: number;
  machines: number;
  machinesCost: number;
  marketing: number;
  marketingCost: number;
  megamachines: number;
  megamachinesCost: number;
  paperclips: number;
  paperclipsCost: number;
  paperclipsCostRef: number;
  paperclipsPerSecond: number;
  publicDemand: number;
  unsold: number;
  unsoldBonus: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
}
