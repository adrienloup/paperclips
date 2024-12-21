export interface Business {
  funds: number;
  inventory: number;
  publicDemand: number;
  clipsCost: number;
  decreaseClipsCost: () => void;
  increaseClipsCost: () => void;
}
