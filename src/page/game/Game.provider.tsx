import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hook/useLocalStorage.ts';
import { gameReducer } from '@/src/page/game/Game.reducer.ts';
import { GameContext, GameDispatchContext } from '@/src/page/game/Game.context.ts';
import { gameState } from '@/src/page/game/Game.state.ts';
import { State } from '@/src/page/game/Game.type.ts';
import { Children } from '@/src/generic/type/Children.type.ts';

export function GameProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<State>('_game_3mma_0', gameState);
  const [state, dispatch] = useReducer(gameReducer, storedState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <GameContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>{children}</GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
