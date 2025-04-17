import { createContext, Dispatch } from 'react';
import { gameState } from '@/src/page/game/Game.state.ts';
import { Action, State } from '@/src/page/game/Game.type.ts';

export const GameContext = createContext<State>(gameState);
export const GameDispatchContext = createContext<Dispatch<Action>>(() => {});
