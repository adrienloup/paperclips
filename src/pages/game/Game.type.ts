export type Action =
  | { type: 'SELL_UNSOLD' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_MARKETING' }
  | { type: 'BUY_MACHINE' }
  | { type: 'BUY_MEGAMACHINE' }
  | { type: 'INCREASE_PAPERCLIP_COST' }
  | { type: 'DECREASE_PAPERCLIP_COST' }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_PAPERCLIP' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_TRUST'; value: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_BONUS'; bonus: number }
  | { type: 'INITIALIZE'; state: State };

export interface State {
  coins: {
    name: string;
    quantity: number;
  }[];
  cash: number;
  creativity: number;
  funds: number;
  fundsPerSecond: number;
  machine: number;
  machineCost: number;
  marketing: number;
  marketingCost: number;
  megaMachine: number;
  megaMachineCost: number;
  memory: number;
  operation: number;
  operationMax: number;
  paperclip: number;
  paperclipCost: number;
  paperclipCostRef: number;
  paperclipPerSecond: number;
  publicDemand: number;
  processor: number;
  trust: number;
  trustCost: number;
  unsold: number;
  unsoldBonus: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
}
