import { State } from '@/src/pages/game/Game.type.ts';

export const initialState: State = {
  autoClippers: 0,
  autoClippersCost: 5,
  clips: 0,
  funds: 0,
  fundsPerSecond: 0,
  marketing: 1,
  marketingCost: 100,
  megaClippers: 0,
  megaClippersCost: 500,
  megaClippersRef: 0,
  produceBonus: 1,
  producePerSecond: 0,
  publicDemand: 0.5,
  sellingPrice: 0.2,
  sellingPriceRef: 0.2,
  unsoldInventory: 0,
  wire: 100,
  wireBonus: 1,
  wireCost: 20,
  wireStock: 100,
};
