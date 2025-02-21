import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
import { State } from '@/src/game/repository/Game.type.ts';
import { GameContext, GameDispatchContext } from '@/src/game/repository/Game.context.ts';
import { gameReducer } from '@/src/game/repository/Game.reducer.ts';
import { initialState } from '@/src/game/repository/Game.state.ts';

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
