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
}
