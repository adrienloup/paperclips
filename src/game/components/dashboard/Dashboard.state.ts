import { Dashboard } from './Dashboard.type';

export const initialState: Dashboard = {
  clipTotal: 100000, // @TODO
  clipStock: 0,
  clipCost: 0.65,
  transitStock: null,
  autoClippers: 0,
  autoClippersCost: 5,
  productionBonus: 0.1,
  wireStock: 1000,
  wireCost: 20,
  wireBonus: 0.1,
  funds: 100000, // @TODO
  publicDemand: 35,
  marketing: 1,
  marketingCost: 100,
  clipsPerSecond: 0,
  trust: 1,
  feature: {
    marketing: {
      enabled: false,
      disabled: false,
      incurred: false,
    },
    computationalResources: {
      enabled: false,
      disabled: false,
      incurred: false,
    },
    revTracker: {
      enabled: false,
      disabled: false,
      incurred: false,
    },
    improvedProduction: {
      enabled: false,
      disabled: false,
      incurred: false,
    },
    autoAverage: {
      enabled: false,
      disabled: false,
      incurred: false,
    },
  },
};
