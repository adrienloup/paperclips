export interface Feature {
  autoClipper: boolean;
  mechanic: boolean;
  autoTracker: boolean;
}
export interface Game {
  clipStock: number;
  pricePerClip: number;
  unsoldInventoryStock: number;
  steelWireStock: number;
  pricePerSteelWire: number;
  fundsAvailable: number;
  autoClipper: number;
  pricePerAutoClipper: number;
  marketingLevel: number;
  pricePerMarketingLevel: number;
  trust: number;
  processor: number;
  memory: number;
  operation: number;
  creativity: number;
  feature: Feature;
}
