import { createContext, Dispatch } from 'react';
import { featuresState } from '@/src/page/game/component/features/Features.state.ts';
import { Action, State } from '@/src/page/game/component/features/Features.type.ts';

export const FeaturesContext = createContext<State>(featuresState);
export const FeaturesDispatchContext = createContext<Dispatch<Action>>(() => {});
