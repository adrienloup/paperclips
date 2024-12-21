import { Feature } from '../../../generic/types/Feature.type';

export interface Manufacturing {
  autoProducers: number;
  autoProducerCost: number;
  clipsYield: number;
  feature: Feature;
  wire: number;
  wireCost: number;
  buyAutoProducer: () => void;
  buyWire: () => void;
  produceClip: () => void;
}
