import { useContext } from 'react';
import { GameContext, GameDispatchContext } from '@/src/game/repository/Game.context';

export function useGame() {
  return useContext(GameContext);
}
export function useGameDispatch() {
  return useContext(GameDispatchContext);
}
