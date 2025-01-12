import { Dashboard } from './Dashboard.type';

export const initialState: Dashboard = {
  clipTotal: 1000000, // @TODO
  clipStock: 0,
  clipCost: 0.65,
  transitStock: null,
  autoClippers: 0,
  autoClippersCost: 5,
  productionBonus: 0.1,
  wireStock: 1000,
  wireCost: 20,
  wireBonus: 0.1,
  funds: 10000, // @TODO
  publicDemand: 35,
  marketing: 1,
  marketingCost: 100,
  clipsPerSecond: 0,
};
