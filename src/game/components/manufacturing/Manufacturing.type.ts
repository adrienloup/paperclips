import { Feature } from '../../../generic/types/Feature.type';

export interface Manufacturing {
  autoClippers: number;
  autoClippersCost: number;
  paperclipPerSecond: number;
  feature: Feature;
  steelWire: number;
  steelWireCost: number;
  buyAutoClippers: () => void;
  buySteelWire: () => void;
  producePaperclip: () => void;
}
