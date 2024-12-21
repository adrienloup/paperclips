import { Feature } from '../../../generic/types/Feature.type';

export interface Manufacturing {
  autoProducers: number;
  autoProducerCost: number;
  clipsPerSecond: number;
  feature: Feature;
  wire: number;
  wireCost: number;
  buyAutoProducer: () => void;
  buyWire: () => void;
  produceClip: () => void;
}
