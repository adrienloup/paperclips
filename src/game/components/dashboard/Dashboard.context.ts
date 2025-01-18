import { createContext, Dispatch } from 'react';
import { Dashboard } from '@/src/game/components/dashboard/Dashboard.type';
import { Action } from '@/src/game/components/dashboard/Dashboard.reducer';
import { initialState } from '@/src/game/components/dashboard/Dashboard.state';

export const DashboardContext = createContext<Dashboard>(initialState);
export const DashboardDispatchContext = createContext<Dispatch<Action>>(() => {});
