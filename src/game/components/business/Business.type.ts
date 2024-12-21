import { Feature } from '../../../generic/types/Feature.type';

export interface Business {
  clipsCost: number;
  funds: number;
  inventory: number;
  marketing: number;
  marketingCost: number;
  publicDemand: number;
  feature: Feature;
  decreaseClipsCost: () => void;
  increaseClipsCost: () => void;
  buyMarketing: () => void;
}
