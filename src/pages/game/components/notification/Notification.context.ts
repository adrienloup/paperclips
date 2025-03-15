import { createContext, Dispatch } from 'react';
import { initialState } from '@/src/pages/game/components/notification/Notification.state.ts';
import { Action, State } from '@/src/pages/game/components/notification/Notification.type.ts';

export const NotificationContext = createContext<State>(initialState);
export const NotificationDispatchContext = createContext<Dispatch<Action>>(() => {});
