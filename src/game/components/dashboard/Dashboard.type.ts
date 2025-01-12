export interface Dashboard {
  clipTotal: number;
  clipStock: number;
  clipCost: number;
  transitStock: number | null;
  autoClippers: number;
  autoClippersCost: number;
  productionBonus: number;
  wireStock: number;
  wireCost: number;
  wireBonus: number;
  funds: number;
  publicDemand: number;
  marketing: number;
  marketingCost: number;
  clipsPerSecond: number;
  trust: number;
  feature: {
    autoClippers: {
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };
    marketing: {
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };
    computationalResources: {
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };
    revTracker: {
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };
    improvedProduction: {
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };
    autoAverage: {
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };
  };
}
