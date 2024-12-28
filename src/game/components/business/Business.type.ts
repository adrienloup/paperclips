import { Feature } from '../../../generic/types/Feature.type';

export interface Business {
  feature: Feature;
  fundsAvailable: number;
  paperclipCost: number;
  unsoldInventory: number;
  marketing: number;
  marketingCost: number;
  publicDemand: number;
  decreasePaperclipCost: () => void;
  increasePaperclipCost: () => void;
  buyMarketing: () => void;
}
