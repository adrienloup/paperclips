import { createContext, Dispatch } from 'react';
import { Dashboard } from './Dashboard.type';
import { Action } from './Dashboard.reducer';
import { initialState } from './Dashboard.state';

export const DashboardContext = createContext<Dashboard>(initialState);
export const DashboardDispatchContext = createContext<Dispatch<Action>>(() => {});
