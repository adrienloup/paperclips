export type Action =
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'BUY_MACHINE'; cost: number }
  | { type: 'BUY_MEGAMACHINE'; cost: number }
  | { type: 'BUY_FACTORY'; cost: number }
  | { type: 'UPDATE_FEATURE'; feature: string; value: boolean }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'BUY_MARKETING' }
  | { type: 'INCREASE_PAPERCLIP_COST' }
  | { type: 'DECREASE_PAPERCLIP_COST' }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'INCREASE_WALLET'; symbol: string; price: number }
  | { type: 'DECREASE_WALLET'; symbol: string; price: number }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_PAPERCLIP' }
  | { type: 'UPDATE_TRUST'; value: number }
  | { type: 'UPDATE_OPERATION'; value: number }
  | { type: 'UPDATE_WIRE_BONUS'; value: number }
  | { type: 'UPDATE_UNSOLD_INVENTORY_BONUS'; value: number }
  | { type: 'INITIALIZE'; state: State };

export interface State {
  cash: number;
  creativity: number;
  factory: number;
  factoryCost: number;
  feature: {
    factory: boolean;
    machine: boolean;
    marketing: boolean;
    megaMachine: boolean;
    paperclipPerSecond: boolean;
    resources: boolean;
    wire: boolean;
  };
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
  paperclipPrice: number;
  paperclipPriceRef: number;
  paperclipPerSecond: number;
  publicDemand: number;
  processor: number;
  swarmGifts: number;
  trust: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
  wallet: Record<string, { quantity: number }>;
  wire: number;
  wireBonus: number;
  wireCost: number;
  wireDrone: number;
  wireDroneCost: number;
}
