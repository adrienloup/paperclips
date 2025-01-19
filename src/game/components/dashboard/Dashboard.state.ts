import { State } from '@/src/game/components/dashboard/Dashboard.type';

export const initialState: State = {
  clipTotal: 0,
  clipStock: 0,
  clipCost: 0.65,
  transitStock: 0,
  autoClippers: 0,
  autoClippersCost: 5,
  productionBonus: 0.1,
  wireStock: 100,
  wireCost: 20,
  wireBonus: 0.1,
  funds: 0,
  publicDemand: 35,
  marketing: 1,
  marketingCost: 100,
  clipsPerSecond: 0,
  trust: 1,
  feature: {
    autoClippers: {
      enabled: false,
      incurred: false,
    },
    marketing: {
      enabled: false,
      incurred: false,
    },
    computationalResources: {
      enabled: false,
      incurred: false,
    },
    projects: {
      enabled: false,
      incurred: false,
    },
    revTracker: {
      enabled: true,
      incurred: true,
    },
    improvedProduction: {
      enabled: true,
      incurred: true,
    },
    autoAverage: {
      enabled: false,
      incurred: false,
    },
  },
};

/*
import { State } from '@/src/game/components/dashboard/Dashboard.type.ts';

export const initialState: State = {
  clipStock: 0,
};

 */
