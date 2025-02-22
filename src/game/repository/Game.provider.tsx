import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage';
import { gameReducer } from '@/src/game/repository/Game.reducer';
import { GameContext, GameDispatchContext } from '@/src/game/repository/Game.context';
import { initialState } from '@/src/game/repository/Game.state';
import { State } from '@/src/game/repository/Game.type';
import { Children } from '@/src/generic/types/Children.type';

export function GameProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<State>('_3mma_0_game', initialState);
  const [game, setGame] = useReducer(gameReducer, state);

  const update = useCallback(() => {
    setState(game);
  }, [game, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={setGame}>{children}</GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
