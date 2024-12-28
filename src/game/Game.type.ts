import { Feature } from '../generic/types/Feature.type';

export interface Game {
  paperclips: number;
  paperclipCost: number;
  unsoldInventory: number;
  fundsAvailable: number;
  feature: Feature;
  publicDemand: number;
  steelWire: number;
  steelWireCost: number;
  steelWireRefill: number;
  autoClippers: number;
  autoClippersCost: number;
  marketing: number;
  marketingCost: number;
}
