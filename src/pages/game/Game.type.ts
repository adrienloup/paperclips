export type Action =
  | { type: 'INITIALIZE'; state: State }
  | { type: 'SELL_UNSOLD' }
  | { type: 'BUY_WIRE' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_PAPERCLIPS' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number };

export interface State {
  funds: number;
  paperclips: number;
  paperclipsPerSecond: number;
  paperclipsPrice: number;
  publicDemand: number;
  unsold: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
}
