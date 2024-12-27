import { useContext } from 'react';
import { GameContext, GameDispatchContext } from './Game.context';

export function useGame() {
  return useContext(GameContext);
}

export function useGameDispatch() {
  return useContext(GameDispatchContext);
}
