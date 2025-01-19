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

/*
import { State } from '@/src/game/components/dashboard/Dashboard.type.ts';

export const initialState: State = {
  clipStock: 0,
};

 */
