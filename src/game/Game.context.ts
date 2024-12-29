import { Dispatch, createContext } from 'react';
import { Game } from './Game.type';

export const GameContext = createContext<Game>({
  paperclips: 0,
  paperclipCost: 0.25,
  unsoldInventory: 0,
  fundsAvailable: 0,
  feature: {
    autoClippers: false,
    marketing: false,
    trust: false,
  },
  trust: 1,
  operations: 0,
  creativity: 0,
  processors: 1,
  memory: 1,
  publicDemand: 75,
  steelWire: 1000,
  steelWireCost: 6.25,
  steelWireRefill: 50,
  autoClippers: 0,
  autoClippersCost: 5.05,
  marketing: 1,
  marketingCost: 100,
});

export const GameDispatchContext = createContext<Dispatch<Game>>(() => {});
