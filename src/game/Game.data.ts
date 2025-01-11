export const initialValue = {
  clipStock: 0,
  pricePerClip: 0.65,
  unsoldInventoryStock: 0,
  steelWireStock: 1000,
  pricePerSteelWire: 20,
  fundsAvailable: 0,
  autoClipper: 0,
  pricePerAutoClipper: 5,
  marketingLevel: 1,
  pricePerMarketingLevel: 100,
  trust: 0,
  processor: 0,
  memory: 0,
  operation: 0,
  creativity: 0,
  autoClipperBonus: 0,
  processorBonus: 0,
  feature: {
    autoClipper: {
      enable: false,
      disable: false,
    },
    computationalResources: {
      enable: false,
      disable: false,
    },
    projects: {
      enable: false,
      disable: false,
    },
    revTracker: {
      enable: false,
      disable: false,
    },
    autoTracker: {
      enable: false,
      disable: false,
    },
    improvedAutoClipper: {
      enable: false,
      disable: false,
    },
  },
};

export const CLIPS = [
  2000, 3000, 5000, 8000, 10000, 20000, 50000, 80000, 100000, 120000,
  //160000, 200000, 400000, 600000, 800000, 1000000, 3000000, 9000000, 110000000, 120000000,
  // @TODO: trust -10
];

export const CREATIVITIES = [1, 10, 25, 50, 100, 150, 250, 500, 25000, 50000];

export const MEMORIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const OPERATIONS = [
  500, 3000, 9000, 15000, 30000, 50000, 75000, 90000, 110000, 250000, 350000, 500000, 750000,
  1000000, 1500000, 2000000, 3500000, 5000000, 6500000, 9000000,
];

export const TRUSTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // @TODO: trust +10 with projects
