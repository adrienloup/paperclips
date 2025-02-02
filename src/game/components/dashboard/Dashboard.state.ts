import { State } from '@/src/game/components/dashboard/Dashboard.type';

export const initialState: State = {
  clips: 0,
  clipsCost: 0.01,
  clipsStock: 0, // Unsold inventory
  clipsSales: 90,
  clipsBonus: 0,
  wireCost: 0,
  wireStock: 1000,
  funds: 0,
  publicDemand: 1,
  publicDemandBonus: 10,
  marketing: 1,
  marketingBonus: 0,
  autoClippers: 0,
  megaClippers: 0,
};
