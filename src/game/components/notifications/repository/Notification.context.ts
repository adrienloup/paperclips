import { createContext, Dispatch } from 'react';
import { initialState } from '@/src/game/components/notifications/repository/Notification.state.ts';
import { Action, State } from '@/src/game/components/notifications/repository/Notification.type.ts';

export const NotificationContext = createContext<State>(initialState);
export const NotificationDispatchContext = createContext<Dispatch<Action>>(() => {});
