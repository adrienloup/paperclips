import { createContext, Dispatch } from 'react';
import { Action, State } from '@/src/game/components/dashboard/Dashboard.type';
import { initialState } from '@/src/game/components/dashboard/Dashboard.state';

export const DashboardContext = createContext<State>(initialState);
export const DashboardDispatchContext = createContext<Dispatch<Action>>(() => {});
