import { createContext, Dispatch } from 'react';
import { State } from '@/src/game/components/dashboard/Dashboard.type';
import { Action } from '@/src/game/components/dashboard/Dashboard.reducer';
import { initialState } from '@/src/game/components/dashboard/Dashboard.state';

export const DashboardContext = createContext<State>(initialState);
export const DashboardDispatchContext = createContext<Dispatch<Action>>(() => {});
