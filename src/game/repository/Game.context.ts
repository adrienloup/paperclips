import { createContext, Dispatch } from 'react';
import { Action, State } from '@/src/game/repository/Game.type.ts';
import { initialState } from '@/src/game/repository/Game.state.ts';

export const GameContext = createContext<State>(initialState);
export const GameDispatchContext = createContext<Dispatch<Action>>(() => {});
