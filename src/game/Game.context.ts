import { Dispatch, createContext } from 'react';
import { Game } from './Game.type';
import { initialValue } from './Game.value';

export const GameContext = createContext<Game>(initialValue);

export const GameDispatchContext = createContext<Dispatch<Game>>(() => {});
