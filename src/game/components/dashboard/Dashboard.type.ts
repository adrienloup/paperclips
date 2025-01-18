export type Action =
  | { type: 'INCREASE' }
  | { type: 'DECREASE' }
  | { type: 'ADD_AUTOCLIPPER' }
  | { type: 'PRODUCE_AUTOCLIPPER' }
  | { type: 'BUY_WIRE' }
  | { type: 'INCREASE_CLIP_COST' }
  | { type: 'DECREASE_CLIP_COST' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'INCREASE_MARKETING' }
  | { type: 'UPDATE_PRODUCTION_RATIO'; productionRatio: number }
  | { type: 'UPDATE_WIRE_RATIO'; wireRatio: number }
  | {
      type: 'UPDATE_DISPLAY_FEATURE';
      feature: string;
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    };

export interface State {
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
