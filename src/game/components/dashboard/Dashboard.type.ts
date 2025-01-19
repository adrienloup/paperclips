export type Action =
  | { type: 'UPDATE_PER_SECOND' }
  | { type: 'DECREASE_CLIP_STOCK' }
  | { type: 'ADD_CLIP' }
  | { type: 'ADD_WIRE' }
  | { type: 'ADD_AUTOCLIPPER' }
  | { type: 'PRODUCE_AUTOCLIPPER' }
  | { type: 'INCREASE_CLIP_COST' }
  | { type: 'DECREASE_CLIP_COST' }
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'UPDATE_MARKETING' }
  | { type: 'UPDATE_PRODUCTION_BONUS'; ratio: number }
  | { type: 'UPDATE_WIRE_BONUS'; ratio: number }
  | {
      type: 'UPDATE_DISPLAY_FEATURE';
      feature: string;
      enabled: boolean;
      disabled: boolean;
      incurred: boolean;
    }
  | { type: 'LOAD_STATE' };

export interface State {
  clipTotal: number;
  clipStock: number;
  clipCost: number;
  transitStock: number;
  //transitStock: number | null;
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
