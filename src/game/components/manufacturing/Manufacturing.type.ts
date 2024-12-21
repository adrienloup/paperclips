export interface Manufacturing {
  autoProducers: number;
  autoProducerCost: number;
  clipsYield: number;
  unlockedFeatures: {
    autoProducers: boolean; // @TODO: Add more features
  };
  wire: number;
  wireCost: number;
  buyAutoProducer: () => void;
  buyWire: () => void;
  produceClip: () => void;
}
