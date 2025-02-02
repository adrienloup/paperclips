import { State } from '@/src/game/components/dashboard/Dashboard.type';

export const initialState: State = {
  clips: 0,
  clipsCost: 0.2,
  clipsStock: 0, // Unsold inventory
  clipsSales: 90,
  clipsBonus: 0,
  clipsPerSecond: 0,
  wireCost: 20,
  wireStock: 1000,
  wireBonus: 0,
  funds: 0,
  publicDemand: 0.8,
  publicDemandBonus: 8,
  marketing: 1,
  marketingBonus: 0,
  autoClippers: 0,
  autoClippersCost: 5,
  autoClippersBonus: 0,
  megaClippers: 0,
  megaClippersCost: 500,
};
