import { createContext, Dispatch } from 'react';
import { initialState } from '@/src/pages/game/components/features/Features.state.ts';
import { Action, State } from '@/src/pages/game/components/features/Features.type.ts';

export const FeaturesContext = createContext<State>(initialState);
export const FeaturesDispatchContext = createContext<Dispatch<Action>>(() => {});
