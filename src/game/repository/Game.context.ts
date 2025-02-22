import { createContext, Dispatch } from 'react';
import { initialState } from '@/src/game/repository/Game.state';
import { Action, State } from '@/src/game/repository/Game.type';

export const GameContext = createContext<State>(initialState);
export const GameDispatchContext = createContext<Dispatch<Action>>(() => {});
