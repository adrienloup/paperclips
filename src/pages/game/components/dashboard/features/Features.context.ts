import { createContext, Dispatch } from 'react';
import { featuresState } from '@/src/pages/game/components/dashboard/features/Features.state.ts';
import { Action, State } from '@/src/pages/game/components/dashboard/features/Features.type.ts';

export const FeaturesContext = createContext<State>(featuresState);
export const FeaturesDispatchContext = createContext<Dispatch<Action>>(() => {});
