import { useContext } from 'react';
import { GameContext, GameDispatchContext } from '@/src/page/game/Game.context.ts';

export const useGame = () => useContext(GameContext);
export const useGameDispatch = () => useContext(GameDispatchContext);
