export interface UIVisibility {
  enable: boolean;
  disable: boolean;
}
export interface Feature {
  autoClipper: UIVisibility;
  computationalResources: UIVisibility;
  projects: UIVisibility;
  revTracker: UIVisibility;
  autoTracker: UIVisibility;
  improvedAutoClipper: UIVisibility;
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
  autoClipperBonus: number;
  processorBonus: number;
  feature: Feature;
}
