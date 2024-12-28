import { useLocalStorage } from '../generic/hooks/useLocalStorage';
import { Children } from '../generic/types/Children.type';
import { Game } from './Game.type';
import { GameContext, GameDispatchContext } from './Game.context';

export function GameProvider({ children }: { children: Children }) {
  const [game, setGame] = useLocalStorage<Game>('_game_3mma_0', {
    paperclips: 0,
    paperclipCost: 0.25,
    unsoldInventory: 0,
    fundsAvailable: 0,
    feature: {
      autoClippers: false,
      marketing: false,
      trust: false,
    },
    publicDemand: 75,
    steelWire: 1000,
    steelWireCost: 6.25,
    steelWireRefill: 50,
    autoClippers: 0,
    autoClippersCost: 5.05,
    marketing: 1,
    marketingCost: 100,
  });

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={setGame}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
