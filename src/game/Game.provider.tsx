import { useLocalStorage } from '../generic/hooks/useLocalStorage';
import { Children } from '../generic/types/Children.type';
import { Game } from './Game.type';
import { GameContext, GameDispatchContext } from './Game.context';

export function GameProvider({ children }: { children: Children }) {
  const [game, setGame] = useLocalStorage<Game>('_game_3mma_0', {
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

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={setGame}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
