import { State } from '@/src/game/components/dashboard/Dashboard.type';

export const initialState: State = {
  clips: 0,
  clipsCost: 0.2,
  clipsStock: 0,
  clipsTransit: 0,
  clipsPerSecond: 0,
  wireCost: 20,
  wireStock: 100,
  wireBonus: 0.1,
  funds: 0,
  publicDemand: 0.05,
  marketing: 1,
  marketingCost: 100,
  autoClippers: 0,
  autoClippersCost: 5,
  megaClippers: 0,
  megaClippersCost: 500,
  productionBonus: 0.025,
};
