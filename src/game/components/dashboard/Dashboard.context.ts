import { Dispatch, createContext } from 'react';
import { Dashboard } from './Dashboard.type';
import { initialState } from './Dashboard.state';

export const DashboardContext = createContext<Dashboard>(initialState);
export const DashboardDispatchContext = createContext<Dispatch<Dashboard>>(() => {});
