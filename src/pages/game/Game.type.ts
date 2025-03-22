export type Action =
  | { type: 'SELL_CLIPS' }
  | { type: 'PRODUCE_MANUAL' }
  | { type: 'BUY_WIRE' }
  | { type: 'BUY_AUTOCLIPPERS' }
  | { type: 'BUY_MEGACLIPPERS' }
  | { type: 'BUY_MARKETING' }
  | { type: 'BUY_HARVESTER_DRONES' }
  | { type: 'BUY_WIRE_DRONES' }
  | { type: 'BUY_CLIP_FACTORY' }
  | { type: 'INCREASE_SELLING_PRICE' }
  | { type: 'DECREASE_SELLING_PRICE' }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSORS' }
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_WIRE'; value: number }
  | { type: 'UPDATE_DRONES'; value: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_PRODUCE_BONUS'; bonus: number }
  | { type: 'INITIALIZE_STATE'; state: State };

export interface State {
  autoClippers: number;
  autoClippersCost: number;
  clipFactory: number;
  clipFactoryCost: number;
  clips: number;
  creativity: number;
  creativityLimit: number;
  drones: number;
  funds: number;
  fundsPerSecond: number;
  harvesterDrones: number;
  harvesterDronesCost: number;
  marketing: number;
  marketingCost: number;
  megaClippers: number;
  megaClippersCost: number;
  memory: number;
  operations: number;
  operationsLimit: number;
  processors: number;
  produceBonus: number;
  producePerSecond: number;
  publicDemand: number;
  sellingPrice: number;
  sellingPriceRef: number;
  trust: number;
  trustCost: number;
  unsoldInventory: number;
  wire: number;
  wireBonus: number;
  wireCost: number;
  wireDrones: number;
  wireDronesCost: number;
  wireStock: number;
}
