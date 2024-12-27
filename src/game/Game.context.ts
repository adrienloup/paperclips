import { Dispatch, createContext } from 'react';
import { Game } from './Game.type';

export const GameContext = createContext<Game>({
  clips: 0,
  clipsCost: 0.25,
  unsoldInventory: 0,
  fundsAvailable: 0,
  steelWire: 1000,
  autoProducers: 0,
  autoProducerCost: 5,
  marketing: 1,
  marketingCost: 100,
});

export const GameDispatchContext = createContext<Dispatch<Game>>(() => {});
