import { useLocalStorage } from '../generic/hooks/useLocalStorage';
import { Children } from '../generic/types/Children.type';
import { Game } from './Game.type';
import { GameContext, GameDispatchContext } from './Game.context';
import { initialValue } from './Game.data';

export function GameProvider({ children }: { children: Children }) {
  const [game, setGame] = useLocalStorage<Game>('_game_3mma_0', initialValue);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={setGame}>{children}</GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
