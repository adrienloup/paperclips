import { createContext, Dispatch } from 'react';
import { Action, State } from '@/src/generic/common/component/alerts/Alerts.type.ts';

export const AlertsContext = createContext<State>([]);
export const AlertsDispatchContext = createContext<Dispatch<Action>>(() => {});
